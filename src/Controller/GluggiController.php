<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Controller;

use Becklyn\GluggiBundle\Component\ComponentConfiguration;
use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Exception\ComponentNotFoundException;
use Becklyn\GluggiBundle\Exception\TypeNotFoundException;
use Becklyn\GluggiBundle\Type\TypeRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

/**
 * Controller for the main gluggi view.
 */
class GluggiController extends AbstractController
{
    /**
     * Renders the welcome screen.
     *
     * @param GluggiConfig $config
     *
     * @return Response
     */
    public function index (GluggiConfig $config) : Response
    {
        return $this->render("@Gluggi/index/index.html.twig", [
            "config" => $config,
        ]);
    }


    /**
     * Renders a single component.
     *
     * @param TypeRegistry           $registry
     * @param GluggiConfig           $config
     * @param ComponentConfiguration $componentConfiguration
     * @param string                 $type
     * @param string                 $key
     *
     * @return Response
     */
    public function component (
        TypeRegistry $registry,
        GluggiConfig $config,
        ComponentConfiguration $componentConfiguration,
        string $type,
        string $key
    ) : Response
    {
        try
        {
            $component = $registry->getComponent($type, $key);

            if ($component->isHidden())
            {
                throw $this->createNotFoundException(\sprintf("The component '%s/%s' has no single view.", $type, $key));
            }

            $template = "page" === $component->getType()->getKey()
                ? "@Gluggi/component/page.html.twig"
                : "@Gluggi/component/component.html.twig";

            return $this->render($template, [
                "component" => $component,
                "pageTitle" => [
                    $component->getName(),
                    $component->getType()->getName(),
                ],
                "templateConfiguration" => $componentConfiguration->getConfiguration($component),
                "config" => $config,
            ]);
        }
        catch (TypeNotFoundException $e)
        {
            throw $this->createNotFoundException($e->getMessage(), $e);
        }
        catch (ComponentNotFoundException $e)
        {
            /** @var Component[] $found */
            $found = [];

            foreach ($registry->getAll() as $registeredType)
            {
                if ($registeredType->hasComponent($key))
                {
                    $found[] = $registeredType->getComponent($key);
                }
            }

            // a component with the same key exists in only a single other type -> redirect there
            if (1 === \count($found))
            {
                return $this->redirectToRoute("gluggi.component", [
                    "type" => $found[0]->getType()->getKey(),
                    "key" => $key,
                ]);
            }

            $message = empty($found)
                ? $e->getMessage()
                : \sprintf(
                    "Component with key '%s' doesn't exist in type '%s', but in these types: %s",
                    $key,
                    $type,
                    \implode(", ", \array_map(function (Component $c) { return $c->getType()->getKey(); }, $found))
                );

            throw $this->createNotFoundException($message, $e);
        }
    }
}

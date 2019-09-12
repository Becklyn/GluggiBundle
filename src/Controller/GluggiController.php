<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Controller;

use Becklyn\GluggiBundle\Component\ComponentConfiguration;
use Becklyn\GluggiBundle\Configuration\GluggiConfig;
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
     * @param TypeRegistry $registry
     * @param GluggiConfig $config
     *
     * @return Response
     */
    public function index (TypeRegistry $registry, GluggiConfig $config) : Response
    {
        return $this->render("@Gluggi/index/index.html.twig", [
            "types" => $registry->getAll(),
            "infoAction" => $config->getInfoAction(),
            "customTitle" => $config->getTitle(),
        ]);
    }


    /**
     * Renders a single component.
     *
     * @param TypeRegistry           $registry
     * @param ComponentConfiguration $componentConfiguration
     * @param string                 $type
     * @param string                 $key
     *
     * @return Response
     */
    public function component (
        TypeRegistry $registry,
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
            ]);
        }
        catch (TypeNotFoundException $e)
        {
            throw $this->createNotFoundException($e->getMessage(), $e);
        }
    }
}

<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Twig;

use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Becklyn\GluggiBundle\Form\ExampleForm;
use Becklyn\GluggiBundle\Type\TypeRegistry;
use Becklyn\RadBundle\Html\DataContainer;
use Psr\Container\ContainerInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Exposes all gluggi-related twig functions.
 */
class GluggiTwigExtension extends AbstractExtension
{
    /**
     * @var TypeRegistry
     */
    private $registry;


    /**
     * @var GluggiConfig
     */
    private $config;


    /**
     * @var ContainerInterface
     */
    private $locator;


    /**
     * @var FormFactoryInterface
     */
    private $formFactory;


    /**
     */
    public function __construct (
        ContainerInterface $locator,
        TypeRegistry $registry,
        GluggiConfig $config,
        FormFactoryInterface $formFactory
    )
    {
        $this->registry = $registry;
        $this->config = $config;
        $this->locator = $locator;
        $this->formFactory = $formFactory;
    }



    /**
     * Renders a gluggi component.
     */
    public function renderGluggiComponent (string $type, string $name, array $context = []) : string
    {
        $component = $this->registry->getComponent($type, $name);

        $context = \array_replace([
            "standalone" => false,
        ], $context);

        return
            "<!-- Component Start: {$type}/{$name} -->" .
            \trim($this->locator->get("twig")->render($component->getTemplatePath(), $context)) .
            "<!-- / Component End: {$type}/{$name} -->";
    }


    /**
     * Returns the dummy content.
     */
    public function getDummy (string $type, array $options = []) : string
    {
        $twig = $this->locator->get("twig");
        $hasModernRadBundle = \class_exists(DataContainer::class);
        $allowedContentTypes = [
            "content",
            "form",
        ];

        // dummy: "content"
        if ($allowedContentTypes[0] === $type)
        {
            $options = \array_replace([
                "headlines" => 4,
            ], $options);

            $options["headlines"] = \min(6, \max(1, $options["headlines"]));
            return $twig->render("@Gluggi/dummy/content.html.twig", $options);
        }

        // dummy: "form"
        if ($allowedContentTypes[1] === $type)
        {
            if (!$hasModernRadBundle)
            {
                throw new \InvalidArgumentException("The 'form' dummy content needs becklyn/rad-bundle v6+");
            }

            $form = $this->formFactory->create(ExampleForm::class, null);
            ExampleForm::addErrors($form);

            return $twig->render("@Gluggi/dummy/form.html.twig", [
                "form" => $form->createView(),
            ]);
        }

        throw new \InvalidArgumentException(\sprintf(
            "Unsupported dummy content '%s'. Supported are: %s",
            $type,
            "'" . \implode("', '", $allowedContentTypes) . "'"
        ));
    }



    /**
     * Returns the template name.
     */
    public function getTemplateName (string $type, string $name) : string
    {
        return $this->registry->getComponent($type, $name)->getTemplatePath();
    }



    /**
     * @inheritdoc
     */
    public function getFunctions ()
    {
        return [
            new TwigFunction("gluggi", [$this, "renderGluggiComponent"], ["is_safe" => ["html"]]),
            new TwigFunction("gluggi_data", [$this->config, "getData"]),
            new TwigFunction("gluggi_dummy", [$this, "getDummy"], ["is_safe" => ["html"]]),
            new TwigFunction("gluggi_template", [$this, "getTemplateName"]),
        ];
    }
}

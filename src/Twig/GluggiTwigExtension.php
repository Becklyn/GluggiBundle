<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Twig;

use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Becklyn\GluggiBundle\Type\TypeRegistry;
use Psr\Container\ContainerInterface;
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
     * @param ContainerInterface $locator
     * @param TypeRegistry       $registry
     * @param GluggiConfig       $config
     */
    public function __construct (ContainerInterface $locator, TypeRegistry $registry, GluggiConfig $config)
    {
        $this->registry = $registry;
        $this->config = $config;
        $this->locator = $locator;
    }



    /**
     * Renders a gluggi component.
     *
     * @param string $type
     * @param string $name
     * @param array  $context
     *
     * @return string
     */
    public function renderGluggiComponent (string $type, string $name, array $context = []) : string
    {
        $component = $this->registry->getComponent($type, $name);

        $context = \array_replace([
            "standalone" => false,
        ], $context);

        return
            "<!-- Component Start: {$type}/{$name} -->" .
            $this->locator->get("twig")->render($component->getTemplatePath(), $context) .
            "<!-- / Component End: {$type}/{$name} -->";
    }


    /**
     * Returns the dummy content.
     *
     * @param string $type
     *
     * @return string
     */
    public function getDummy (string $type) : string
    {
        $twig = $this->locator->get("twig");
        $allowedContentTypes = [
            "content",
        ];

        if ($allowedContentTypes[0] === $type)
        {
            return $twig->render("@Gluggi/dummy/content.html.twig");
        }

        throw new \InvalidArgumentException(\sprintf(
            "Unsupported dummy content '%s'. Supported are: %s",
            $type,
            "'" . \implode("', '", $allowedContentTypes) . "'"
        ));
    }



    /**
     * Returns the template name.
     *
     * @param string $type
     * @param string $name
     *
     * @return string
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

<?php

namespace Becklyn\GluggiBundle\Twig;

use Becklyn\GluggiBundle\Component\GluggiFinder;
use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Becklyn\GluggiBundle\Exception\UnknownComponentException;
use Symfony\Component\DependencyInjection\ServiceLocator;


/**
 * Exposes all gluggi-related twig functions
 */
class GluggiTwigExtension extends \Twig_Extension
{
    /**
     * @var GluggiFinder
     */
    private $finder;


    /**
     * @var GluggiConfig
     */
    private $config;


    /**
     * @var ServiceLocator
     */
    private $locator;


    /**
     * @param GluggiFinder   $finder
     * @param GluggiConfig   $config
     * @param ServiceLocator $locator
     */
    public function __construct (GluggiFinder $finder, GluggiConfig $config, ServiceLocator $locator)
    {
        $this->finder = $finder;
        $this->config = $config;
        $this->locator = $locator;
    }



    /**
     * Renders a gluggi component
     *
     * @param string $type
     * @param string $name
     * @param array  $context
     *
     * @return string
     */
    public function renderGluggiComponent (string $type, string $name, array $context = []) : string
    {
        $component = $this->finder->findComponent($type, $name);

        if (null === $component)
        {
            throw new UnknownComponentException($name, $type);
        }

        $context = array_replace([
            "standalone" => false,
        ], $context);

        return $this->locator->get("twig")->render($component->getImportPath(), $context);
    }



    /**
     * Returns the template name
     *
     * @param string $type
     * @param string $name
     *
     * @return string
     */
    public function getTemplateName (string $type, string $name) : string
    {
        $component = $this->finder->findComponent($type, $name);

        if (null === $component)
        {
            throw new UnknownComponentException($name, $type);
        }

        return $component->getImportPath();
    }



    /**
     * @inheritdoc
     */
    public function getFunctions ()
    {
        return [
            new \Twig_Function("gluggi_template", [$this, "getTemplateName"]),
            new \Twig_Function("gluggi", [$this, "renderGluggiComponent"], ["is_safe" => ["html"]]),
            new \Twig_Function("gluggi_data", [$this->config, "getData"]),
        ];
    }
}

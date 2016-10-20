<?php

namespace Becklyn\GluggiBundle\Twig;

use Becklyn\GluggiBundle\Component\GluggiFinder;
use Becklyn\GluggiBundle\Exception\UnknownComponentException;
use Symfony\Component\DependencyInjection\ContainerInterface;


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
     * @var ContainerInterface
     */
    private $container;



    /**
     * @param GluggiFinder       $finder
     * @param ContainerInterface $container
     */
    public function __construct (GluggiFinder $finder, ContainerInterface $container)
    {
        $this->finder = $finder;
        $this->container = $container;
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
    public function renderGluggiComponent (string $type, string $name, array $context = [])
    {
        $twig = $this->container->get("twig");
        $component = $this->finder->findComponent($type, $name);

        if (null === $component)
        {
            throw new UnknownComponentException($name, $type);
        }

        $context = array_replace([
            "raw" => true,
        ], $context);

        return $twig->render($component->getImportPath(), $context);
    }



    /**
     * @inheritdoc
     */
    public function getFunctions ()
    {
        return [
            new \Twig_SimpleFunction("gluggi", [$this, "renderGluggiComponent"], ["is_safe" => ["html"]]),
        ];
    }
}

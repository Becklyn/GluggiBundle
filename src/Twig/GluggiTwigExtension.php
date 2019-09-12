<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Twig;

use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Becklyn\GluggiBundle\Type\TypeRegistry;
use Psr\Container\ContainerInterface;
use Symfony\Contracts\Service\ServiceSubscriberInterface;
use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Exposes all gluggi-related twig functions.
 */
class GluggiTwigExtension extends AbstractExtension implements ServiceSubscriberInterface
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
    private $container;


    /**
     * @param TypeRegistry       $registry
     * @param GluggiConfig       $config
     * @param ContainerInterface $container
     */
    public function __construct (TypeRegistry $registry, GluggiConfig $config, ContainerInterface $container)
    {
        $this->registry = $registry;
        $this->config = $config;
        $this->container = $container;
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

        return $this->container->get(Environment::class)->render($component->getTemplatePath(), $context);
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
            new TwigFunction("gluggi_template", [$this, "getTemplateName"]),
        ];
    }


    /**
     * @inheritdoc
     */
    public static function getSubscribedServices ()
    {
        return [
            Environment::class,
        ];
    }
}

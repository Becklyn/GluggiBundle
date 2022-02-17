<?php

namespace Tests\Becklyn\GluggiBundle\App;

use Becklyn\AssetsBundle\BecklynAssetsBundle;
use Becklyn\GluggiBundle\GluggiBundle;
use Becklyn\Rad\BecklynRadBundle;
use Symfony\Bundle\FrameworkBundle\FrameworkBundle;
use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Bundle\TwigBundle\TwigBundle;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Routing\Loader\Configurator\RoutingConfigurator;


class TestKernel extends Kernel
{
    use MicroKernelTrait;


    /**
     * @inheritDoc
     */
    public function __construct ()
    {
        parent::__construct("dev", true);
    }


    /**
     * @inheritdoc
     */
    public function registerBundles () : array
    {
        return [
            new FrameworkBundle(),
            new TwigBundle(),
            new GluggiBundle(),
            new BecklynRadBundle(),
            new BecklynAssetsBundle(),
        ];
    }


    /**
     * @inheritdoc
     */
    protected function configureRoutes (RoutingConfigurator $routes) : void
    {
        $routes->import(__DIR__  ."/../../src/Resources/config/routes.yaml");
        $routes->import(__DIR__  ."/../../vendor/becklyn/assets-bundle/src/Resources/config/routes.yaml");
    }


    /**
     * @inheritdoc
     */
    protected function configureContainer (ContainerConfigurator $container, LoaderInterface $loader, ContainerBuilder $builder): void
    {
        $loader->load(__DIR__ . "/config.yaml");
    }


    /**
     * @inheritDoc
     */
    public function getProjectDir () : string
    {
        return \dirname(__DIR__);
    }
}

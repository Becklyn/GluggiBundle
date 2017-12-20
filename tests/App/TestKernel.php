<?php

namespace Tests\Becklyn\GluggiBundle\App;

use Becklyn\AssetsBundle\BecklynAssetsBundle;
use Becklyn\GluggiBundle\GluggiBundle;
use Symfony\Bundle\FrameworkBundle\FrameworkBundle;
use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Bundle\TwigBundle\TwigBundle;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Routing\RouteCollectionBuilder;
use Tests\Becklyn\GluggiBundle\LayoutBundle\LayoutBundle;


class TestKernel extends Kernel
{
    use MicroKernelTrait;

    /**
     * @inheritdoc
     */
    public function registerBundles ()
    {
        return [
            new FrameworkBundle(),
            new TwigBundle(),
            new GluggiBundle(),
            new BecklynAssetsBundle(),
            new LayoutBundle(),
        ];
    }


    /**
     * @inheritdoc
     */
    protected function configureRoutes (RouteCollectionBuilder $routes)
    {
        $routes->import(__DIR__  ."/../../Resources/config/routes.yaml");
        $routes->import(__DIR__  ."/../../vendor/becklyn/assets-bundle/Resources/config/routes.yaml");
    }


    /**
     * @inheritdoc
     */
    protected function configureContainer (ContainerBuilder $c, LoaderInterface $loader)
    {
        $loader->load(__DIR__ . "/config.yaml");
    }
}

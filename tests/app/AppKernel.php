<?php

use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\HttpKernel\Kernel;


class AppKernel extends Kernel
{
    public function registerBundles ()
    {
        return [
            new \Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new \Symfony\Bundle\TwigBundle\TwigBundle(),
            new \Becklyn\GluggiBundle\GluggiBundle(),
            new Tests\LayoutBundle\LayoutBundle(),
        ];
    }



    public function registerContainerConfiguration (LoaderInterface $loader)
    {
        $loader->load(__DIR__ . "/config.yml");
    }
}

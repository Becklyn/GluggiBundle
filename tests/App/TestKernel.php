<?php

namespace Tests\Becklyn\GluggiBundle\App;

use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\HttpKernel\Kernel;
use Tests\Becklyn\GluggiBundle\LayoutBundle\LayoutBundle;


class TestKernel extends Kernel
{
    public function registerBundles ()
    {
        return [
            new \Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new \Symfony\Bundle\TwigBundle\TwigBundle(),
            new \Becklyn\GluggiBundle\GluggiBundle(),
            new LayoutBundle(),
        ];
    }



    public function registerContainerConfiguration (LoaderInterface $loader)
    {
        $loader->load(__DIR__ . "/config.yml");
    }
}

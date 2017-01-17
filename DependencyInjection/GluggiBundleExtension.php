<?php

namespace Becklyn\GluggiBundle\DependencyInjection;

use Becklyn\GluggiBundle\GluggiBundle;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;


class GluggiBundleExtension extends Extension
{
    /**
     * @inheritdoc
     */
    public function load (array $configs, ContainerBuilder $container)
    {
        $configuration = new GluggiBundleConfiguration();
        $config = $this->processConfiguration($configuration, $configs);

        // load main services.yml
        $loader = new YamlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.yml');

        // wire config to services
        $container->getDefinition('gluggi.assets')
            ->replaceArgument(0, $config['css'])
            ->replaceArgument(1, $config['js']);
    }



    /**
     * @inheritDoc
     */
    public function getAlias ()
    {
        return GluggiBundle::BUNDLE_ALIAS;
    }
}

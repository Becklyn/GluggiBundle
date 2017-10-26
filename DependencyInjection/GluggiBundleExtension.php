<?php

namespace Becklyn\GluggiBundle\DependencyInjection;

use Becklyn\GluggiBundle\Configuration\GluggiConfig;
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

        // wire provided config to config service
        $container->getDefinition(GluggiConfig::class)
            ->replaceArgument(0, $config["info_action"])
            ->replaceArgument(1, $config["title"])
            ->replaceArgument(2, $config['css'])
            ->replaceArgument(3, $config['js'])
            ->replaceArgument(4, $config['js_head'])
            ->replaceArgument(5, $config['data']);
    }



    /**
     * @inheritDoc
     */
    public function getAlias ()
    {
        return GluggiBundle::BUNDLE_ALIAS;
    }
}

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
            ->setArguments([
                $config["info_action"],
                $config["title"],
                $config['css'],
                $config['js'],
                $config['js_head'],
                $config['data']
            ]);
    }



    /**
     * @inheritDoc
     */
    public function getAlias ()
    {
        return GluggiBundle::BUNDLE_ALIAS;
    }
}

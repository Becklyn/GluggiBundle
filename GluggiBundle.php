<?php

namespace Becklyn\GluggiBundle;

use Becklyn\RadBundle\AppBundle\Bundle;
use Symfony\Component\Config\Definition\Builder\NodeParentInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;


class GluggiBundle extends Bundle
{
    /**
     * @inheritdoc
     */
    public function buildConfiguration (NodeParentInterface $root)
    {
        parent::buildConfiguration($root);

        $root
            ->children()
                ->arrayNode('css')
                    ->prototype('scalar')->end()
                    ->defaultValue(['app.css'])
                ->end()
            ->end()
            ->children()
                ->arrayNode('js')
                    ->prototype('scalar')->end()
                    ->defaultValue(['app.js'])
                ->end()
            ->end();
    }



    /**
     * @inheritdoc
     */
    public function buildContainer (array $config, ContainerBuilder $container)
    {
        parent::buildContainer($config, $container);

        $container->getDefinition('gluggi.assets')
            ->replaceArgument(0, $config['css'])
            ->replaceArgument(1, $config['js']);
    }
}

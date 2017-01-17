<?php

namespace Becklyn\GluggiBundle\DependencyInjection;

use Becklyn\GluggiBundle\GluggiBundle;
use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;


class GluggiBundleConfiguration implements ConfigurationInterface
{
    /**
     * @inheritDoc
     */
    public function getConfigTreeBuilder ()
    {
        $treeBuilder = new TreeBuilder();
        $rootNode = $treeBuilder->root(GluggiBundle::BUNDLE_ALIAS);

        $rootNode
            ->children()
                ->scalarNode("info_action")
                    ->defaultNull()
                ->end()
                ->arrayNode('css')
                    ->prototype('scalar')->end()
                    ->defaultValue(['app.css'])
                ->end()
                ->arrayNode('js')
                    ->prototype('scalar')->end()
                    ->defaultValue(['app.js'])
                ->end()
            ->end();

        return $treeBuilder;
    }
}

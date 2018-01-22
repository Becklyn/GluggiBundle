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
                ->scalarNode("layout_dir")
                    ->defaultValue('%kernel.project_dir%/templates/layout')
                ->end()
                ->scalarNode("info_action")
                    ->defaultNull()
                ->end()
                ->scalarNode("title")
                    ->defaultNull()
                ->end()
                ->arrayNode("data")
                    ->prototype("variable")->end()
                    ->defaultValue([])
                ->end()
                ->arrayNode("css")
                    ->prototype("scalar")->end()
                    ->defaultValue([])
                ->end()
                ->arrayNode("js")
                    ->prototype("scalar")->end()
                    ->defaultValue([])
                ->end()
                ->arrayNode("js_head")
                    ->prototype("scalar")->end()
                    ->defaultValue([])
                ->end()
            ->end();

        return $treeBuilder;
    }
}

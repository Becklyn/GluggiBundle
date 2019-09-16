<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle;

use Becklyn\AssetsBundle\Namespaces\RegisterAssetNamespacesCompilerPass;
use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Becklyn\GluggiBundle\DependencyInjection\GluggiBundleConfiguration;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class GluggiBundle extends Bundle
{
    const BUNDLE_ALIAS = "gluggi";


    /**
     * @inheritdoc
     */
    public function build (ContainerBuilder $container) : void
    {
        parent::build($container);

        $container->addCompilerPass(new RegisterAssetNamespacesCompilerPass([
            "gluggi_core" => __DIR__ . "/../build",
        ]));
    }


    /**
     * @inheritdoc
     */
    public function getContainerExtension ()
    {
        return new class() extends Extension {
            /**
             * @inheritdoc
             */
            public function load (array $configs, ContainerBuilder $container) : void
            {
                $configuration = new GluggiBundleConfiguration();
                $config = $this->processConfiguration($configuration, $configs);

                // load main services.yml
                $loader = new YamlFileLoader($container, new FileLocator(__DIR__ . '/Resources/config'));
                $loader->load('services.yaml');

                // wire provided config to config service
                $container->getDefinition(GluggiConfig::class)
                    ->setArgument('$config', $config);
            }


            /**
             * @inheritDoc
             */
            public function getAlias ()
            {
                return GluggiBundle::BUNDLE_ALIAS;
            }
        };
    }
}

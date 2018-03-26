<?php

namespace Becklyn\GluggiBundle;

use Becklyn\AssetsBundle\Namespaces\RegisterAssetNamespacesCompilerPass;
use Becklyn\GluggiBundle\DependencyInjection\GluggiBundleExtension;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;


class GluggiBundle extends Bundle
{
    const BUNDLE_ALIAS = "gluggi";


    /**
     * @inheritdoc
     */
    public function build (ContainerBuilder $container)
    {
        parent::build($container);

        $container->addCompilerPass(new RegisterAssetNamespacesCompilerPass([
            "gluggi_core" => __DIR__ . "/Resources/public/",
        ]));
    }


    /**
     * @inheritdoc
     */
    public function getContainerExtension ()
    {
        if (null === $this->extension) {
            $this->extension = new GluggiBundleExtension();
        }

        return $this->extension;
    }
}

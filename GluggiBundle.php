<?php

namespace Becklyn\GluggiBundle;

use Becklyn\GluggiBundle\DependencyInjection\GluggiBundleExtension;
use Symfony\Component\HttpKernel\Bundle\Bundle;


class GluggiBundle extends Bundle
{
    const BUNDLE_ALIAS = "gluggi";


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

<?php

namespace Becklyn\GluggiBundle\LayoutBundleIntegration;

use Becklyn\GluggiBundle\Exception\LayoutBundleNotInstalledException;
use LayoutBundle\LayoutBundle;
use Symfony\Component\HttpKernel\KernelInterface;


/**
 * Builds directory paths to the layout bundle
 */
class BundlePaths
{
    /**
     * @var string
     */
    private $baseDir;



    /**
     * @param KernelInterface $kernel
     */
    public function __construct (KernelInterface $kernel)
    {
        try
        {
            $layoutBundle = $kernel->getBundle('LayoutBundle', true);
            $this->baseDir = $layoutBundle->getPath();
        }
        catch (\InvalidArgumentException $e)
        {
            if (class_exists(LayoutBundle::class))
            {
                throw new LayoutBundleNotInstalledException("Layout bundle exists, but isn't activated. Did you forget to load it in your AppKernel?", $e);
            }

            throw new LayoutBundleNotInstalledException("No LayoutBundle found.", $e);
        }
    }



    /**
     * Returns the base dir
     *
     * @return string
     */
    public function getResourcesDir () : string
    {
        return "{$this->baseDir}/Resources";
    }
}

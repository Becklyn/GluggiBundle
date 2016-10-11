<?php

namespace Becklyn\GluggiBundle\Loader;

use Becklyn\GluggiBundle\Exception\LayoutBundleNotInstalledException;
use LayoutBundle\LayoutBundle;
use Symfony\Component\HttpKernel\KernelInterface;


/**
 * Builds directory paths to the layout bundle
 */
class LayoutPaths
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
            $this->baseDir = "{$layoutBundle->getPath()}/Resources";
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
     * Returns the path to one directory
     *
     * @param string[] ...$parts
     *
     * @return string
     */
    public function get (...$parts) : string
    {
        array_unshift($parts, $this->baseDir);
        return implode("/", $parts);
    }
}

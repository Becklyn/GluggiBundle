<?php

namespace Becklyn\GluggiBundle\Paths;


use Symfony\Component\HttpKernel\KernelInterface;


class LayoutDirectory
{
    /**
     * @var KernelInterface
     */
    private $kernel;


    /**
     * @var string
     */
    private $twigDefaultPath;


    public function __construct (KernelInterface $kernel, string $twigDefaultPath)
    {
        $this->kernel = $kernel;
        $this->twigDefaultPath = $twigDefaultPath;
    }


    /**
     * Resolves the configured layout directory path
     *
     * @param string $path
     * @return string
     */
    public function resolve (string $path) : string
    {
        if (1 === \preg_match('~^@(?<bundle>[^/]+)(?<rest>.*?)$~i', $path, $matches))
        {
            // We get a twig import path like `@Layout/test` and need to transform it to a symfony resource
            // location like `@LayoutBundle/Resources/views/test`.
            $rest = ltrim($matches["rest"], "/");

            return $this->kernel->locateResource(
                "@{$matches['bundle']}Bundle/Resources/views/{$rest}"
            );
        }

        return rtrim($this->twigDefaultPath, '/') . '/' . trim($path, '/');
    }
}

<?php

namespace Becklyn\GluggiBundle\Configuration;

use Symfony\Component\HttpKernel\KernelInterface;

/**
 * Holds all configuration values
 */
class GluggiConfig
{
    /**
     * @var KernelInterface
     */
    private $kernel;


    /**
     * @var string
     */
    private $twigDefaultPath;


    /**
     * @var string
     */
    private $layoutDir;


    /**
     * @var null|string
     */
    private $infoAction;


    /**
     * @var null|string
     */
    private $title;


    /**
     * @var array
     */
    private $cssFiles;


    /**
     * @var array
     */
    private $javaScriptFiles;


    /**
     * @var array
     */
    private $javaScriptHeadFiles;


    /**
     * @var array
     */
    private $data;


    /**
     * @param KernelInterface $kernel
     * @param string          $twigDefaultPath
     * @param string          $layoutDir
     * @param string|null     $infoAction
     * @param string|null     $title
     * @param array           $cssFiles
     * @param array           $javaScriptFiles
     * @param array           $javaScriptHeadFiles
     * @param array           $data
     */
    public function __construct (
        KernelInterface $kernel,
        string $twigDefaultPath,
        string $layoutDir,
        string $infoAction = null,
        string $title = null,
        array $cssFiles = [],
        array $javaScriptFiles = [],
        array $javaScriptHeadFiles = [],
        array $data = []
    )
    {
        $this->kernel = $kernel;
        $this->twigDefaultPath = $twigDefaultPath;
        $this->layoutDir = $layoutDir;
        $this->infoAction = $infoAction;
        $this->title = $title;
        $this->cssFiles = $cssFiles;
        $this->javaScriptFiles = $javaScriptFiles;
        $this->javaScriptHeadFiles = $javaScriptHeadFiles;
        $this->data = $data;
    }


    /**
     * @return string
     */
    public function getLayoutDir () : string
    {
        return $this->layoutDir;
    }



    /**
     * @return null|string
     */
    public function getInfoAction ()
    {
        return $this->infoAction;
    }



    /**
     * @return null|string
     */
    public function getTitle ()
    {
        return $this->title;
    }



    /**
     * @return array
     */
    public function getCssFiles () : array
    {
        return $this->cssFiles;
    }



    /**
     * @return array
     */
    public function getJavaScriptFiles () : array
    {
        return $this->javaScriptFiles;
    }



    /**
     * @return array
     */
    public function getJavaScriptHeadFiles () : array
    {
        return $this->javaScriptHeadFiles;
    }



    /**
     * Returns the user defined data
     *
     * @param string|int $key
     *
     * @return mixed
     */
    public function getData ($key)
    {
        if (!array_key_exists($key, $this->data))
        {
            throw new \InvalidArgumentException(sprintf("Can't find gluggi data with key '%s'.", $key));
        }

        return $this->data[$key];
    }


    /**
     * @return string
     */
    public function getResolvedLayoutDir ()
    {
        return $this->resolvePath($this->layoutDir);
    }


    /**
     * Resolves the configured layout directory path
     *
     * @param string $path
     * @return string
     */
    public function resolvePath (string $path) : string
    {
        if (1 === \preg_match('~^@(?<bundle>[^/]+)(?<rest>.*?)$~i', $path, $matches))
        {
            // We get a twig import path like `@Layout/test` and need to transform it to a symfony resource
            // location like `@LayoutBundle/Resources/views/test`.
            $rest = \ltrim($matches["rest"], "/");

            return $this->kernel->locateResource(
                "@{$matches['bundle']}Bundle/Resources/views/{$rest}"
            );
        }

        return \rtrim($this->twigDefaultPath, '/') . '/' . \trim($path, '/');
    }
}

<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Configuration;

use Symfony\Component\HttpKernel\KernelInterface;

/**
 * Holds all configuration values.
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
     * @var array
     */
    private $config;


    /**
     * @param KernelInterface $kernel
     * @param string          $twigDefaultPath
     * @param array           $config
     */
    public function __construct (
        KernelInterface $kernel,
        string $twigDefaultPath,
        array $config = []
    )
    {
        $this->kernel = $kernel;
        $this->twigDefaultPath = $twigDefaultPath;
        $this->config = $config;
    }


    /**
     * @return string
     */
    public function getLayoutDir () : string
    {
        return $this->config["layout_dir"] ?? "_layout";
    }



    /**
     * @return string|null
     */
    public function getInfoAction () : ?string
    {
        return $this->config["info_action"] ?? null;
    }



    /**
     * @return string
     */
    public function getTitle () : string
    {
        return $this->config["title"] ?? "Gluggi";
    }



    /**
     * @return array
     */
    public function getCssFiles () : array
    {
        return $this->config["css"] ?? [];
    }



    /**
     * @return array
     */
    public function getJavaScriptFiles () : array
    {
        return $this->config["js"] ?? [];
    }



    /**
     * @return array
     */
    public function getJavaScriptHeadFiles () : array
    {
        return $this->config["js_head"] ?? [];
    }


    /**
     * @return string|null
     */
    public function getGlobalBodyClass () : ?string
    {
        return $this->config["global_body_class"] ?? null;
    }



    /**
     * Returns the user defined data.
     *
     * @param string|int $key
     *
     * @return mixed
     */
    public function getData ($key)
    {
        $data = $this->config["data"] ?? [];

        if (!\array_key_exists($key, $data))
        {
            throw new \InvalidArgumentException(\sprintf("Can't find gluggi data with key '%s'.", $key));
        }

        return $data[$key];
    }


    /**
     * @return string
     */
    public function getResolvedLayoutDir ()
    {
        return $this->resolvePath($this->getLayoutDir());
    }


    /**
     * Resolves the configured layout directory path.
     *
     * @param string $path
     *
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

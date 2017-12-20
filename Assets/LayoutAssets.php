<?php

namespace Becklyn\GluggiBundle\Assets;

use Becklyn\AssetsBundle\Html\AssetHtmlGenerator;
use Becklyn\GluggiBundle\Configuration\GluggiConfig;


/**
 * Contains a list of all CSS and JavaScript files used in the layout.
 */
class LayoutAssets
{
    /**
     * @var string[]
     */
    private $cssFiles;


    /**
     * @var string[]
     */
    private $javaScriptFiles;


    /**
     * @var string[]
     */
    private $javaScriptHeadFiles;


    /**
     * @var AssetHtmlGenerator|null
     */
    private $assetHtmlGenerator;


    /**
     * @param GluggiConfig       $configuration
     * @param AssetHtmlGenerator $assetHtmlGenerator
     */
    public function __construct (GluggiConfig $configuration, AssetHtmlGenerator $assetHtmlGenerator)
    {
        $this->assetHtmlGenerator = $assetHtmlGenerator;

        $this->cssFiles = $this->transformToUrl($configuration->getCssFiles());
        $this->javaScriptFiles = $this->transformToUrl($configuration->getJavaScriptFiles());
        $this->javaScriptHeadFiles = $this->transformToUrl($configuration->getJavaScriptHeadFiles());
    }



    /**
     * Transforms the paths in the config to full URLs
     *
     * @param string[] $assetPaths
     *
     * @return string[]
     */
    private function transformToUrl (array $assetPaths) : array
    {
        return \array_map(
            function (string $assetPath)
            {
                // pass HTTP URLs untouched through
                return (1 === \preg_match('~^https?:\\/\\/~', $assetPath))
                    ? $assetPath
                    : $this->assetHtmlGenerator->getAssetUrlPath($assetPath);
            },
            $assetPaths
        );
    }



    /**
     * @return string[]
     */
    public function getCssUrls () : array
    {
        return $this->cssFiles;
    }



    /**
     * @return string[]
     */
    public function getJavaScriptUrls () : array
    {
        return $this->javaScriptFiles;
    }



    /**
     * @return string[]
     */
    public function getJavaScriptHeadUrls () : array
    {
        return $this->javaScriptHeadFiles;
    }
}

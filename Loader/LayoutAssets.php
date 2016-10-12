<?php

namespace Becklyn\GluggiBundle\Loader;


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
     * @param string[] $cssFiles
     * @param string[] $javaScriptFiles
     */
    public function __construct (array $cssFiles, array $javaScriptFiles)
    {
        $this->cssFiles = $cssFiles;
        $this->javaScriptFiles = $javaScriptFiles;
    }



    /**
     * @return string[]
     */
    public function getCssFiles () : array
    {
        return $this->cssFiles;
    }



    /**
     * @return string[]
     */
    public function getJavaScriptFiles () : array
    {
        return $this->javaScriptFiles;
    }
}

<?php

namespace Becklyn\GluggiBundle\Configuration;


/**
 * Holds all configuration values
 */
class GluggiConfig
{
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
     * @param string|null $infoAction
     * @param string|null $title
     * @param array       $cssFiles
     * @param array       $javaScriptFiles
     */
    public function __construct (string $infoAction = null, string $title = null, array $cssFiles, array $javaScriptFiles)
    {

        $this->infoAction = $infoAction;
        $this->title = $title;
        $this->cssFiles = $cssFiles;
        $this->javaScriptFiles = $javaScriptFiles;
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
}

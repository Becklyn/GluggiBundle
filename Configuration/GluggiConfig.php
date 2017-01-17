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
     * @var array
     */
    private $data;



    /**
     * @param string|null $infoAction
     * @param string|null $title
     * @param array       $cssFiles
     * @param array       $javaScriptFiles
     * @param array       $data
     */
    public function __construct (string $infoAction = null, string $title = null, array $cssFiles, array $javaScriptFiles, array $data)
    {

        $this->infoAction = $infoAction;
        $this->title = $title;
        $this->cssFiles = $cssFiles;
        $this->javaScriptFiles = $javaScriptFiles;
        $this->data = $data;
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
}

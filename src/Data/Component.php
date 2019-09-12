<?php

namespace Becklyn\GluggiBundle\Data;


use Becklyn\GluggiBundle\Data\Error\ComponentError;

class Component
{
    /**
     * @var string
     */
    private $fileName;


    /**
     * @var string
     */
    private $key;


    /**
     * @var string
     */
    private $name;


    /**
     * @var bool
     */
    private $hidden;


    /**
     * @var ComponentType
     */
    private $type;


    /**
     * @var string
     */
    private $importPath;


    /**
     * @var ComponentError|null
     */
    private $error;


    /**
     * @param \SplFileInfo  $file
     * @param string        $templatePathPrefix
     * @param ComponentType $type
     */
    public function __construct (string $fileName, string $key, string $name, bool $hidden, ComponentType $type, string $importPath, ?ComponentError $error)
    {
        $this->fileName = $fileName;
        $this->key = $key;
        $this->name = $name;
        $this->hidden = $hidden;
        $this->type = $type;
        $this->importPath = $importPath;
        $this->error = $error;
    }



    /**
     * @return string
     */
    public function getFileName () : string
    {
        return $this->fileName;
    }



    /**
     * @return string
     */
    public function getKey () : string
    {
        return $this->key;
    }



    /**
     * @return string
     */
    public function getName () : string
    {
        return $this->name;
    }



    /**
     * @return ComponentType
     */
    public function getType () : ComponentType
    {
        return $this->type;
    }



    /**
     * @return boolean
     */
    public function isHidden () : bool
    {
        return $this->hidden;
    }



    /**
     * Returns the import path as used by twig in symfony
     *
     * @return string
     */
    public function getImportPath () : string
    {
        return $this->importPath;
    }


    /**
     * @return string
     */
    public function getFullKey ()
    {
        return "{$this->type->getKey()}/{$this->getKey()}";
    }


    /**
     * @return ComponentError|null
     */
    public function getError () : ?ComponentError
    {
        return $this->error;
    }
}

<?php

namespace Becklyn\GluggiBundle\Data;


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
     * @param \SplFileInfo  $file
     * @param string        $templatePathPrefix
     * @param ComponentType $type
     */
    public function __construct (\SplFileInfo $file, string $templatePathPrefix, ComponentType $type)
    {
        $this->fileName = $file->getBasename();
        $this->key = $file->getBasename('.html.twig');
        $this->name = $this->generateName($this->key);
        $this->hidden = "_" === substr($file->getBasename(), 0, 1);
        $this->type = $type;
        $this->importPath = "{$templatePathPrefix}/{$this->type->getDirectory()}/{$this->fileName}";
    }



    /**
     * Generates the name from the key
     *
     * @param string $key
     *
     * @return string
     */
    private function generateName ($key)
    {
        $parts = \preg_split("~[-_]~", $key, -1, PREG_SPLIT_NO_EMPTY);
        return \ucwords(\implode(" ", $parts));
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
}

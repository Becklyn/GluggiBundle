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
     * @var string
     */
    private $type;



    /**
     * @param \SplFileInfo $file
     * @param string       $type
     */
    public function __construct (\SplFileInfo $file, string $type)
    {
        $this->fileName = $file->getBasename();
        $this->key = $file->getBasename('.html.twig');
        $this->name = $this->generateName($this->key);
        $this->type = $type;
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
        $parts = preg_split("~[-_]~", $key, -1, PREG_SPLIT_NO_EMPTY);
        return ucwords(implode(" ", $parts));
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
     * @return string
     */
    public function getType () : string
    {
        return $this->type;
    }



    /**
     * Returns the import path as used by twig in symfony
     *
     * @return string
     */
    public function getImportPath () : string
    {
        return "@Layout/{$this->type}/{$this->fileName}";
    }



    /**
     * @return string
     */
    public function getAnchor () : string
    {
        return "{$this->getType()}--{$this->getKey()}";
    }
}

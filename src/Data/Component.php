<?php declare(strict_types=1);

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
    private $templatePath;


    /**
     * All components that are used inside this component.
     *
     * @var Component[]
     */
    private $dependencies = [];


    /**
     * All components that use this component.
     *
     * @var Component[]
     */
    private $usages = [];


    /**
     * @var ComponentError|null
     */
    private $error;


    /**
     */
    public function __construct (string $fileName, string $key, string $name, bool $hidden, ComponentType $type, string $templatePath)
    {
        $this->fileName = $fileName;
        $this->key = $key;
        $this->name = $name;
        $this->hidden = $hidden;
        $this->type = $type;
        $this->templatePath = $templatePath;
    }



    /**
     */
    public function getFileName () : string
    {
        return $this->fileName;
    }



    /**
     */
    public function getKey () : string
    {
        return $this->key;
    }



    /**
     */
    public function getName () : string
    {
        return $this->name;
    }



    /**
     */
    public function getType () : ComponentType
    {
        return $this->type;
    }



    /**
     */
    public function isHidden () : bool
    {
        return $this->hidden;
    }



    /**
     * Returns the import path as used by twig in symfony.
     */
    public function getTemplatePath () : string
    {
        return $this->templatePath;
    }


    /**
     * @return string
     */
    public function getFullKey ()
    {
        return "{$this->type->getKey()}/{$this->getKey()}";
    }


    /**
     */
    public function getError () : ?ComponentError
    {
        return $this->error;
    }


    /**
     */
    public function setError (?ComponentError $error) : void
    {
        $this->error = $error;
    }


    /**
     */
    public function addDependency (self $dependency) : void
    {
        $this->dependencies[$dependency->getFullKey()] = $dependency;
    }


    /**
     */
    public function addUsage (self $component) : void
    {
        $this->usages[$component->getFullKey()] = $component;
    }


    /**
     * @return Component[]
     */
    public function getUsages () : array
    {
        return $this->usages;
    }


    /**
     * @return Component[]
     */
    public function getDependencies () : array
    {
        return $this->dependencies;
    }
}

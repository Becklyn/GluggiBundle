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
     * @param string        $fileName
     * @param string        $key
     * @param string        $name
     * @param bool          $hidden
     * @param ComponentType $type
     * @param string        $templatePath
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
     * @return bool
     */
    public function isHidden () : bool
    {
        return $this->hidden;
    }



    /**
     * Returns the import path as used by twig in symfony.
     *
     * @return string
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
     * @return ComponentError|null
     */
    public function getError () : ?ComponentError
    {
        return $this->error;
    }


    /**
     * @param ComponentError|null $error
     */
    public function setError (?ComponentError $error) : void
    {
        $this->error = $error;
    }


    /**
     * @param Component $dependency
     */
    public function addDependency (self $dependency) : void
    {
        $this->dependencies[$dependency->getFullKey()] = $dependency;
    }


    /**
     * @param Component $component
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

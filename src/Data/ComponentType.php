<?php

namespace Becklyn\GluggiBundle\Data;

use Becklyn\GluggiBundle\Component\ComponentFactory;

/**
 * Describes a component type
 */
class ComponentType
{
    /**
     * @var string
     */
    private $key;


    /**
     * @var Component[]
     */
    private $components = [];


    /**
     * @param string $key
     */
    public function __construct (string $key)
    {
        $this->key = $key;
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
        return \ucwords($this->key);
    }


    /**
     * Returns the directory in which the views are stored
     *
     * @return string
     */
    public function getDirectory () : string
    {
        return $this->key;
    }


    /**
     * Returns all components in this type
     *
     * @return Component[]
     */
    public function getComponents () : array
    {
        return $this->components;
    }


    /**
     * Returns all standalone components
     *
     * @return Component[]
     */
    public function getStandaloneComponents () : array
    {
        return array_filter(
            $this->components,
            function (Component $component)
            {
                return !$component->isHidden();
            }
        );
    }


    /**
     * Returns a single component by key
     *
     * @param string $key
     *
     * @return Component|null
     */
    public function getComponent (string $key)
    {
        return $this->components[$key] ?? null;
    }


    /**
     * @param Component $component
     */
    public function addComponent (Component $component) : void
    {
        $this->components[$component->getKey()] = $component;
    }
}

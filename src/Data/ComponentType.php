<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Data;

use Becklyn\GluggiBundle\Exception\ComponentNotFoundException;

/**
 * Describes a component type.
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
     */
    public function __construct (string $key)
    {
        $this->key = $key;
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
        return \ucwords($this->key);
    }


    /**
     * Returns all components in this type.
     *
     * @return Component[]
     */
    public function getComponents () : array
    {
        return $this->components;
    }


    /**
     * Returns a single component by key.
     */
    public function getComponent (string $key) : Component
    {
        if (!isset($this->components[$key]))
        {
            throw new ComponentNotFoundException($key, $this->key);
        }

        return $this->components[$key];
    }


    /**
     * Returns whether a component with the given key exists in this type.
     */
    public function hasComponent (string $key) : bool
    {
        return \array_key_exists($key, $this->components);
    }


    /**
     */
    public function addComponent (Component $component) : void
    {
        $this->components[$component->getKey()] = $component;
    }
}

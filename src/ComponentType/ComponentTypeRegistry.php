<?php

namespace Becklyn\GluggiBundle\ComponentType;

use Becklyn\GluggiBundle\Component\ComponentTypeFactory;
use Becklyn\GluggiBundle\Data\ComponentType;
use Becklyn\GluggiBundle\Exception\UnknownComponentTypeException;


/**
 * Holds all known component types
 */
class ComponentTypeRegistry
{
    /**
     * @var ComponentType[]|null
     */
    private $types;


    /**
     * @var ComponentTypeFactory
     */
    private $factory;


    /**
     * @param ComponentTypeFactory $factory
     */
    public function __construct (ComponentTypeFactory $factory)
    {
        $this->factory = $factory;
    }


    /**
     * Returns the type by key
     *
     * @param string $key
     *
     * @return ComponentType
     */
    public function getType (string $key) : ComponentType
    {
        $types = $this->getAll();

        if (!\array_key_exists($key, $types))
        {
            throw new UnknownComponentTypeException($key, \array_keys($types));
        }

        return $types[$key];
    }



    /**
     * Returns all component types
     *
     * @return ComponentType[]
     */
    public function getAll () : array
    {
        if (null === $this->types)
        {
            $this->types = [
                "atom" => $this->factory->create("atom"),
                "molecule" => $this->factory->create("molecule"),
                "organism" => $this->factory->create("organism"),
                "template" => $this->factory->create("template"),
                "page" => $this->factory->create("page"),
            ];
        }

        return $this->types;
    }
}

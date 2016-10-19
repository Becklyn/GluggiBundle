<?php

namespace Becklyn\GluggiBundle\Component;

use Becklyn\GluggiBundle\ComponentType\ComponentTypeRegistry;
use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Data\ComponentType;


/**
 * Responsible for finding and listing components
 */
class GluggiFinder
{
    /**
     * @var ComponentTypeRegistry
     */
    private $typeRegistry;



    /**
     * @param ComponentTypeRegistry $typeRegistry
     */
    public function __construct (ComponentTypeRegistry $typeRegistry)
    {
        $this->typeRegistry = $typeRegistry;
    }



    /**
     * Returns all known components
     *
     * @return ComponentType[]
     */
    public function getAllTypes () : array
    {
        return $this->typeRegistry->getAll();
    }



    /**
     * Returns all known components
     *
     * @param string $type
     *
     * @return ComponentType
     */
    public function findType (string $type) : ComponentType
    {
        return $this->typeRegistry->getType($type);
    }



    /**
     * Finds a specific component view with a given type and key.
     *
     * @param string $type
     * @param string $key
     *
     * @return Component|null
     */
    public function findComponent (string $type, string $key)
    {
        $componentType = $this->typeRegistry->getType($type);

        return $componentType->getComponent($key);
    }
}

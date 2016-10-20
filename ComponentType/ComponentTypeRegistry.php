<?php

namespace Becklyn\GluggiBundle\ComponentType;

use Becklyn\GluggiBundle\Component\ComponentLoader;
use Becklyn\GluggiBundle\Data\ComponentType;
use Becklyn\GluggiBundle\Exception\UnknownComponentTypeException;
use Becklyn\GluggiBundle\LayoutBundleIntegration\BundlePaths;


/**
 * Holds all known component types
 */
class ComponentTypeRegistry
{
    /**
     * @var ComponentType[]
     */
    private $types;



    /**
     * @param BundlePaths $layoutPaths
     */
    public function __construct (BundlePaths $layoutPaths)
    {
        $loader = new ComponentLoader($layoutPaths->getViewsDir());

        $this->prepareComponentList([
            new ComponentType("atom", $loader),
            new ComponentType("molecule", $loader),
            new ComponentType("organism", $loader),
            new ComponentType("template", $loader),
            new ComponentType("page", $loader),
        ]);
    }



    /**
     * Prepares the internal data structure
     *
     * @param ComponentType[] $types
     */
    private function prepareComponentList (array $types)
    {
        $this->types = [];

        foreach ($types as $type)
        {
            $this->types[$type->getKey()] = $type;
        }
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
        if (!array_key_exists($key, $this->types))
        {
            throw new UnknownComponentTypeException($key, array_keys($this->types));
        }

        $type = $this->types[$key];

        return $type;
    }



    /**
     * Returns all component types
     *
     * @return ComponentType[]
     */
    public function getAll () : array
    {
        return array_map(
            function (string $key)
            {
                return $this->getType($key);
            },
            array_keys($this->types)
        );
    }
}

<?php

namespace Becklyn\GluggiBundle\ComponentType;

use Becklyn\GluggiBundle\Component\ComponentLoader;
use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Becklyn\GluggiBundle\Data\ComponentType;
use Becklyn\GluggiBundle\Exception\UnknownComponentTypeException;
use Becklyn\GluggiBundle\Paths\LayoutDirectory;


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
     * @param LayoutDirectory $layoutDirectory
     * @param GluggiConfig    $config
     */
    public function __construct (LayoutDirectory $layoutDirectory, GluggiConfig $config)
    {
        $loader = new ComponentLoader($layoutDirectory->resolve($config->getLayoutDir()), $config->getLayoutDir());

        $this->prepareComponentList([
            new ComponentType("atom", $loader),
            new ComponentType("molecule", $loader),
            new ComponentType("organism", $loader),
            new ComponentType("template", $loader),
            new ComponentType("page", $loader, ComponentType::ISOLATED_COMPONENT_VIEW),
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

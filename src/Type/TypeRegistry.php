<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Type;

use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Data\ComponentType;
use Becklyn\GluggiBundle\Exception\TypeNotFoundException;
use Becklyn\GluggiBundle\Usages\DependenciesParser;

/**
 * Holds all known component types.
 */
class TypeRegistry
{
    /**
     * @var ComponentType[]|null
     */
    private $types;


    /**
     * @var TypeFactory
     */
    private $factory;


    /**
     * @var DependenciesParser
     */
    private $dependenciesParser;


    /**
     */
    public function __construct (
        TypeFactory $factory,
        DependenciesParser $dependenciesParser
    )
    {
        $this->factory = $factory;
        $this->dependenciesParser = $dependenciesParser;
    }


    /**
     * Returns the type by key.
     */
    public function getType (string $key) : ComponentType
    {
        $types = $this->getAll();

        if (!\array_key_exists($key, $types))
        {
            throw new TypeNotFoundException($key, \array_keys($types));
        }

        return $types[$key];
    }


    /**
     *
     */
    public function getComponent (string $type, string $component) : Component
    {
        return $this->getType($type)->getComponent($component);
    }



    /**
     * Returns all component types.
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

            $this->dependenciesParser->parseDependencies($this);
        }

        return $this->types;
    }
}

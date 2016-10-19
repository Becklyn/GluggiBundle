<?php

namespace Becklyn\GluggiBundle\Component;

use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Data\ComponentType;
use Symfony\Component\Finder\Finder;


class ComponentLoader
{
    /**
     * @var string
     */
    private $resourcesDir;



    /**
     * @param string $resourcesDir
     */
    public function __construct (string $resourcesDir)
    {
        $this->resourcesDir = rtrim($resourcesDir, "/");
    }



    /**
     * Loads all components for the given type
     *
     * @param ComponentType $type
     *
     * @return Component[]
     */
    public function loadComponents (ComponentType $type) : array
    {
        $path = "{$this->resourcesDir}/views/{$type->getDirectory()}";

        if (!is_dir($path) || !is_readable($path))
        {
            return [];
        }

        $finder = new Finder();
        $files = $finder
            ->files()
            ->in($path)
            ->depth("== 0")
            ->notName("_*")
            ->name("*.html.twig")
            ->sortByName();

        return array_map(
            function (\SplFileInfo $file) use ($type)
            {
                return new Component($file, $type);
            },
            iterator_to_array($files)
        );
    }
}

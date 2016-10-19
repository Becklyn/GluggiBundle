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
    private $viewsDir;



    /**
     * @param string $viewsDir
     */
    public function __construct (string $viewsDir)
    {
        $this->viewsDir = rtrim($viewsDir, "/");
    }



    /**
     * Loads all components for the given type
     *
     * @param ComponentType $type
     *
     * @return Component[] indexed by component key
     */
    public function loadComponents (ComponentType $type) : array
    {
        $path = "{$this->viewsDir}/{$type->getDirectory()}";

        if (!is_dir($path) || !is_readable($path))
        {
            return [];
        }

        $finder = new Finder();
        $files = $finder
            ->files()
            ->in($path)
            ->depth("== 0")
            ->name("*.html.twig")
            ->sortByName();

        $result = [];

        foreach ($files as $file)
        {
            $component = new Component($file, $type);
            $result[$component->getKey()] = $component;
        }

        return $result;
    }
}

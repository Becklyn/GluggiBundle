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
    private $templatesDir;


    /**
     * @var string
     */
    private $layoutDir;


    /**
     * @param string $templatesDir
     * @param string $layoutDir
     */
    public function __construct (string $templatesDir, string $layoutDir)
    {
        $this->templatesDir = rtrim($templatesDir, "/");
        $this->layoutDir = trim($layoutDir, "/");
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
        $path = "{$this->templatesDir}/{$this->layoutDir}/{$type->getDirectory()}";

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
            $component = new Component($file, $this->layoutDir, $type);
            $result[$component->getKey()] = $component;
        }

        return $result;
    }
}

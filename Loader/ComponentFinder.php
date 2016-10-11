<?php

namespace Becklyn\GluggiBundle\Loader;

use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Exception\UnknownComponentTypeException;
use Symfony\Component\Finder\Finder;


/**
 * Responsible for finding and listing components
 */
class ComponentFinder
{
    /**
     * All component types
     */
    const COMPONENT_TYPES = [
        "atom",
        "molecule",
        "organism",
        "template",
        "page",
    ];


    /**
     * @var array.<string, array.<string>>
     */
    private $viewsCache = [];


    /**
     * @var LayoutPaths
     */
    private $layoutPaths;



    /**
     * @param LayoutPaths $layoutPaths
     */
    public function __construct (LayoutPaths $layoutPaths)
    {
        $this->layoutPaths = $layoutPaths;
    }



    /**
     * Finds all templates for a given type
     *
     * @param string $type
     *
     * @return Component[] mapping from short name to component view
     */
    private function fetchAllTemplatesForType (string $type)
    {
        $path = $this->layoutPaths->get("views", $type);

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

        $fileList = [];

        foreach ($files as $file)
        {
            $view = new Component($file, $type);
            $fileList[$view->getKey()] = $view;
        }

        return $fileList;
    }



    /**
     * Returns all known components
     *
     * @return array.<string, Component[]>
     */
    public function findAll ()
    {
        $all = [];

        foreach (self::COMPONENT_TYPES as $type)
        {
            $all[$type] = $this->findByType($type);
        }

        return $all;
    }



    /**
     * Finds all component views for a given type.
     *
     * @param string $type
     *
     * @return Component[]
     */
    public function findByType (string $type)
    {
        if (!in_array($type, self::COMPONENT_TYPES, true))
        {
            throw new UnknownComponentTypeException(sprintf(
                "Unknown component type '%s'. Only the following types are allowed: '%s'",
                $type,
                implode("', '", self::COMPONENT_TYPES)
            ));
        }

        if (!array_key_exists($type, $this->viewsCache))
        {
            $this->viewsCache[$type] = $this->fetchAllTemplatesForType($type);
        }

        return $this->viewsCache[$type];
    }



    /**
     * Finds a specific component view with a given type and key.
     *
     * @param string $type
     * @param string $key
     *
     * @return Component|null
     */
    public function find (string $type, string $key)
    {
        $views = $this->findByType($type);

        return array_key_exists($key, $views)
            ? $views[$key]
            : null;
    }
}

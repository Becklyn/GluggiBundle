<?php

namespace Becklyn\GluggiBundle\Data;

use Becklyn\GluggiBundle\Component\ComponentLoader;


/**
 * Describes a component type
 */
class ComponentType
{
    // The component view should be in isolation, without any structures / assets from Gluggi
    const ISOLATED_COMPONENT_VIEW = false;
    // The component view should be embedded in the Gluggi stage, with the header and preview system
    const STAGED_COMPONENT_VIEW = true;

    /**
     * @var string
     */
    private $key;


    /**
     * @var string
     */
    private $name;


    /**
     * @var null|Component[]
     */
    private $components = null;


    /**
     * @var ComponentLoader
     */
    private $loader;


    /**
     * @var bool
     */
    private $componentViewMode;



    /**
     * @param string          $key
     * @param ComponentLoader $loader
     * @param bool            $componentViewMode
     */
    public function __construct (string $key, ComponentLoader $loader, bool $componentViewMode = self::STAGED_COMPONENT_VIEW)
    {
        $this->key = $key;
        $this->loader = $loader;
        $this->name = ucwords($key);
        $this->componentViewMode = $componentViewMode;
    }



    /**
     * @return string
     */
    public function getKey () : string
    {
        return $this->key;
    }



    /**
     * @return string
     */
    public function getName () : string
    {
        return $this->name;
    }



    /**
     * Returns the directory in which the views are stored
     *
     * @return string
     */
    public function getDirectory () : string
    {
        return $this->key;
    }



    /**
     * Returns all components in this type
     *
     * @return Component[]
     */
    public function getComponents () : array
    {
        if (null === $this->components)
        {
            $this->components = $this->loader->loadComponents($this);
        }

        return $this->components;
    }



    /**
     * Returns all standalone components
     *
     * @return Component[]
     */
    public function getStandaloneComponents () : array
    {
        return array_filter(
            $this->getComponents(),
            function (Component $component)
            {
                return !$component->isHidden();
            }
        );
    }



    /**
     * Returns a single component by key
     *
     * @param string $key
     *
     * @return Component|null
     */
    public function getComponent (string $key)
    {
        $components = $this->getComponents();

        return array_key_exists($key, $components)
            ? $components[$key]
            : null;
    }



    /**
     * Returns whether the type has standalone components
     *
     * @return bool
     */
    public function hasStandaloneComponents () : bool
    {
        return !empty($this->getStandaloneComponents());
    }



    /**
     * @return bool
     */
    public function isIsolatedComponentViewMode () : bool
    {
        return self::ISOLATED_COMPONENT_VIEW === $this->componentViewMode;
    }
}

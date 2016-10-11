<?php

namespace Becklyn\GluggiBundle\Data;


class ComponentType
{
    /**
     * @var string
     */
    private $key;


    /**
     * @var string
     */
    private $group;



    /**
     * @param string $key
     * @param string $group
     */
    public function __construct (string $key, string $group)
    {
        $this->key = $key;
        $this->group = $group;
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
    public function getGroup () : string
    {
        return $this->group;
    }


}

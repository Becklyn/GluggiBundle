<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Data;

/**
 * Returns two list of components:.
 *
 * directly referenced ones and transitively referenced onces.
 */
class References
{
    /**
     * @var array
     */
    private $direct;


    /**
     * @var array
     */
    private $transitive;


    /**
     */
    public function __construct (array $direct, array $transitive)
    {
        $this->direct = $direct;
        $this->transitive = $transitive;
    }


    /**
     */
    public function getDirect () : array
    {
        return $this->direct;
    }


    /**
     */
    public function getTransitive () : array
    {
        return $this->transitive;
    }
}

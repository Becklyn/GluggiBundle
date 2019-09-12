<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Data;

/**
 * Returns two list of components:
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
     * @param array $direct
     * @param array $transitive
     */
    public function __construct (array $direct, array $transitive)
    {
        $this->direct = $direct;
        $this->transitive = $transitive;
    }


    /**
     * @return array
     */
    public function getDirect () : array
    {
        return $this->direct;
    }


    /**
     * @return array
     */
    public function getTransitive () : array
    {
        return $this->transitive;
    }
}

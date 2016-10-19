<?php

namespace Becklyn\GluggiBundle\Exception;


/**
 * Exception to indicate an unknown component
 */
class UnknownComponentException extends \InvalidArgumentException
{
    /**
     * @param string          $name
     * @param string          $type
     * @param \Exception|null $previous
     */
    public function __construct (string $name, string $type, \Exception $previous = null)
    {
        parent::__construct(
            sprintf("Component '%s' with type '%s' could not be found.", $name, $type),
            0,
            $previous
        );
    }
}

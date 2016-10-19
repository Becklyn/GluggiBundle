<?php

namespace Becklyn\GluggiBundle\Exception;


/**
 * Exception to indicate an unknown component
 */
class UnknownComponentException extends \InvalidArgumentException
{
    /**
     * @param string          $component
     * @param string          $type
     * @param \Exception|null $previous
     */
    public function __construct (string $component, string $type, \Exception $previous = null)
    {
        parent::__construct(
            sprintf("Component '%s' with type '%s' could not be found.", $component, $type),
            0,
            $previous
        );
    }
}

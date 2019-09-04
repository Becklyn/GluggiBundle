<?php

namespace Becklyn\GluggiBundle\Exception;


/**
 * Exception to indicate an unknown component type
 */
class UnknownComponentTypeException extends \InvalidArgumentException
{
    /**
     * @param string          $type
     * @param array           $knownTypes
     * @param \Exception|null $previous
     */
    public function __construct (string $type, array $knownTypes = [], \Exception $previous = null)
    {
        $message = !empty($knownTypes)
            ? "Unknown type '%s', known types are '%s'."
            : "Unknown type '%s'.";

        parent::__construct(
            sprintf($message, $type, implode("', '", $knownTypes)),
            0,
            $previous
        );
    }
}

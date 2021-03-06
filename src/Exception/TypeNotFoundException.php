<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Exception;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Exception to indicate an unknown component type.
 */
class TypeNotFoundException extends NotFoundHttpException
{
    /**
     */
    public function __construct (string $type, array $knownTypes = [], ?\Exception $previous = null)
    {
        $message = !empty($knownTypes)
            ? "Unknown type '%s', known types are '%s'."
            : "Unknown type '%s'.";

        parent::__construct(
            \sprintf($message, $type, \implode("', '", $knownTypes)),
            $previous
        );
    }
}

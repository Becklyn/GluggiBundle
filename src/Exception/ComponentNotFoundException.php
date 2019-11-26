<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Exception;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Exception to indicate an unknown component.
 */
class ComponentNotFoundException extends NotFoundHttpException
{
    /**
     * @param \Exception|null $previous
     */
    public function __construct (string $name, string $type, ?\Throwable $previous = null)
    {
        parent::__construct(
            \sprintf("Component '%s' with type '%s' could not be found.", $name, $type),
            $previous
        );
    }
}

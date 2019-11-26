<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Data\Error;

use Twig\Error\Error;

class CompilationError implements ComponentError
{
    /**
     * @var Error
     */
    private $error;


    /**
     */
    public function __construct (Error $error)
    {
        $this->error = $error;
    }


    /**
     * @inheritDoc
     */
    public function getMessage () : string
    {
        return "Twig compilation error: {$this->error}->getMessage()}";
    }
}

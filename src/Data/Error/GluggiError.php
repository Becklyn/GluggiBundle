<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Data\Error;


class GluggiError implements ComponentError
{
    /**
     * @var string
     */
    private $message;


    /**
     * @param string $message
     */
    public function __construct (string $message)
    {
        $this->message = $message;
    }


    /**
     * @return string
     */
    public function getMessage () : string
    {
        return $this->message;
    }
}

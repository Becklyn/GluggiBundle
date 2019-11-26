<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Data\Error;

interface ComponentError
{
    /**
     * Returns the message that is presented to the user.
     */
    public function getMessage () : string;
}

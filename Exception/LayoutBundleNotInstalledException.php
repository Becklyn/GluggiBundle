<?php

namespace Becklyn\GluggiBundle\Exception;

use Exception;


class LayoutBundleNotInstalledException extends \RuntimeException
{
    public function __construct ($message, Exception $previous = null)
    {
        parent::__construct($message, 0, $previous);
    }
}

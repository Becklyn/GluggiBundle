<?php

namespace Becklyn\GluggiBundle\Info;


class InfoAction
{
    /**
     * @var null|string
     */
    private $infoAction;



    /**
     * @param string|null $infoAction
     */
    public function __construct ($infoAction)
    {
        $this->infoAction = $infoAction;
    }



    /**
     * @return null|string
     */
    public function getInfoAction ()
    {
        return $this->infoAction;
    }
}

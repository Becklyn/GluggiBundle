<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Controller;

use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Usages\UsagesMap;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class ContentController extends AbstractController
{
    /**
     * @param UsagesMap $usagesMap
     * @param Component $component
     *
     * @return Response
     */
    public function contentActions (UsagesMap $usagesMap, Component $component) : Response
    {
        return $this->render("@Gluggi/content/content-actions.html.twig", [
            "uses" => $usagesMap->getUses($component),
            "usedIn" => $usagesMap->getUsedIn($component),
        ]);
    }
}

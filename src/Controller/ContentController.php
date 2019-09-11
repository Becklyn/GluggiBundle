<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Controller;

use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Normalizer\GluggiDataNormalizer;
use Becklyn\GluggiBundle\Usages\ComponentUsages;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class ContentController extends AbstractController
{
    /**
     * @param GluggiDataNormalizer $normalizer
     * @param ComponentUsages      $usagesMap
     * @param Component            $component
     *
     * @return Response
     */
    public function contentActions (
        GluggiDataNormalizer $normalizer,
        ComponentUsages $usagesMap,
        Component $component
    ) : Response
    {

        dump($normalizer->normalizeDependencies($usagesMap->getUsedBy($component)));
        return $this->render("@Gluggi/content/content-actions.html.twig", [
            "usages" => [
                "uses" => $normalizer->normalizeDependencies($usagesMap->getUses($component)),
                "usedBy" => $normalizer->normalizeDependencies($usagesMap->getUsedBy($component)),
            ],
        ]);
    }
}

<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Controller;

use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Normalizer\GluggiNormalizer;
use Becklyn\GluggiBundle\Type\TypeRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class SidebarController extends AbstractController
{
    /**
     * @param TypeRegistry     $registry
     * @param GluggiNormalizer $normalizer
     * @param GluggiConfig     $config
     * @param Component|null   $activeComponent
     *
     * @return Response
     */
    public function sidebar (
        TypeRegistry $registry,
        GluggiNormalizer $normalizer,
        GluggiConfig $config,
        ?Component $activeComponent = null
    )
    {
        return $this->render("@Gluggi/sidebar/sidebar.html.twig", [
            "data" => [
                "types" => $normalizer->normalizeTypes($registry->getAll(), $activeComponent),
                "title" => $config->getTitle(),
            ],
        ]);
    }
}

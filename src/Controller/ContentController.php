<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Controller;

use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Normalizer\GluggiDataNormalizer;
use Becklyn\GluggiBundle\Usages\DependenciesResolver;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class ContentController extends AbstractController
{
    /**
     * @param GluggiDataNormalizer $normalizer
     * @param Component            $component
     *
     * @return Response
     */
    public function contentActions (
        GluggiDataNormalizer $normalizer,
        DependenciesResolver $resolver,
        Component $component
    ) : Response
    {
        return $this->render("@Gluggi/content/content-actions.html.twig", [
            "usages" => [
                "dependencies" => $normalizer->normalizeDependencies(
                    $resolver->resolveDependencies($component)
                ),
                "usages" => $normalizer->normalizeDependencies(
                    $resolver->resolveUsages($component)
                ),
            ],
        ]);
    }
}

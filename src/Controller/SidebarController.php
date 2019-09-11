<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Controller;

use Becklyn\GluggiBundle\Component\GluggiFinder;
use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Serializer\TypesSerializer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class SidebarController extends AbstractController
{
    /**
     * @param GluggiFinder $finder
     * @param GluggiConfig $config
     *
     * @return Response
     */
    public function sidebar (TypesSerializer $serializer, GluggiConfig $config, ?Component $activeComponent = null)
    {
        return $this->render("@Gluggi/sidebar/sidebar.html.twig", [
            "types" => $serializer->serialize($activeComponent),
            "customTitle" => $config->getTitle(),
            "active" => $activeComponent,
        ]);
    }
}

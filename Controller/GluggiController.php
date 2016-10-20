<?php

namespace Becklyn\GluggiBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;


/**
 * Controller for the main gluggi view
 */
class GluggiController extends Controller
{
    /**
     * @return array
     */
    public function indexAction ()
    {
        return $this->render("@Gluggi/Gluggi/index.html.twig", [
            "types" => $this->get("gluggi.finder")->getAllTypes(),
            "pageTitle" => "Index",
        ]);
    }



    /**
     * Renders a list of all components in the given type
     *
     * @param string $type
     *
     * @return array
     */
    public function typeAction (string $type)
    {
        $componentType = $this->get("gluggi.finder")->findType($type);

        if (!$componentType->hasStandaloneComponents())
        {
            throw $this->createNotFoundException(sprintf("No components found in type '%s'.", $type));
        }

        return $this->render("@Gluggi/Gluggi/type.html.twig", [
            "type" => $componentType,
            "pageTitle" => $componentType->getName(),
        ]);
    }



    /**
     * Renders a component in single view
     *
     * @param string $type
     * @param string $key
     *
     * @return array
     */
    public function componentAction (string $type, string $key)
    {
        $component = $this->get("gluggi.finder")->findComponent($type, $key);

        if (null === $component || $component->isHidden())
        {
            $message = null === $component
                ? "No component found: '%s/%s'"
                : "The component '%s/%s' has no single view.";

            throw $this->createNotFoundException(sprintf($message, $type, $key));
        }

        return $this->render("@Gluggi/Gluggi/component.html.twig", [
            "component" => $component,
            "type" => $component->getType(),
            "pageTitle" => $component->getType()->getName() . " // " . $component->getName(),
        ]);
    }



    /**
     * Includes all layout-related CSS <link> tags
     *
     * @return array
     */
    public function layoutCSSAssetsAction ()
    {
        $assets = $this->get("gluggi.assets");

        return $this->render("@Gluggi/Gluggi/_layoutCSSAssets.html.twig", [
            "urls" => $assets->getCssUrls(),
        ]);
    }



    /**
     * Includes all layout-related JavaScript <script> tags
     *
     * @return array
     */
    public function layoutJavaScriptAssetsAction ()
    {
        $assets = $this->get("gluggi.assets");

        return $this->render("@Gluggi/Gluggi/_layoutJavaScriptAssets.html.twig", [
            "urls" => $assets->getJavaScriptUrls(),
        ]);
    }
}

<?php

namespace Becklyn\GluggiBundle\Controller;

use Becklyn\GluggiBundle\Exception\UnknownComponentTypeException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;


/**
 * Controller for the main gluggi view
 */
class GluggiController extends Controller
{
    /**
     * @return Response
     */
    public function indexAction ()
    {
        return $this->render("@Gluggi/Gluggi/index.html.twig", [
            "types" => $this->get("gluggi.finder")->getAllTypes(),
            "pageTitle" => "Index",
            "infoAction" => $this->get("gluggi.config")->getInfoAction(),
            "customTitle" => $this->get("gluggi.config")->getTitle(),
        ]);
    }



    /**
     * Renders a component in single view
     *
     * @param string $type
     * @param string $key
     *
     * @return Response
     */
    public function componentAction (string $type, string $key)
    {
        try
        {
            $component = $this->get("gluggi.finder")->findComponent($type, $key);

            if (null === $component || $component->isHidden())
            {
                $message = null === $component
                    ? "No component found: '%s/%s'"
                    : "The component '%s/%s' has no single view.";

                throw $this->createNotFoundException(sprintf($message, $type, $key));
            }

            $template = $component->getType()->isIsolatedComponentViewMode()
                ? "isolatedComponent"
                : "component";

            return $this->render("@Gluggi/Gluggi/{$template}.html.twig", [
                "component" => $component,
                "type" => $component->getType(),
                "pageTitle" => [
                    $component->getName(),
                    $component->getType()->getName(),
                ],
                "templateConfiguration" => $this->get("gluggi.component.configuration")->getConfiguration($component),
            ]);
        }
        catch (UnknownComponentTypeException $e)
        {
            throw $this->createNotFoundException($e->getMessage(), $e);
        }
    }



    /**
     * Includes all layout-related CSS <link> tags
     *
     * @return Response
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
     * @return Response
     */
    public function layoutJavaScriptAssetsAction ()
    {
        $assets = $this->get("gluggi.assets");

        return $this->render("@Gluggi/Gluggi/_layoutJavaScriptAssets.html.twig", [
            "urls" => $assets->getJavaScriptUrls(),
        ]);
    }



    /**
     * Includes all layout-related JavaScript <script> tags
     *
     * @return Response
     */
    public function layoutJavaScriptHeadAssetsAction ()
    {
        $assets = $this->get("gluggi.assets");

        return $this->render("@Gluggi/Gluggi/_layoutJavaScriptAssets.html.twig", [
            "urls" => $assets->getJavaScriptHeadUrls(),
        ]);
    }



    /**
     * Renders the HTML title
     *
     * @param string|array $pageTitle
     *
     * @return Response
     */
    public function htmlTitleAction ($pageTitle)
    {
        $segments = !is_array($pageTitle)
            ? [$pageTitle]
            : $pageTitle;

        $mainTitle = "Gluggi";

        if (null !== $this->get("gluggi.config")->getTitle())
        {
            $mainTitle .= " ({$this->get("gluggi.config")->getTitle()})";
        }

        $segments[] = $mainTitle;

        return new Response(
            htmlspecialchars(
                implode(" // ", $segments)
            )
        );
    }
}

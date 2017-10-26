<?php

namespace Becklyn\GluggiBundle\Controller;

use Becklyn\GluggiBundle\Assets\LayoutAssets;
use Becklyn\GluggiBundle\Component\ComponentConfiguration;
use Becklyn\GluggiBundle\Component\GluggiFinder;
use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Becklyn\GluggiBundle\Exception\UnknownComponentTypeException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;


/**
 * Controller for the main gluggi view
 */
class GluggiController extends AbstractController
{

    /**
     * Renders the index page
     *
     * @param GluggiFinder $finder
     * @param GluggiConfig $config
     *
     * @return Response
     */
    public function index (GluggiFinder $finder, GluggiConfig $config)
    {
        return $this->render("@Gluggi/Gluggi/index.html.twig", [
            "types" => $finder->getAllTypes(),
            "pageTitle" => "Index",
            "infoAction" => $config->getInfoAction(),
            "customTitle" => $config->getTitle(),
        ]);
    }



    /**
     * Renders a component in single view
     *
     * @param GluggiFinder           $finder
     * @param ComponentConfiguration $componentConfiguration
     * @param string                 $type
     * @param string                 $key
     *
     * @return Response
     */
    public function component (GluggiFinder $finder, ComponentConfiguration $componentConfiguration,  string $type, string $key)
    {
        try
        {
            $component = $finder->findComponent($type, $key);

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
                "templateConfiguration" => $componentConfiguration->getConfiguration($component),
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
     * @param LayoutAssets $assets
     *
     * @return Response
     */
    public function layoutCSSAssets (LayoutAssets $assets)
    {
        return $this->render("@Gluggi/Gluggi/_layoutCSSAssets.html.twig", [
            "urls" => $assets->getCssUrls(),
        ]);
    }



    /**
     * Includes all layout-related JavaScript <script> tags
     *
     * @param LayoutAssets $assets
     *
     * @return Response
     */
    public function layoutJavaScriptAssets (LayoutAssets $assets)
    {
        return $this->render("@Gluggi/Gluggi/_layoutJavaScriptAssets.html.twig", [
            "urls" => $assets->getJavaScriptUrls(),
        ]);
    }



    /**
     * Includes all layout-related JavaScript <script> tags
     *
     * @param LayoutAssets $assets
     *
     * @return Response
     */
    public function layoutJavaScriptHeadAssets (LayoutAssets $assets)
    {
        return $this->render("@Gluggi/Gluggi/_layoutJavaScriptAssets.html.twig", [
            "urls" => $assets->getJavaScriptHeadUrls(),
        ]);
    }



    /**
     * Renders the HTML title
     *
     * @param GluggiConfig $config
     * @param string|array $pageTitle
     *
     * @return Response
     */
    public function htmlTitle (GluggiConfig $config, $pageTitle)
    {
        $segments = !is_array($pageTitle)
            ? [$pageTitle]
            : $pageTitle;

        $mainTitle = "Gluggi";

        if (null !== $config->getTitle())
        {
            $mainTitle .= " ({$config->getTitle()})";
        }

        $segments[] = $mainTitle;

        return new Response(
            htmlspecialchars(
                implode(" // ", $segments)
            )
        );
    }
}

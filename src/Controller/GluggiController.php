<?php

namespace Becklyn\GluggiBundle\Controller;

use Becklyn\AssetsBundle\Html\AssetHtmlGenerator;
use Becklyn\GluggiBundle\Component\ComponentConfiguration;
use Becklyn\GluggiBundle\Component\GluggiFinder;
use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Exception\UnknownComponentTypeException;
use Becklyn\GluggiBundle\Serializer\TypesSerializer;
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
        return $this->render("@Gluggi/index/index.html.twig", [
            "types" => $finder->getAllTypes(),
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
    public function component (
        GluggiFinder $finder,
        ComponentConfiguration $componentConfiguration,
        string $type,
        string $key
    )
    {
        try
        {
            $component = $finder->findComponent($type, $key);

            if (null === $component || $component->isHidden())
            {
                $message = null === $component
                    ? "No component found: '%s/%s'"
                    : "The component '%s/%s' has no single view.";

                throw $this->createNotFoundException(\sprintf($message, $type, $key));
            }

            $template = "page" === $component->getType()->getKey()
                ? "@Gluggi/component/page.html.twig"
                : "@Gluggi/component/component.html.twig";

            return $this->render($template, [
                "component" => $component,
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
     * Renders the HTML title
     *
     * @param GluggiConfig $config
     * @param string|string[] $pageTitle
     *
     * @return Response
     */
    public function htmlTitle (GluggiConfig $config, $pageTitle)
    {
        $segments = (array) $pageTitle;
        $mainTitle = "Gluggi";

        if (null !== $config->getTitle())
        {
            $mainTitle .= " ({$config->getTitle()})";
        }

        $segments[] = $mainTitle;

        return new Response(
            \htmlspecialchars(
                \implode(" // ", $segments)
            )
        );
    }


    /**
     * Renders the layout assets
     *
     * @param GluggiConfig       $config
     * @param AssetHtmlGenerator $htmlGenerator
     * @param string             $type
     * @param array              $addAssets
     * @param array              $overrideAssets
     *
     * @return Response
     * @throws \Becklyn\AssetsBundle\Exception\AssetsException
     */
    public function layoutAssets (GluggiConfig $config, AssetHtmlGenerator $htmlGenerator, string $type, array $addAssets = [], array $overrideAssets = []) : Response
    {
        $overrideAssets = $overrideAssets[$type] ?? [];
        $coreAssets = [
            "css" => "@gluggi_core/css/gluggi.css",
            "js" => "@gluggi_core/js/gluggi.js",
        ];

        if (!empty($overrideAssets))
        {
            $assetPaths = $overrideAssets;
        }
        else
        {
            switch ($type)
            {
                case "js_head":
                    $assetPaths = $config->getJavaScriptHeadFiles();
                    break;

                case "js":
                    $assetPaths = $config->getJavaScriptFiles();
                    break;

                case "css":
                    $assetPaths = $config->getCssFiles();
                    break;

                default:
                    $assetPaths = [];
                    break;
            }

            $assetPaths = \array_merge($assetPaths, $addAssets[$type] ?? []);
        }

        if (\array_key_exists($type, $coreAssets))
        {
            \array_unshift($assetPaths, $coreAssets[$type]);
        }

        return new Response(
            $htmlGenerator->linkAssets($assetPaths)
        );
    }
}

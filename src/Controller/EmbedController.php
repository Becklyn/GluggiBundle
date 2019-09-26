<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Controller;

use Becklyn\AssetsBundle\Exception\AssetsException;
use Becklyn\AssetsBundle\Html\AssetHtmlGenerator;
use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class EmbedController extends AbstractController
{
    /**
     * Renders a data container.
     *
     * @param array  $data
     * @param string $id
     *
     * @return Response
     */
    public function dataContainer (array $data, string $id) : Response
    {
        $html = \sprintf(
            '<script class="gluggi-data-container" id="%s" type="application/json">%s</script>',
            \htmlspecialchars($id, \ENT_QUOTES),
            \htmlspecialchars(\json_encode($data), \ENT_NOQUOTES)
        );

        return new Response($html);
    }


    /**
     * Renders the layout assets.
     *
     * @param GluggiConfig       $config
     * @param AssetHtmlGenerator $htmlGenerator
     * @param string             $type
     * @param array              $addAssets
     * @param array              $overrideAssets
     *
     * @throws AssetsException
     *
     * @return Response
     */
    public function layoutAssets (
        GluggiConfig $config,
        AssetHtmlGenerator $htmlGenerator,
        string $type,
        array $addAssets = [],
        array $overrideAssets = []
    ) : Response
    {
        $overrideAssets = $overrideAssets[$type] ?? [];
        $coreAssets = [
            "css" => "@gluggi/css/gluggi.css",
            "js" => "@gluggi/js/gluggi.js",
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

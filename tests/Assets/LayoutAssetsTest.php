<?php

namespace Tests\Becklyn\GluggiBundle\Assets;

use Becklyn\AssetsBundle\Html\AssetHtmlGenerator;
use Becklyn\GluggiBundle\Assets\LayoutAssets;
use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use PHPUnit\Framework\TestCase;


class LayoutAssetsTest extends TestCase
{
    public function buildInstance (array $cssFiles = [], array $jsFiles = [])
    {
        $packageAssets = self::getMockBuilder(AssetHtmlGenerator::class)
            ->disableOriginalConstructor()
            ->getMock();

        $packageAssets
            ->method("getAssetUrlPath")
            ->willReturnCallback(
                function ($param)
                {
                    return ":intern:/{$param}";
                }
            );

        $config = self::getMockBuilder(GluggiConfig::class)
            ->disableOriginalConstructor()
            ->getMock();

        $config
            ->method("getCssFiles")
            ->willReturn($cssFiles);

        $config
            ->method("getJavaScriptFiles")
            ->willReturn($jsFiles);

        return new LayoutAssets($config, $packageAssets);
    }



    public function dataProviderJavaScript ()
    {
        return [
            ["a.js", ":intern:/a.js"],
            ["/a/a.js", ":intern://a/a.js"],
            ["http://a/a.js", "http://a/a.js"],
            ["https://a/a.js", "https://a/a.js"],
            ["http:/a/a.js", ":intern:/http:/a/a.js"],
        ];
    }



    public function dataProviderCSS ()
    {
        return [
            ["a.css", ":intern:/a.css"],
            ["/a/a.css", ":intern://a/a.css"],
            ["http://a/a.css", "http://a/a.css"],
            ["https://a/a.css", "https://a/a.css"],
            ["a/b.css", ":intern:/a/b.css"],
            ["http:/a/a.css", ":intern:/http:/a/a.css"],
        ];
    }



    /**
     * @dataProvider dataProviderJavaScript
     */
    public function testJavaScripts ($path, $expected)
    {
        $assets = $this->buildInstance([], [$path]);

        self::assertSame($expected, $assets->getJavaScriptUrls()[0]);
    }



    /**
     * @dataProvider dataProviderCSS
     */
    public function testCSS ($path, $expected)
    {
        $assets = $this->buildInstance([$path], []);

        self::assertSame($expected, $assets->getCssUrls()[0]);
    }
}

<?php declare(strict_types=1);

namespace Tests\Becklyn\GluggiBundle\Twig;

use Symfony\Component\DomCrawler\Crawler;

/**
 * Tests the dummy content: "form"
 */
class DummyFormTest extends AbstractGluggiTwigExtensionTest
{
    public function testFormRendering ()
    {
        $extension = $this->createTwigExtension();

        // first test: does it compile?
        $crawler = new Crawler($extension->getDummy("form"));
        self::assertTrue(\count($crawler->filter("input")) > 0);
    }
}

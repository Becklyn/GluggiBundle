<?php

namespace Tests\Becklyn\GluggiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class GluggiControllerTest extends WebTestCase
{
    public function testIndex () : void
    {
        $client = static::createClient();
        $client->request("GET", "/");
        $content = $client->getResponse()->getContent();

        self::assertContains(
            "<title>Gluggi</title>",
            $content
        );
    }


    public function testComponent () : void
    {
        $client = static::createClient();
        $client->request("GET", "/atom/example");
        $content = $client->getResponse()->getContent();

        self::assertContains(
            "<title>Example // Atom // Gluggi</title>",
            $content
        );
    }


    public function dataProviderComponentTypes () : array
    {
        // mapping component type on "should have staged view"
        return [
            ["atom", true],
            ["molecule", true],
            ["organism", true],
            ["template", true],
            ["page", false],
        ];
    }


    /**
     * @dataProvider dataProviderComponentTypes
     */
    public function testGluggiWrapperOnTypeComponentView (string $type, bool $shouldHaveWrapper) : void
    {
        $client = static::createClient();
        $crawler = $client->request("GET", "/{$type}/example");

        // if the page should have a wrapper, it should exactly have one of each component
        // otherwise 0
        $count = $shouldHaveWrapper ? 1 : 0;
        $message = "should " . ($shouldHaveWrapper ? "exist" : "not exist") . " for type {$type}";

        // all elements that create the structural view of gluggi
        $gluggiSelectors = [
            ".gluggi-sidebar",
            ".gluggi-stage",
        ];

        foreach ($gluggiSelectors as $selector)
        {
            self::assertSame($count, count($crawler->filter($selector)), "{$selector} {$message}");
        }
    }


    /**
     *
     */
    public function testUnknownComponent () : void
    {
        $client = static::createClient();
        $client->request("GET", "/atom/unknown");

        self::assertSame(404, $client->getResponse()->getStatusCode());
    }


    public function testUnknownComponentWithUnknownComponentType () : void
    {
        $client = static::createClient();
        $client->request("GET", "/unknown/unknown");

        self::assertSame(404, $client->getResponse()->getStatusCode());
    }
}

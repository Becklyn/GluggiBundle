<?php

namespace Tests\Becklyn\GluggiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;


class GluggiControllerTest extends WebTestCase
{
    public function testIndex ()
    {
        $client = static::createClient();
        $client->request("GET", "/");
        $content = $client->getResponse()->getContent();

        self::assertContains(
            "<title>Gluggi // Index</title>",
            $content
        );
    }


    public function testType ()
    {
        $client = static::createClient();
        $client->request("GET", "/atom/");
        $content = $client->getResponse()->getContent();

        self::assertContains(
            "<title>Gluggi // Atom</title>",
            $content
        );
    }


    public function testComponent ()
    {
        $client = static::createClient();
        $client->request("GET", "/atom/example/");
        $content = $client->getResponse()->getContent();

        self::assertContains(
            "<title>Gluggi // Atom // Example</title>",
            $content
        );
    }



    public function dataProviderComponentInTypeViews ()
    {
        return [
            ["atom", true],
            ["molecule", true],
            ["organism", true],
            ["template", true],
            // ["page", false],
        ];
    }



    /**
     * @dataProvider dataProviderComponentInTypeViews
     */
    public function testGluggiWrapperOnTypeComponentView (string $type, bool $shouldHaveWrapper)
    {
        $client = static::createClient();
        $crawler = $client->request("GET", "/{$type}/example/");

        // if the page should have a wrapper, it should exactly have one of each component
        // otherwise 0
        $count = $shouldHaveWrapper ? 1 : 0;
        $message = "should " . ($shouldHaveWrapper ? "exist" : "not exist") . " for type {$type}";

        // all elements that create the structural view of gluggi
        $gluggiSelectors = [
            "#gluggi-content",
            ".gluggi-label",
            ".gluggi-header",
            ".gluggi-preview",
            ".gluggi-component",
        ];

        foreach ($gluggiSelectors as $selector)
        {
            self::assertSame($count, count($crawler->filter($selector)), "{$selector} {$message}");
        }
    }
}

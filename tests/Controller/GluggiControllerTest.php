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



    public function testGluggiWrapperOnAtom ()
    {
        $client = static::createClient();
        $crawler = $client->request("GET", "/atom/example/");

        // the page should have a header & preview container
        self::assertSame(1, count($crawler->filter(".gluggi-header")));
        self::assertSame(1, count($crawler->filter(".gluggi-preview")));
    }



    public function testNoGluggiWrapperOnPage ()
    {
        $client = static::createClient();
        $crawler = $client->request("GET", "/page/example/");

        // the page should have NO header & preview container
        self::assertSame(0, count($crawler->filter(".gluggi-header")));
        self::assertSame(0, count($crawler->filter(".gluggi-preview")));
    }
}

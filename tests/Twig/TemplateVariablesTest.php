<?php

namespace Tests\Becklyn\GluggiBundle\Twig;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;


class TemplateVariablesTest extends WebTestCase
{
    public function testStandaloneComponentView ()
    {
        $client = static::createClient();
        $client->request("GET", "/atom/standalone_test/");
        $content = $client->getResponse()->getContent();

        self::assertContains("Test-standalone", $content);
    }



    public function testStandaloneComponentTypeListView ()
    {
        $client = static::createClient();
        $client->request("GET", "/atom/");
        $content = $client->getResponse()->getContent();

        self::assertContains("Test-standalone", $content);
    }



    public function testStandaloneIncludeWithDefaultValue ()
    {
        $client = static::createClient();
        $client->request("GET", "/molecule/standalone_include/");
        $content = $client->getResponse()->getContent();

        // first check that the correct file is loaded
        self::assertContains("Include", $content);
        // then check assertion
        self::assertContains("Test-embedded", $content);
    }



    public function testStandaloneIncludeWithExplicitValue ()
    {
        $client = static::createClient();
        $client->request("GET", "/molecule/standalone_include_explicit/");
        $content = $client->getResponse()->getContent();

        // first check that the correct file is loaded
        self::assertContains("Include explicit", $content);
        // then check assertion
        self::assertContains("Test-standalone", $content);
    }
}

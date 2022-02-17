<?php

namespace Tests\Becklyn\GluggiBundle\Twig;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Tests\Becklyn\GluggiBundle\App\TestKernel;

class TemplateVariablesTest extends WebTestCase
{
    /**
     * @inheritDoc
     */
    protected static function getKernelClass () : string
    {
        return TestKernel::class;
    }


    public function testStandaloneComponentView () : void
    {
        $client = static::createClient();
        $client->request("GET", "/atom/standalone_test");
        $content = $client->getResponse()->getContent();

        self::assertStringContainsString("Test-standalone", $content);
    }



    public function testStandaloneIncludeWithDefaultValue () : void
    {
        $client = static::createClient();
        $client->request("GET", "/molecule/standalone_include");
        $content = $client->getResponse()->getContent();

        // first check that the correct file is loaded
        self::assertStringContainsString("Include", $content);
        // then check assertion
        self::assertStringContainsString("Test-embedded", $content);
    }



    public function testStandaloneIncludeWithExplicitValue () : void
    {
        $client = static::createClient();
        $client->request("GET", "/molecule/standalone_include_explicit");
        $content = $client->getResponse()->getContent();

        // first check that the correct file is loaded
        self::assertStringContainsString("Include explicit", $content);
        // then check assertion
        self::assertStringContainsString("Test-standalone", $content);
    }
}

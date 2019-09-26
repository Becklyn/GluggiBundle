<?php declare(strict_types=1);

namespace Tests\Becklyn\GluggiBundle\Html;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class HtmlStructureTest extends WebTestCase
{
    /**
     * @return array
     */
    public function provideContainerClassOnPage () : array
    {
        return [
            ["atom", 0],
            ["molecule", 0],
            ["organism", 0],
            ["template", 0],
            ["page", 1],
        ];
    }


    /**
     * @dataProvider provideContainerClassOnPage
     *
     * @param string $type
     * @param int    $expected
     */
    public function testContainerClassOnPage (string $type, int $expected) : void
    {
        $client = static::createClient();
        $crawler = $client->request("GET", "/{$type}/example");

        self::assertCount($expected, $crawler->filter(".gluggi-container.gluggi-isolated-container"));
    }
}

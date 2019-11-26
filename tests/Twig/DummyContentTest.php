<?php declare(strict_types=1);

namespace Tests\Becklyn\GluggiBundle\Twig;

use Symfony\Component\DomCrawler\Crawler;

class DummyContentTest extends AbstractGluggiTwigExtensionTest
{
    /**
     * @return array
     */
    public function provideContentHeadlines () : array
    {
        return [
            "no config" => [null, true, true, true, true, false, false],
            "min" => [1, true, false, false, false, false, false],
            "too low" => [-1, true, false, false, false, false, false],
            "some valid value" => [3, true, true, true, false, false, false],
            "too high" => [7, true, true, true, true, true, true],
        ];
    }


    /**
     * @dataProvider provideContentHeadlines
     *
     * @param int|null $configValue
     * @param bool     $hasH1
     * @param bool     $hasH2
     * @param bool     $hasH3
     * @param bool     $hasH4
     * @param bool     $hasH5
     * @param bool     $hasH6
     */
    public function testContentHeadlines (
        ?int $configValue,
        bool $hasH1,
        bool $hasH2,
        bool $hasH3,
        bool $hasH4,
        bool $hasH5,
        bool $hasH6
    ) : void
    {
        $extension = $this->createTwigExtension();

        $options = [];

        if (null !== $configValue)
        {
            $options["headlines"] = $configValue;
        }

        $crawler = new Crawler($extension->getDummy("content", $options));
        self::assertSame($hasH1, 0 < \count($crawler->filter(".h1")));
        self::assertSame($hasH2, 0 < \count($crawler->filter(".h2")));
        self::assertSame($hasH3, 0 < \count($crawler->filter(".h3")));
        self::assertSame($hasH4, 0 < \count($crawler->filter(".h4")));
        self::assertSame($hasH5, 0 < \count($crawler->filter(".h5")));
        self::assertSame($hasH6, 0 < \count($crawler->filter(".h6")));
        // never have h7
        self::assertSame(false, 0 < \count($crawler->filter(".h7")));
    }
}

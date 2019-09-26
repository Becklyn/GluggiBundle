<?php declare(strict_types=1);

namespace Tests\Becklyn\GluggiBundle\Configuration;

use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpKernel\KernelInterface;

class GluggiConfigurationTest extends TestCase
{
    private $config;


    protected function setUp ()
    {
        $kernel = $this->getMockBuilder(KernelInterface::class)
            ->disableOriginalConstructor()
            ->getMock();

        $kernel
            ->method("locateResource")
            ->willReturnCallback(
                function ($arg)
                {
                    return rtrim(\str_replace("@", "/bundle/", $arg), "/");
                }
            );

        $this->config = new GluggiConfig($kernel, "/twig/");
    }



    public function dataProviderResolver ()
    {
        return [
            ["test", "/twig/test"],
            ["/a/b/c/", "/twig/a/b/c"],
            ["@Layout", "/bundle/LayoutBundle/Resources/views"],
            ["@Layout/", "/bundle/LayoutBundle/Resources/views"],
            ["@Layout/abc", "/bundle/LayoutBundle/Resources/views/abc"],
        ];
    }


    /**
     * @dataProvider dataProviderResolver
     *
     * @param string $path
     * @param string $expected
     */
    public function testResolver (string $path, string $expected)
    {
        $actual = $this->config->resolvePath($path);
        self::assertEquals($expected, $actual);
    }
}

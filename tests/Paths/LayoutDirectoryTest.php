<?php

namespace Tests\Becklyn\GluggiBundle\Paths;


use Becklyn\GluggiBundle\Paths\LayoutDirectory;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpKernel\KernelInterface;


class LayoutDirectoryTest extends TestCase
{
    private $resolver;


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

        $this->resolver = new LayoutDirectory($kernel, "/twig/");
    }


    public function dataProviderResolver ()
    {
        return [
            ["test", "/twig/test"],
            ["/a/b/c/", "/twig/a/b/c"],
            ["@Layout", "/bundle/LayoutBundle"],
            ["@Layout/", "/bundle/LayoutBundle"],
            ["@Layout/abc", "/bundle/LayoutBundle/abc"],
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
        $actual = $this->resolver->resolve($path);
        self::assertEquals($expected, $actual);
    }
}

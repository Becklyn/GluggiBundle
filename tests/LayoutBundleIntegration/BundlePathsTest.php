<?php

namespace Tests\Becklyn\GluggiBundle\LayoutBundleIntegration;

use Becklyn\GluggiBundle\LayoutBundleIntegration\BundlePaths;
use Symfony\Component\HttpKernel\Bundle\Bundle;
use Symfony\Component\HttpKernel\KernelInterface;


class BundlePathsTest extends \PHPUnit_Framework_TestCase
{
    public function testWithLayoutBundle ()
    {
        $kernel = self::getMockBuilder(KernelInterface::class)
            ->disableOriginalConstructor()
            ->getMock();

        $bundle = self::getMockBuilder(Bundle::class)
            ->disableOriginalConstructor()
            ->getMock();

        $bundle
            ->method("getPath")
            ->willReturn("bundle-path");

        $kernel
            ->method("getBundle")
            ->willReturn($bundle);

        $bundlePaths = new BundlePaths($kernel);
        self::assertSame("bundle-path/Resources", $bundlePaths->getResourcesDir());
        self::assertSame("bundle-path/Resources/views", $bundlePaths->getViewsDir());
    }
}

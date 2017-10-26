<?php

namespace Tests\Becklyn\GluggiBundle\Component;

use Becklyn\GluggiBundle\Component\ComponentLoader;
use Becklyn\GluggiBundle\Data\ComponentType;
use PHPUnit\Framework\TestCase;


/**
 *
 */
class ComponentLoaderTest extends TestCase
{
    private function loadAtoms ()
    {
        $loader = new ComponentLoader(__DIR__ . "/../app/src/LayoutBundle/Resources/views");
        $type = self::getMockBuilder(ComponentType::class)
            ->disableOriginalConstructor()
            ->getMock();

        $type
            ->method("getDirectory")
            ->willReturn("atom");

        return $loader->loadComponents($type);
    }



    public function testViewDirectory ()
    {
        $components = $this->loadAtoms();

        self::assertArrayHasKey("_hidden", $components);
        self::assertArrayHasKey("example", $components);
        self::assertArrayHasKey("standalone_test", $components);
        self::assertCount(3, $components);
    }
}

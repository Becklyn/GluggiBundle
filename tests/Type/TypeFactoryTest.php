<?php

namespace Tests\Becklyn\GluggiBundle\Type;

use Becklyn\GluggiBundle\Type\TypeFactory;
use PHPUnit\Framework\TestCase;
use Tests\Becklyn\GluggiBundle\TestWithGluggiConfigTrait;


/**
 *
 */
class TypeFactoryTest extends TestCase
{
    use TestWithGluggiConfigTrait;


    /**
     *
     */
    public function testLoadDirectory () : void
    {
        $loader = new TypeFactory($this->createGluggiConfig());
        $type = $loader->create("atom");
        $components = $type->getComponents();

        self::assertArrayHasKey("_hidden", $components);
        self::assertArrayHasKey("example", $components);
        self::assertArrayHasKey("standalone_test", $components);
        self::assertCount(3, $components);
    }
}

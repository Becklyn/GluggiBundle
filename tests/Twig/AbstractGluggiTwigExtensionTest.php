<?php declare(strict_types=1);

namespace Tests\Becklyn\GluggiBundle\Twig;

use Becklyn\GluggiBundle\Twig\GluggiTwigExtension;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\DependencyInjection\ContainerInterface;

abstract class AbstractGluggiTwigExtensionTest extends WebTestCase
{
    /**
     * @return GluggiTwigExtension
     */
    protected function createTwigExtension () : GluggiTwigExtension
    {
        self::bootKernel();

        return $this->getContainer()->get(GluggiTwigExtension::class);
    }
}

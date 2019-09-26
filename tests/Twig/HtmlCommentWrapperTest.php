<?php declare(strict_types=1);

namespace Tests\Becklyn\GluggiBundle\Twig;

use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Becklyn\GluggiBundle\Twig\GluggiTwigExtension;
use Becklyn\GluggiBundle\Type\TypeFactory;
use Becklyn\GluggiBundle\Type\TypeRegistry;
use Becklyn\GluggiBundle\Usages\DependenciesParser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\DependencyInjection\ServiceLocator;
use Symfony\Component\HttpKernel\KernelInterface;
use Twig\Environment;

class HtmlCommentWrapperTest extends WebTestCase
{
    /**
     * @return GluggiTwigExtension
     */
    public function createTwigExtension () : GluggiTwigExtension
    {
        $twig = $this->getMockBuilder(Environment::class)
            ->disableOriginalConstructor()
            ->getMock();
        $kernel = $this->getMockBuilder(KernelInterface::class)
            ->disableOriginalConstructor()
            ->getMock();

        $twig->method("render")
            ->willReturn("rendered_template");

        $dependenciesParser = $this->getMockBuilder(DependenciesParser::class)
            ->disableOriginalConstructor()
            ->getMock();

        $locator = new ServiceLocator([
            "twig" => function () use ($twig) { return $twig; },
        ]);

        $config = new GluggiConfig($kernel, __DIR__ . "/../templates");

        $registry = new TypeRegistry(
            new TypeFactory($config),
            $dependenciesParser
        );

        return new GluggiTwigExtension($locator, $registry, $config);
    }


    /**
     *
     */
    public function testHtmlCommentWrapping () : void
    {
        $extension = $this->createTwigExtension();

        self::assertSame(
            '<!-- Component Start: atom/example -->rendered_template<!-- / Component End: atom/example -->',
            $extension->renderGluggiComponent("atom", "example")
        );
    }
}

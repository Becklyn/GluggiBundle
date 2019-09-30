<?php declare(strict_types=1);

namespace Tests\Becklyn\GluggiBundle\Twig;

use PHPUnit\Framework\TestCase;

class HtmlCommentWrapperTest extends TestCase
{
    use GluggiTwigExtensionTestTrait;

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

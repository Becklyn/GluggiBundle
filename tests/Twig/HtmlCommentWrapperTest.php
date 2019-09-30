<?php declare(strict_types=1);

namespace Tests\Becklyn\GluggiBundle\Twig;

class HtmlCommentWrapperTest extends AbstractGluggiTwigExtensionTest
{
    /**
     *
     */
    public function testHtmlCommentWrapping () : void
    {
        $extension = $this->createTwigExtension();

        self::assertSame(
            '<!-- Component Start: atom/example -->example<!-- / Component End: atom/example -->',
            $extension->renderGluggiComponent("atom", "example")
        );
    }
}

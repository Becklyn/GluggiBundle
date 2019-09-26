<?php declare(strict_types=1);

namespace Tests\Becklyn\GluggiBundle;

use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Tests\Becklyn\GluggiBundle\App\TestKernel;

trait TestWithGluggiConfigTrait
{
    /**
     * Creates a gluggi config
     *
     * @return GluggiConfig
     */
    public function createGluggiConfig () : GluggiConfig
    {
        return new GluggiConfig(new TestKernel(), __DIR__ . "/templates");
    }
}

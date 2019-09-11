<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Normalizer;

use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Usages\ResolvedDependencies;

/**
 * Normalizes all data used in gluggi
 */
class GluggiDataNormalizer
{
    /**
     * @param Component $component
     *
     * @return array
     */
    public function normalizeComponent (Component $component) : array
    {
        return [
            "key" => $component->getKey(),
            "type" => $component->getType()->getKey(),
            "name" => $component->getName(),
            "hidden" => $component->isHidden(),
        ];
    }


    /**
     * @param ResolvedDependencies $dependencies
     *
     * @return array
     */
    public function normalizeDependencies (ResolvedDependencies $dependencies) : array
    {
        return [
            "direct" => \array_map([$this, "normalizeComponent"], $this->sortComponentList($dependencies->getDirect())),
            "transitive" => \array_map([$this, "normalizeComponent"], $this->sortComponentList($dependencies->getTransitive())),
        ];
    }


    private function sortComponentList (array $components) : array
    {
        return \array_values($components);
    }
}

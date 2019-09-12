<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Normalizer;

use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Data\ComponentType;
use Becklyn\GluggiBundle\Usages\ResolvedDependencies;

/**
 * Normalizes all data structures used in gluggi
 */
class GluggiNormalizer
{
    /**
     * @param Component $component
     *
     * @return array
     */
    public function normalizeComponent (Component $component, ?Component $activeComponent = null) : array
    {
        return [
            "key" => $component->getKey(),
            "type" => $component->getType()->getKey(),
            "name" => $component->getName(),
            "hidden" => $component->isHidden(),
            "error" => null !== $component->getError()
                ? $component->getError()->getMessage()
                : null,
            "active" => $activeComponent === $component,
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


    /**
     * Normalizes a component type
     *
     * @param ComponentType  $type
     * @param Component|null $activeComponent
     *
     * @return array
     */
    public function normalizeType (ComponentType $type, ?Component $activeComponent = null) : array
    {
        $serializedComponents = [];

        foreach ($type->getComponents() as $component)
        {
            if ($component->isHidden())
            {
                continue;
            }

            $serializedComponents[] = $this->normalizeComponent($component, $activeComponent);
        }

        return [
            "title" => $type->getName(),
            "components" => $serializedComponents,
        ];
    }


    /**
     * Normalizes a list of types
     *
     * @param ComponentType[] $types
     * @param Component|null  $activeComponent
     *
     * @return array
     */
    public function normalizeTypes (array $types, ?Component $activeComponent = null) : array
    {
        $result = [];

        foreach ($types as $type)
        {
            $normalized = $this->normalizeType($type, $activeComponent);

            if (\count($normalized["components"]) > 0)
            {
                $result[] = $normalized;
            }
        }

        return $result;
    }


    /**
     * @param array $components
     *
     * @return array
     */
    private function sortComponentList (array $components) : array
    {
        return \array_values($components);
    }
}

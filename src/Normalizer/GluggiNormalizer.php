<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Normalizer;

use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Data\ComponentType;
use Becklyn\GluggiBundle\Data\References;

/**
 * Normalizes all data structures used in gluggi.
 */
class GluggiNormalizer
{
    /**
     *
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
     *
     */
    public function normalizeDependencies (References $dependencies) : array
    {
        return [
            "direct" => \array_map([$this, "normalizeComponent"], $this->sortComponentList($dependencies->getDirect())),
            "transitive" => \array_map([$this, "normalizeComponent"], $this->sortComponentList($dependencies->getTransitive())),
        ];
    }


    /**
     * Normalizes a component type.
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
     * Normalizes a list of types.
     *
     * @param ComponentType[] $types
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
     *
     */
    private function sortComponentList (array $components) : array
    {
        return \array_values($components);
    }
}

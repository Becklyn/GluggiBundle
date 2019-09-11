<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Usages;

use Becklyn\GluggiBundle\Data\Component;

class DependenciesResolver
{
    /**
     * @param Component[] $map
     * @param Component     $component
     *
     * @return ResolvedDependencies
     */
    public function resolveDependencies (array $map, Component $component) : ResolvedDependencies
    {
        $direct = [];
        $transitive = [];

        // deduplicate dependencies
        foreach ($map[$component->getFullKey()] ?? [] as $directUsage)
        {
            $direct[$directUsage->getFullKey()] = $directUsage;
        }

        if (!empty($direct))
        {
            $transitive = $this->findTransitiveDependencies($map, $component);
        }

        // remove transitive dependencies, that are already direct dependencies
        foreach ($direct as $usage)
        {
            if (\array_key_exists($usage->getFullKey(), $transitive))
            {
                unset($transitive[$usage->getFullKey()]);
            }
        }


        return new ResolvedDependencies($direct, $transitive);
    }


    /**
     * @param array     $map
     * @param Component $component
     *
     * @return Component[]
     */
    private function findTransitiveDependencies (array $map, Component $component) : array
    {
        $queue = $map[$component->getFullKey()];
        $alreadyChecked = [
            $component->getFullKey() => true,
        ];
        $result = [];

        while (!empty($queue))
        {
            /** @var Component $queueEntry */
            $queueEntry = \array_pop($queue);

            if (\array_key_exists($queueEntry->getFullKey(), $alreadyChecked))
            {
                continue;
            }

            /** @var Component[] $queueUses */
            $queueUses = $map[$queueEntry->getFullKey()] ?? [];

            foreach ($queueUses as $queueUse)
            {
                if (\array_key_exists($queueUse->getFullKey(), $alreadyChecked))
                {
                    continue;
                }

                $result[$queueUse->getFullKey()] = $queueUse;
                $queue[] = $queueUse;
            }
        }

        return $result;
    }
}

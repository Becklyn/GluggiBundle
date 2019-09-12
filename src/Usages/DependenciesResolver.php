<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Usages;

use Becklyn\GluggiBundle\Data\Component;

class DependenciesResolver
{
    /**
     * @param Component $component
     *
     * @return ResolvedDependencies
     */
    public function resolveDependencies (Component $component) : ResolvedDependencies
    {
        $fetcher = function (Component $component)
        {
            return $component->getDependencies();
        };

        return $this->resolve($component, $fetcher);
    }


    /**
     * @param Component $component
     *
     * @return ResolvedDependencies
     */
    public function resolveUsages (Component $component) : ResolvedDependencies
    {
        $fetcher = function (Component $component)
        {
            return $component->getUsages();
        };

        return $this->resolve($component, $fetcher);
    }


    /**
     * @param Component $component
     * @param callable  $fetcher
     *
     * @return ResolvedDependencies
     */
    private function resolve (Component $component, callable $fetcher) : ResolvedDependencies
    {
        $direct = [];
        $transitive = [];

        // deduplicate dependencies
        foreach ($fetcher($component) as $directUsage)
        {
            $direct[$directUsage->getFullKey()] = $directUsage;
        }

        if (!empty($direct))
        {
            $transitive = $this->findTransitiveDependencies($component, $direct, $fetcher);
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
    private function findTransitiveDependencies (Component $component, array $direct, callable $fetcher) : array
    {
        $queue = $direct;
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
            $queueUses = $fetcher($queueEntry);

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

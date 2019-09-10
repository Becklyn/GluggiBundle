<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Usages;

use Becklyn\GluggiBundle\Component\GluggiFinder;
use Becklyn\GluggiBundle\Data\Component;
use Twig\Environment;
use Twig\Error\Error;
use Twig\NodeTraverser;

class UsagesMap
{
    /**
     * @var Component[]|null
     */
    private $uses;

    /**
     * @var Component[]|null
     */
    private $usedIn;


    /**
     * @var GluggiFinder
     */
    private $finder;


    /**
     * @var Environment
     */
    private $twig;


    /**
     * @var UsagesVisitor
     */
    private $visitor;


    /**
     * @var NodeTraverser
     */
    private $traverser;


    /**
     * @param GluggiFinder $finder
     * @param Environment  $twig
     */
    public function __construct (GluggiFinder $finder, Environment $twig)
    {
        $this->finder = $finder;
        $this->twig = $twig;
        $this->visitor = new UsagesVisitor();
        $this->traverser = new NodeTraverser($this->twig, [$this->visitor]);
    }


    /**
     * @param Component $component
     *
     * @return Component[]
     */
    public function getUses (Component $component) : array
    {
        $this->ensureCacheIsFresh();
        return $this->uses[$component->getFullKey()] ?? [];
    }


    /**
     * @param Component $component
     *
     * @return Component[]
     */
    public function getUsedIn (Component $component) : array
    {
        $this->ensureCacheIsFresh();
        return $this->usedIn[$component->getFullKey()] ?? [];
    }


    /**
     *
     */
    private function ensureCacheIsFresh ()
    {
        if (null !== $this->uses && null !== $this->usedIn)
        {
            return;
        }

        $this->uses = [];
        $this->usedIn = [];

        foreach ($this->finder->getAllTypes() as $type)
        {
            foreach ($type->getComponents() as $component)
            {
                $uses = $this->findUsagesInComponent($component->getImportPath());
                $this->uses[$component->getFullKey()] = $uses;

                foreach ($uses as $usage)
                {
                    $this->usedIn[$usage->getFullKey()][] = $component;
                }
            }
        }
    }


    /**
     * Find every component that is used in the given template
     *
     * @param string $template
     *
     * @return Component[]
     */
    private function findUsagesInComponent (string $template) : array
    {
        try {
            $uses = [];

            $source = $this->twig->getLoader()->getSourceContext($template);
            $tokenStream = $this->twig->tokenize($source);
            $module = $this->twig->parse($tokenStream);


            $this->visitor->reset();
            $this->traverser->traverse($module);
            $usages = $this->visitor->getUsages();

            foreach ($usages as $type => $names)
            {
                foreach ($names as $name)
                {
                    $uses[] = $this->finder->findComponent($type, $name);
                }
            }

            return $uses;
        }
        catch (Error $e)
        {
            return [];
        }
    }
}

<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Usages;

use Becklyn\GluggiBundle\ComponentType\ComponentTypeRegistry;
use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Data\Error\CompilationError;
use Becklyn\GluggiBundle\Data\Error\GluggiError;
use Twig\Environment;
use Twig\Error\Error;
use Twig\NodeTraverser;

class DependenciesParser
{
    /**
     * @var Environment
     */
    private $twig;


    /**
     * @param ComponentTypeRegistry $typeRegistry
     */
    public function __construct (Environment $twig)
    {
        $this->twig = $twig;
        $this->visitor = new TwigUsagesVisitor();
        $this->traverser = new NodeTraverser($this->twig, [$this->visitor]);
    }


    /**
     * Parses all dependencies
     *
     * @param ComponentTypeRegistry $typeRegistry
     */
    public function parseDependencies (ComponentTypeRegistry $typeRegistry) : void
    {
        foreach ($typeRegistry->getAll() as $type)
        {
            foreach ($type->getComponents() as $component)
            {
                $this->findAndLinkDependencies($typeRegistry, $component);
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
    private function findAndLinkDependencies (ComponentTypeRegistry $typeRegistry, Component $component) : void
    {
        try
        {
            $source = $this->twig->getLoader()->getSourceContext($component->getTemplatePath());
            $tokenStream = $this->twig->tokenize($source);
            $module = $this->twig->parse($tokenStream);


            $this->visitor->reset();
            $this->traverser->traverse($module);
            $usages = $this->visitor->getUsages();

            foreach ($usages as $type => $names)
            {
                foreach ($names as $name)
                {
                    $dependency = $typeRegistry->getType($type)->getComponent($name);

                    if (null === $dependency)
                    {
                        $component->setError(new GluggiError("Component imports unknown component: '{$type}/{$name}'"));
                        return;
                    }

                    $component->addDependency($dependency);
                    $dependency->addUsage($component);
                }
            }
        }
        catch (Error $e)
        {
            $component->setError(new CompilationError($e));
            return;
        }
    }
}

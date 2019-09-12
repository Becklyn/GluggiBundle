<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Usages;

use Becklyn\GluggiBundle\Type\TypeRegistry;
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
     * @param TypeRegistry $typeRegistry
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
     * @param TypeRegistry $typeRegistry
     */
    public function parseDependencies (TypeRegistry $typeRegistry) : void
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
    private function findAndLinkDependencies (TypeRegistry $typeRegistry, Component $component) : void
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
                    $dependency = $typeRegistry->getComponent($type, $name);

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

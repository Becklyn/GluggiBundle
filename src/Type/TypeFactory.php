<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Type;

use Becklyn\GluggiBundle\Configuration\GluggiConfig;
use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Data\ComponentType;
use Symfony\Component\Finder\Finder;

class TypeFactory
{
    /**
     * @var string
     */
    private $templatesDir;


    /**
     * @var string
     */
    private $templatePrefix;


    /**
     * @param string $templatesDir
     * @param string $layoutDir
     */
    public function __construct (GluggiConfig $config)
    {
        $this->templatesDir = $config->getResolvedLayoutDir();
        $this->templatePrefix = $config->getLayoutDir();
    }


    /**
     * Creates the component types and loads all components.
     *
     * @param string $typeKey
     *
     * @return ComponentType
     */
    public function create (string $typeKey) : ComponentType
    {
        $type = new ComponentType($typeKey);
        $path = "{$this->templatesDir}/{$type->getKey()}";

        if (!\is_dir($path) || !\is_readable($path))
        {
            return $type;
        }

        $finder = new Finder();
        $files = $finder
            ->files()
            ->in($path)
            ->depth("== 0")
            ->name("*.html.twig")
            ->sortByName();

        foreach ($files as $file)
        {
            $type->addComponent($this->createComponent($file, $this->templatePrefix, $type));
        }

        return $type;
    }


    /**
     * @param \SplFileInfo  $file
     * @param string        $templatePathPrefix
     * @param ComponentType $type
     *
     * @return Component
     */
    private function createComponent (\SplFileInfo $file, string $templatePathPrefix, ComponentType $type)
    {
        $fileName = $file->getBasename();
        $key = $file->getBasename('.html.twig');

        return new Component(
            $fileName,
            $key,
            $this->generateComponentName($key),
            "_" === $fileName[0],
            $type,
            "{$templatePathPrefix}/{$type->getKey()}/{$fileName}"
        );
    }


    /**
     * Generates the name from the key.
     *
     * @param string $key
     *
     * @return string
     */
    private function generateComponentName ($key)
    {
        $parts = \preg_split("~[-_]~", $key, -1, \PREG_SPLIT_NO_EMPTY);
        return \ucwords(\implode(" ", $parts));
    }
}

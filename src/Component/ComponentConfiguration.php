<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Component;

use Becklyn\GluggiBundle\Data\Component;
use Symfony\Component\Yaml\Exception\ParseException;
use Symfony\Component\Yaml\Yaml;
use Twig\Environment;
use Twig\Error\Error;

class ComponentConfiguration
{
    /**
     * @var Environment
     */
    private $twig;


    /**
     */
    public function __construct (Environment $twig)
    {
        $this->twig = $twig;
    }


    /**
     *
     */
    public function getConfiguration (Component $component) : array
    {
        try
        {
            $loader = $this->twig->getLoader();
            $template = $loader->getSourceContext($component->getTemplatePath())->getCode();

            if (1 === \preg_match('~^\\s*{#-?(?P<config>.*?)-?#}~s', $template, $matches))
            {
                return $this->parseConfig($matches["config"]);
            }

            return [];
        }
        catch (Error $e)
        {
            return [];
        }
    }


    /**
     * Parses the config from the given config text.
     */
    private function parseConfig (string $configText) : array
    {
        $config = $this->deindent($configText);

        if (empty($config))
        {
            return [];
        }

        try
        {
            $parsed = Yaml::parse($config);

            return \is_array($parsed)
                ? $parsed
                : [];
        }
        catch (ParseException $e)
        {
            return [];
        }
    }


    /**
     * Deindents the given text.
     */
    private function deindent (string $configText) : string
    {
        $configText = \rtrim($configText);

        if (empty($configText))
        {
            return "";
        }

        // remove all heading whitespace-only lines
        $configText = \preg_replace("~\\A\\s*\n~", "", $configText);

        // fetch indention of first line
        if (1 === \preg_match('~\\A(?P<indention>\\s*)[^\\s]~', $configText, $matches))
        {
            // check whether all lines have at least the indention of the first line
            if (1 === \preg_match('~^(?!' . $matches["indention"] . ')~m', $configText))
            {
                // there is a line with a smaller indention than the first line
                // -> abort
                return "";
            }

            // deindent all lines
            return \preg_replace('~^' . $matches["indention"] . '~m', "", $configText);
        }

        return "";
    }
}

<?php

namespace Becklyn\GluggiBundle\Component;

use Becklyn\GluggiBundle\Data\Component;
use Becklyn\GluggiBundle\Data\ComponentType;
use Symfony\Component\Yaml\Exception\ParseException;
use Symfony\Component\Yaml\Yaml;


class ComponentConfiguration
{
    /**
     * @var \Twig_Environment
     */
    private $twig;



    /**
     * @param \Twig_Environment $twig
     */
    public function __construct (\Twig_Environment $twig)
    {
        $this->twig = $twig;
    }



    /**
     * @param Component $component
     *
     * @return array
     */
    public function getConfiguration (Component $component) : array
    {
        try
        {
            /** @var \Twig_Loader_Filesystem $loader */
            $loader = $this->twig->getLoader();
            $template = $loader->getSourceContext($component->getImportPath())->getCode();

            if (1 === preg_match('~^\\s*\\{#-?(?P<config>.*?)-?#\\}~s', $template, $matches))
            {
                return $this->parseConfig($matches["config"]);
            }

            return [];
        }
        catch (\Twig_Error $e)
        {
            return [];
        }
    }



    /**
     * Parses the config from the given config text
     *
     * @param string $configText
     *
     * @return array
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

            return is_array($parsed)
                ? $parsed
                : [];
        }
        catch (ParseException $e)
        {
            return [];
        }
    }



    /**
     * Deindents the given text
     *
     * @param string $configText
     *
     * @return string
     */
    private function deindent (string $configText) : string
    {
        $configText = rtrim($configText);

        if (empty($configText))
        {
            return "";
        }

        // remove all heading whitespace-only lines
        $configText = preg_replace("~\\A\\s*\n~", "", $configText);

        // fetch indention of first line
        if (1 === preg_match('~\A(?P<indention>\\s*)[^\\s]~', $configText, $matches))
        {
            // check whether all lines have at least the indention of the first line
            if (1 === preg_match('~^(?!' . $matches["indention"] . ')~m', $configText))
            {
                // there is a line with a smaller indention than the first line
                // -> abort
                return "";
            }

            // deindent all lines
            return preg_replace('~^' . $matches["indention"] . '~m', "", $configText);
        }

        return "";
    }
}

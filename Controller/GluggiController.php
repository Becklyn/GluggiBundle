<?php

namespace Becklyn\GluggiBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;


/**
 * Controller for the main gluggi view
 */
class GluggiController extends Controller
{
    /**
     * @Template()
     * @return array
     */
    public function indexAction ()
    {
        $finder = $this->get("gluggi.finder");

        return [
            "allTypes" => $finder->findAll(),
        ];
    }



    /**
     * Renders a list of all components in the given type
     *
     * @Template()
     *
     * @param string $type
     *
     * @return array
     */
    public function typeAction (string $type)
    {
        $components = $this->get("gluggi.finder")->findByType($type);

        if (empty($components))
        {
            throw $this->createNotFoundException(sprintf("No components found in type '%s'.", $type));
        }

        return [
            "components" => $components,
            "type" => $type,
        ];
    }



    /**
     * Renders a component in single view
     * @Template()
     *
     * @param string $type
     * @param string $key
     *
     * @return array
     */
    public function componentAction (string $type, string $key)
    {
        $component = $this->get("gluggi.finder")->find($type, $key);

        if (null === $component)
        {
            throw $this->createNotFoundException(sprintf("No component found: '%s/%s'", $type, $key));
        }

        return [
            "component" => $component,
            "type" => $type,
        ];
    }
}

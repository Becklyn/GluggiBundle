<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Serializer;

use Becklyn\GluggiBundle\Component\GluggiFinder;
use Becklyn\GluggiBundle\Data\Component;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class TypesSerializer
{
    /**
     * @var GluggiFinder
     */
    private $finder;


    /**
     * @var RouterInterface
     */
    private $router;


    /**
     * @var TranslatorInterface
     */
    private $translator;


    /**
     * @param GluggiFinder        $finder
     * @param RouterInterface     $router
     * @param TranslatorInterface $translator
     */
    public function __construct (GluggiFinder $finder, RouterInterface $router, TranslatorInterface $translator)
    {
        $this->finder = $finder;
        $this->router = $router;
        $this->translator = $translator;
    }

    public function serialize (?Component $activeComponent) : array
    {
        $result = [];

        foreach ($this->finder->getAllTypes() as $type)
        {
            $components = $type->getStandaloneComponents();
            $serializedComponents = [];

            foreach ($components as $component)
            {
                if ($component->isHidden())
                {
                    continue;
                }

                $serializedComponents[] = [
                    "name" => $component->getName(),
                    "url" => $this->router->generate("gluggi.component", [
                        "type" => $type->getKey(),
                        "key" => $component->getKey(),
                    ]),
                    "type" => $type->getKey(),
                    "active" => $component === $activeComponent,
                ];
            }

            if (!empty($serializedComponents))
            {
                $result[] = [
                    "title" => $type->getName(),
                    "components" => $serializedComponents,
                ];
            }
        }

        return $result;
    }
}

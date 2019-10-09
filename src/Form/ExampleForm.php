<?php declare(strict_types=1);

namespace Becklyn\GluggiBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormInterface;

class ExampleForm extends AbstractType
{
    /**
     * @inheritDoc
     */
    public function buildForm (FormBuilderInterface $builder, array $options)
    {
        $choices = [
            "Value 1" => 1,
            "Value 2" => 2,
            "Value 3" => 3,
        ];

        $this
            ->addField($builder, "text", TextType::class, [
                "label" => "Text Single Line",
            ], "Some Value")
            ->addField($builder, "textarea", TextareaType::class, [
                "label" => "Text Multi Line",
            ])
            ->addField($builder, "date", DateType::class, [
                "label" => "Date",
                "widget" => "single_text",
            ])
            ->addField($builder, "email", EmailType::class, [
                "label" => "E-Mail",
            ])
            ->addField($builder, "checkbox", CheckboxType::class, [
                "label" => "Single Checkbox",
            ], true)
            ->addField($builder, "choice_collapsed_single", ChoiceType::class, [
                "label" => "Dropdown Single Select",
                "choices" => $choices,
                "expanded" => false,
                "multiple" => false,
            ], 3)
            ->addField($builder, "choice_collapsed_multi", ChoiceType::class, [
                "label" => "Dropdown Multi Select",
                "choices" => $choices,
                "expanded" => false,
                "multiple" => true,
            ], [2, 3])
            ->addField($builder, "choice_expanded_single", ChoiceType::class, [
                "label" => "Checkbox List",
                "choices" => $choices,
                "expanded" => true,
                "multiple" => false,
            ], 3)
            ->addField($builder, "choice_expanded_multi", ChoiceType::class, [
                "label" => "Radio List",
                "choices" => $choices,
                "expanded" => true,
                "multiple" => true,
            ], [2, 3])
        ;
    }


    /**
     * Adds a field with all variations to the form
     *
     * @param FormBuilderInterface $builder
     * @param string               $name    the base name of the field
     * @param string               $type    the type
     * @param array                $options the options for the field of this type (will be dynamically extended)
     * @param mixed                $data    if the field is not empty, which data should be present?
     *
     * @return $this
     */
    private function addField (
        FormBuilderInterface $builder,
        string $name,
        string $type,
        array $options,
        $data = null
    ) : self
    {
        $builder
            ->add("{$name}_default", $type, \array_replace_recursive(
                [
                    "data" => $data,
                ],
                $options
            ))
            ->add("{$name}_help", $type, \array_replace_recursive(
                [
                    "label" => "{$options['label']} + Help",
                    "attr" => [
                        "placeholder" => "Placeholder",
                    ],
                    "help" => "This is a very helpful help text.",
                ],
                $options
            ))
            ->add("{$name}_error", $type, \array_replace_recursive(
                [
                    "data" => $data,
                ],
                $options,
                [
                    "label" => "{$options['label']} + Error",
                ]
            ))
            ->add("{$name}_help_error", $type, \array_replace_recursive(
                [
                    "data" => $data,
                    "attr" => [
                        "placeholder" => "Placeholder",
                    ],
                    "help" => "This is a very helpful help text.",
                ],
                $options,
                [
                    "label" => "{$options['label']} + Error",
                ]
            ));

        return $this;
    }


    /**
     * @param FormInterface $form
     */
    public static function addErrors (FormInterface $form) : void
    {
        /** @var FormInterface $field */
        foreach ($form as $field)
        {
            if (\strpos($field->getName(), "_error"))
            {
                $field
                    ->addError(new FormError("This field has an error."))
                    ->addError(new FormError("This field has a second error."));
            }
        }
    }
}

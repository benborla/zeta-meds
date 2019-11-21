<?php
declare(strict_types=1);

namespace App\Form\Extension;

use Sylius\Bundle\CoreBundle\Form\Type\Customer\CustomerRegistrationType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\FormBuilderInterface;

class CustomerRegistrationTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // Adding new fields works just like in the parent form type.
            ->add('birthday', BirthdayType::class, [
                'required' => false,
                'widget' => 'single_text',
                'label' => 'sylius.form.customer.birthday',
                'format' => 'yyyy-MM-dd',
            ]);
    }
    public static function getExtendedTypes(): iterable
    {
        return [CustomerRegistrationType::class];
    }
}

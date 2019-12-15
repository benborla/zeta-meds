<?php
declare(strict_types=1);

namespace App\Controller;

use Swift_Mailer;
use Swift_Message;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Validation;

class PageController extends AbstractController
{
    public function termsAndConditions()
    {
        return $this->render('@SyliusShop/Page/terms-and-conditions.html.twig');
    }

    public function aboutUs()
    {
        return $this->render('@SyliusShop/Page/about-us.html.twig');
    }

    public function contactUs(Request $request, Swift_Mailer $mailer)
    {
        $payload = $request->request->all()['sylius_contact'] ?? null;
        unset($payload['_token']);

        if (is_null($payload)) {
            return new JsonResponse(['message' => 'Unable to send message'], 500);
        }

        $validator = Validation::createValidator();
        $groups = new Assert\GroupSequence(['Default', 'custom']);
        $constraint = new Assert\Collection([
            'email' => [
                new Assert\NotBlank(),
                new Assert\Email(),
            ],
            'name' => [
                new Assert\NotBlank()
            ],
            'message' => new Assert\NotBlank(),
        ]);

        $violations = $validator->validate($payload, $constraint, $groups);

        if (count($violations)) {
            $errors = [];
            foreach ($violations as $idx => $violation) {
                $field = preg_replace('/\[|\]/', "", $violation->getPropertyPath());
                $errors[] = ucfirst($field) . ' - ' . $violation->getMessage();
            }
            return new JsonResponse(['message' => 'Unable to send message', 'errors' => $errors], 422);
        }

        $message = (new \Swift_Message("Contact Request from $payload[email]"))
            ->setFrom('info@zetameds.com')
            ->setTo($payload['email'])
            ->setBody(
                $this->renderView(
                    '@SyliusShop/Email/contactRequest.html.twig',
                    ['data' => $payload]
                ),
                'text/html'
            );

        $mailer->send($message);

        return new JsonResponse(['message' => 'Message has been sent!', 'errors' => []]);
    }

    public function faq()
    {
        $faq = $this->getParameter('faq');
        return $this->render('@SyliusShop/Page/faq.html.twig', ['faq' => $faq]);
    }

}

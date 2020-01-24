<?php

declare(strict_types=1);

namespace App\EventListener;

use Sylius\Bundle\ResourceBundle\Event\ResourceControllerEvent;
use Symfony\Component\HttpFoundation\RequestStack;
use Webmozart\Assert\Assert;

final class SelectPaymentListener
{
    /** @var RequestStack */
    private $requestStack;

    /** @var RequestMatcherInterface */
    private $requestMatcher;

    public function __construct(
        RequestStack $requestStack
    ) {
        $this->requestStack = $requestStack;
    }

    public function __invoke(ResourceControllerEvent $resourceControllerEvent): void
    {
        $request = $this->requestStack->getCurrentRequest();
        dump($request);
        die;
    }
}

<?php

declare(strict_types=1);

namespace App\Payum;

use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayFactory;

final class AuthorizeNetPaymentGatewayFactory extends GatewayFactory
{
    protected function populateConfig(ArrayObject $config): void
    {
        $config->defaults([
            'payum.factory_name' => 'authorize_net',
            'payum.factory_title' => 'Authorize.net Payment',
        ]);
    }
}

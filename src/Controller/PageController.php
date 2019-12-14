<?php
declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PageController extends AbstractController
{
    public function termsAndConditions()
    {
        return $this->render('@SyliusShop/Page/terms-and-conditions.html.twig');
    }

}

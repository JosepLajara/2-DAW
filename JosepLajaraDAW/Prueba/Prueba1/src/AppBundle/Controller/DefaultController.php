<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        return $this->render('Pag1.html.twig');
    }
    /**
     * @Route("/tienda", name="tienda")
     */
    public function Pag2(Request $request)
    {
        return $this->render('Pag2.html.twig');
    }
}

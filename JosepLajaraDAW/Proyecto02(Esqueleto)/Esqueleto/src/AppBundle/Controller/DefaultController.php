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
        // replace this example code with whatever you need
        return $this->render('Pag1.html.twig');
    }

    /**
     * @Route("/pagina/", name="pag_tienda")
     */
    public function Pag2(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('Pag2.html.twig');
    }
}

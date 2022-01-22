<?php 
namespace Controllers;

use Model\ActiveRecord;
use MVC\Router;

class clienteControllers extends ActiveRecord{
    public static function cliente(Router $router){
        
        $router->render('auth/cliente', [

        ]);
    }
}
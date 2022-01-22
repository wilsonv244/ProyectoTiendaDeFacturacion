<?php
namespace Controllers;
use Model\ActiveRecord;
use MVC\Router;

class homeControllers extends ActiveRecord{
    public static function home(Router $router){
        $router->render('pages/home', [

        ]);
    }
    public static function crearBoleta(Router $router){
        $router->render('pages/crearBoleta',[
            
        ]);
    }
}

?>
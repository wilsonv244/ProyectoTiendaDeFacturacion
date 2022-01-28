<?php 
namespace Controllers;

use Model\ActiveRecord;
use Model\cliente;
use MVC\Router;

class clienteControllers extends ActiveRecord{
    public static function cliente(Router $router){
        $i = 1;
        $cliente = new cliente();
        $cliente = $cliente->all();
        // debuguear($cliente);
        // if ($_SERVER['REQUEST_METHOD']==='POST') {

        // }
        
        $router->render('auth/cliente', [
            'cliente'=>$cliente,
            'i'=>$i
        ]);
    }
    public static function clienteCrear(Router $router){
        $cliente = new cliente();
        $alertas=[];
        if ($_SERVER['REQUEST_METHOD']==='POST') {
            $cliente=new cliente($_POST);
            // debuguear($cliente);

            //alertas
            $alertas = $cliente->alertas();
            // debuguear($alertas);
            //condicion Ruc
            $ruc = $cliente->ruc;
            $traer = $cliente->traerDato('ruc', $ruc);
            // debuguear($traer);
            if ($traer) {
                self::setAlerta('error', 'El Cliente y el Ruc ya existe en la base de datos');
            }else{
                $cliente->guardar();
                header('Location: /clientes');
            }
            $alertas = $cliente::getAlertas();
            // debuguear($alertas);
        }
        $router->render('pages/registrarCliente', [
            'alertas'=>$alertas,
            'cliente'=>$cliente
        ]);
    }
}
<?php
namespace Controllers;

use Model\ActiveRecord;
use Model\boleta;
use Model\BoletoProducto;
use Model\cliente;
use Model\Producto;
use MVC\Router;

class apiControllers extends ActiveRecord{
    public static function crearApi(Router $router){
        $cliente = new cliente();
        $datos = $cliente::all();
        echo json_encode($datos);
    }
    public static function crearApiProducto(Router $router){
        $producto = new Producto();
        $datosP = $producto::all();
        echo json_encode($datosP);
    }
    public static function enviarDatoP(){
        $registrar = new boleta($_POST);
        $respuesta = $registrar->crear();
        $id = $respuesta['id'];            
        $idServicio  = explode(",", $_POST['id_producto']);
        echo json_encode($idServicio);
        foreach ($idServicio as $servicio){
            $args=[
                'precio_total'=>'',
                'cantidadp'=>'5',
                'id_boleta'=>$id,
                'id_producto'=>$servicio
            ];
            $boletaProducto = new BoletoProducto($args);
            $respuest = $boletaProducto->crear();
        }
        echo json_encode($respuest);
        // echo json_encode([
        //     'respuesta'=>$respuesta
        // ]);
    }
}
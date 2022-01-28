<?php 
namespace Controllers;

use Model\ActiveRecord;
use Model\Producto;
use MVC\Router;

class productos extends ActiveRecord{
    public static function producto(Router $router){
        $i = 1;
        $producto = new Producto;
        $productos = $producto->all();
        
        $router->render('pages/productos', [
            'productos'=>$productos,
            'i'=>$i
            // 'valor'=>$valor
        ]);
    }
    public static function productoCrear(Router $router){
        $i=1;
        $producto = new Producto;
        $alertas=[];
        if ($_SERVER['REQUEST_METHOD']==='POST') {
            $producto->sincronizar($_POST);
            $alertas = $producto->alertas();
            // debuguear($alertas);
            if (empty($alertas)) {
                $guardar = $producto->guardar();
                // debuguear($guardar);
                if ($guardar['resultado']) {
                    header('Location: /productos');
                }
            }
            // self::$alertas();
            // $sanitizar = $producto->sanitizarAtributos();
        }
        $router->render('pages/crearProducto', [
            'producto'=>$producto,
            'i'=>$i,
            'alertas'=>$alertas
    
        ]);
    }
    public static function eliminarProducto(Router $router){
        $id = $_POST['id'];
        
        if ($_SERVER['REQUEST_METHOD']==='POST') {
            $producto = new Producto;
            $id = $producto->find($id);
            $id= $producto->sincronizar($id);
            // debuguear($id);
            $id = $producto->eliminar();
            header('Location: /productos?mensaje=3');

        }
        $getDates = $_POST;
        debuguear($getDates);
    }
    public static function update(Router $router){
        $get = $_GET['id'];
        $producto=new Producto();
        $producto = $producto->find($get);
        $alertas=[];
        if ($_SERVER['REQUEST_METHOD']==='POST'){
            $producto->sincronizar($_POST);
            // debuguear($producto);
            $alertas = $producto->alertas();
            if (empty($alertas)) {
                $producto = $producto->actualizar();
                header('Location: /productos?mensaje=2');
            }
        }
        // debuguear($producto);

        $router->render('pages/actualizar', [
            'producto'=>$producto
        ]);
    }
    
}
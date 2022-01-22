<?php 
namespace Model;
class BoletoProducto extends ActiveRecord{
    public static $tabla = 'boletaproducto';
    public static $columnasDB = ['id', 'precio_total', 'cantidadp', 'id_boleta', 'id_producto'];
    public $id;
    public $precio_total;
    public $cantidadp;
    public $id_boleta;
    public $id_producto;
    public function __construct($args=[])
    {
        $this->id=$args['id']??null;
        $this->precio_total=$args['precio_total']??null;
        $this->cantidadp=$args['cantidadp']??'';
        $this->id_boleta=$args['id_boleta']??'';
        $this->id_producto=$args['id_producto']??'';
    }
}
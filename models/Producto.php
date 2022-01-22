<?php
namespace Model;
class Producto extends ActiveRecord{
    public static $tabla = "productos";
    public static $columnasDB = ['id', 'nombre', 'codigo', 'precio_venta','precio_compra', 'cantidad'];
    public $id;
    public $nombre;
    public $codigo;
    public $precio_venta;
    public $precio_compra;
    public $cantidad;
    public function __construct($argc = [])
    {
        $this->id=$argc['id']??null;
        $this->nombre=$argc['nombre']??'';
        $this->codigo=$argc['codigo']??'';
        $this->codigo=$argc['codigo']??'';
        $this->precio_venta=$argc['precio_venta']??'';
        $this->precio_compra=$argc['precio_compra']??'';
        $this->cantidad=$argc['cantidad']??'';
    }

}
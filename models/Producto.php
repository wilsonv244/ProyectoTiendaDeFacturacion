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
        $this->precio_venta=$argc['precio_venta']??'';
        $this->precio_compra=$argc['precio_compra']??'';
        $this->cantidad=$argc['cantidad']??'';
    }
    public function alertas(){
        if (!$this->nombre) {
            self::$alertas['error'][]='Tiene que poner un nombre';
        }
        if (!$this->precio_compra) {
            self::$alertas['error'][]='Tiene que poner un valor de precio';
        }
        if (!$this->precio_venta) {
            self::$alertas['error'][]='Tiene que poner un valor de ventas';
        }
        if (!$this->cantidad) {
            self::$alertas['error'][]='Tiene que poner un valor de cantidad';
        }
        if (!$this->codigo) {
            self::$alertas['error'][]='Tiene que poner un codigo para el producto';
        }
        return self::$alertas;
    }

}
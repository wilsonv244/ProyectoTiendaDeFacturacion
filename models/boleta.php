<?php
namespace Model;
class boleta extends ActiveRecord{
    public static $tabla = 'boleta';
    public static $columnasDB =['id', 'fecha', 'idcliente'];
    public $id;
    public $fecha;
    public $idcliente;
    public function __construct($args=[])
    {
        $this->id = $args['id']??null;
        $this->fecha = $args['fecha']??'';
        $this->idcliente = $args['idcliente']??'';
    }
}
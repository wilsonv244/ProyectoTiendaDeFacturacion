<?php 
namespace Model;
class cliente extends ActiveRecord{
    public static $tabla = "cliente";
    public static $columnasDB = ['id', 'ruc', 'nombre', 'apellido', 'direccion', 'numero','correo'];
    public $id;
    public $ruc;
    public $nombre;
    public $apellido;
    public $direccion;
    public $numero;
    public $correo;
    public function __construct($argc=[])
    {
        $this->id = $argc['id']??null;
        $this->ruc = $argc['ruc']??'';
        $this->nombre = $argc['nombre']??'';
        $this->apellido = $argc['apellido']??'';
        $this->direccion = $argc['direccion']??'';
        $this->numero = $argc['numero']??'';
        $this->correo = $argc['correo']??'';
    }
}
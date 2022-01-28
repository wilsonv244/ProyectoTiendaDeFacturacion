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
    public function alertas(){
        if (!$this->ruc) {
             self::$alertas['error'][]='Tiene que poner un ruc';
        }
        if (!$this->nombre) {
             self::$alertas['error'][]='Tiene que poner un Nombre';
        }
        if (!$this->apellido) {
             self::$alertas['error'][]='Tiene que poner un Apellido';
        }
        if (!$this->direccion) {
             self::$alertas['error'][]='Tiene que poner una Direccion';
        }
        if (!$this->numero) {
             self::$alertas['error'][]='Tiene que poner un Numero';
        }
        if (!$this->correo) {
             self::$alertas['error'][]='Tiene que poner un Correo';
        }
        return self::$alertas;
    }
}
<?php
namespace Model;
class Login extends ActiveRecord{
    // public static $alertas=[];
    protected static $tabla = "login";
    protected static $columnasDB= ['id', 'nombre', 'apellido', 'correo','contraseña', 'admin', 'confirmado'];
    public $id;
    public $nombre;
    public $apellido;
    public $correo;
    public $contraseña;
    public $admin;
    public $confirmado;
    public function __construct($args = [])
    {
        $this->id = $args['id']?? null;
        $this->nombre = $args['nombre']?? '';
        $this->apellido = $args['apellido']?? '';
        $this->correo = $args['correo']?? '';
        $this->contraseña = $args['contraseña']?? '';
        $this->admin = $args['admin']?? '0';
        $this->confirmado = $args['confirmado']?? '';
    }
    public function alertas(){
        if (!$this->correo) {
            self::$alertas['error'][]= 'Ingrese un correo';
        }
        if (!$this->contraseña) {
            self::$alertas['error'][] = 'Ingrese una contraseña';
            # code...
        }else {
            if (strlen($this->contraseña)<8) {
                self::$alertas['error'][]='Tiene que poner una contraseña mayor de 8 digitos';
            }
        }
        return self::$alertas;
    }
    public function alertasRegistro(){
        if (!$this->nombre) {
            self::$alertas['error'][]= 'Ingrese un nombre';
        }
        if (!$this->apellido) {
            self::$alertas['error'][]= 'Ingrese un apellido';
        }
        if (!$this->correo) {
            self::$alertas['error'][]= 'Ingrese un correo';
        }
        if (!$this->contraseña) {
            self::$alertas['error'][] = 'Ingrese una contraseña';
            # code...
        }else {
            if (strlen($this->contraseña)<8) {
                self::$alertas['error'][]='Tiene que poner una contraseña mayor de 8 digitos';
            }
        }
        return self::$alertas;
    }
    public function hashPassword(){
        $this->contraseña = password_hash($this->contraseña,PASSWORD_BCRYPT);
    }
    public function hashToken(){
        $this->confirmado = uniqid();
    }
    public function verificarContraseña($contraseña){
        $resultado = password_verify($this->contraseña, $contraseña);
        // debuguear($resultado);
        return $resultado;
    }
    
}

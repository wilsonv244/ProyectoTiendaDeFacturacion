<?php 
namespace Controllers;

use Class\email;
use Model\Login;
use MVC\Router;

class loginControllers{
    public static function login(Router $router){
        $login = new Login();
        $alerta = [];
        if ($_SERVER["REQUEST_METHOD"]==="POST") {
            $login = new login($_POST);
            // debuguear($login);
            $alerta = $login->alertas();
            $correo = $login->correo;
            $contraseña = $login->contraseña;

            // debuguear($contraseña);
            if (empty($alerta)) {
                $get = $login->traerDato('correo', $correo);
                $contraseña = $get->contraseña??null;
                // debuguear($contraseña);
                $verifyPassword = $login->verificarContraseña($contraseña);
                if (!$get) {
                    $alerta = login::setAlerta('error', 'El correo no esta registrado');
                }else{
                    if (!$verifyPassword) {
                        $alerta = login::setAlerta('error', 'La contraseña es Incorrecta');
                    }else{
                        $_SESSION['id'] = $get->id;
                        $_SESSION['nombre'] = $get->nombre. ' '. $get->apellido;
                        $_SESSION['email'] = $get->correo;
                        $_SESSION['login'] = true;
                        header('Location: /home');
                    }
                }
            }
            $alerta = login::getAlertas();
        }
        $router->render('auth/login',[
            'alertas' => $alerta,
            'login' => $login
        ]);
    }
    public static function registro(Router $router){
        $registro = new Login();
        $alerta= [];
        if ($_SERVER["REQUEST_METHOD"]==="POST") {
            $registro = new login($_POST);
            $registro->hashPassword(); 
            $registro->hashToken();
            $alerta =$registro->alertasRegistro();
            if (empty($alerta)) {
                $token = new email($registro->nombre, $registro->correo, $registro->confirmado);
                $guardar = $registro->guardar();
                if($guardar['resultado']){
                    $token->enviarConfirmacion();
                    header('Location: /');
                }
            }
            // debuguear($login);
        }
        $router->render('auth/registro',[
            'registro' =>$registro,
            'alertas' =>$alerta
        ]);
    }
    public static function confirmarCuenta(Router $router){
        $get = $_GET['token'];
        $buscar = new login();
        $buscar = login::traerDato('confirmado', $get);
        if (!$buscar) {
            header('Location: /');
        }else{
            $buscar->confirmado = '1';
            $actualizar =$buscar->actualizar();
        }
        $router->render('auth/confirmarCuenta',[

        ]);
    }
}
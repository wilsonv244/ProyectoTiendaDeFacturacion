<?php
namespace Class;
use PHPMailer\PHPMailer\PHPMailer;

class email{
    public $correo;
    public $nombre;
    public $confirmado;
    public function __construct($nombre, $correo, $confirmado){
        $this->correo = $correo;
        $this->nombre = $nombre;
        $this->confirmado = $confirmado;
    }
    public function enviarConfirmacion(){
        $mail = new PHPMailer(); 
        $mail->isSMTP();
        $mail->Host = 'smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 2525;
        $mail->Username = 'a8761ead51a3a8';
        $mail->Password = 'd0e957628fa6d1';

        $mail->setFrom('WVCAppsalon@correo.com', 'WVCappsalon');
        $mail->addAddress('WVCAppsalon@correo.com', 'WVCappsalon.com');

        //Contenido HTML;
        $mail->CharSet = "UTF8";
        $mail->isHTML(true);
        $mail->Subject= "Correo de confirmacion";
        $contenido = "<html> ";
        $contenido .= "<p> hola <strong>". $this->nombre. "</strong> Te acabas de Registrar a APPSALON <p> <br>";
        $contenido .="<p>Para confirmar tu cuenta haz click <a href='http://localhost:3000/confirmarCuenta?token=$this->confirmado'>Aquí</a> <p>";
        $contenido .= "<p>En caso no hayas solicitado esta confirmacion <strong> puedes ignorar el mensaje</strong></p>";
        $contenido .= "</html> ";
        $mail->Body = $contenido;
        if($mail->send()){
            // debuguear('envidado Correctamente');

        }
        
    }
    public function enviarMensajePass(){
        $mail = new PHPMailer(); 
        $mail->isSMTP();
        $mail->Host = 'smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 2525;
        $mail->Username = 'a8761ead51a3a8';
        $mail->Password = 'd0e957628fa6d1';
    
        $mail->setFrom('WVCAppsalon@correo.com', 'WVCappsalon');
        $mail->addAddress('WVCAppsalon@correo.com', 'WVCappsalon.com');
    
        //Contenido HTML;
        $mail->CharSet = "UTF8";
        $mail->isHTML(true);
        $mail->Subject= "Correo de Restablecimiento de Contraseña";
        $contenido = "<html> ";
        $contenido .= "<p> hola <strong>". $this->nombre. "</strong> Te acabas de Registrar a APPSALON <p> <br>";
        $contenido .="<p>Para reestablecer tu contraseña haga clic <a href='http://localhost:3000/recuperar?confirmado=$this->confirmado'>Aquí</a> <p>";
        $contenido .= "<p>En caso no hayas solicitado esta confirmacion <strong> puedes ignorar el mensaje</strong></p>";
        $contenido .= "</html> ";
        $mail->Body = $contenido;
        if($mail->send()){
            // debuguear('envidado Correctamente');
    
        }
        
    }
}

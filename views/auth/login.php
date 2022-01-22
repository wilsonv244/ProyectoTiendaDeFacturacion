<div class="fondoLogin">
    <div class="form">
        <div class="bglila"></div>
        <div class="datos">
            <?php include_once __DIR__ . '/../templates/alertas.php'?>
            <h2>Ingrese sus Datos</h2>
            <i class="fas fa-laptop-code" href="#"></i>
            <form  method="POST">
                <div class="login">
                    <input type="text" id="correo" name="correo" placeholder="Tu Correo" value= "<?php echo $login->correo;?>" />    
                    <input type="password" id="contraseña" name="contraseña" placeholder="Tu contraseña" >
                    <button type="submit">INGRESAR</button>
                </div>
    
            </form>
            <div class="olvidarUsuario">
                <a href="#">Olvidaste tu contraseña</a>
                <p>No tienes una cuanta <a href="/registrate"> <span> Registrate</span></a></p>
            </div>
        </div>
    </div>
</div>
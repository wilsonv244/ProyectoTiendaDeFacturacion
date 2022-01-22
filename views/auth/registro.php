<div class="fondoRegistro">
    <div class="form">
        <div class="bglila"></div>
        <div class="datos">
            <?php include_once __DIR__ . '/../templates/alertas.php'?>
            <h2>Registrate</h2>
            <i class="fas fa-laptop-code" href="#"></i>
            <form  method="POST" action="/registrate">
                <div class="login">
                    <input type="text" id="nombre" name="nombre" placeholder="Tu Nombre" value= "<?php echo $registro->nombre;  ?>" />    
                    <input type="text" id="apellido" name="apellido" placeholder="Tu Apellido" value= "<?php echo $registro->apellido;  ?>" />    
                    <input type="email" id="correo" name="correo" placeholder="Tu Correo" value= "<?php echo $registro->correo;?>" />    
                    <input type="password" id="contraseña" name="contraseña" placeholder="Tu contraseña" >
                    <button type="submit">REGISTRATE</button>
                </div>
    
            </form>
            <div class="olvidarUsuario">
                <a href="/">Ya tienes una Cuenta</a>
                <!-- <p>No tienes una cuanta <span> Registrate</span></p> -->
            </div>
        </div>
    </div>
</div>
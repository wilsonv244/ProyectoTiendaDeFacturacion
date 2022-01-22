<?php 
    // debuguear($alertas);
    foreach ($alertas as $key => $mensajes):
        foreach ($mensajes as $mensaje):  
        // debuguear($mensaje);?>
        
    <div class="alert">
        <p class="alerta <?php echo $key;?>" id="alerta_exito"><?php echo $mensaje;?></p>
    </div>
    <?php endforeach; ?>
<?php endforeach; ?>

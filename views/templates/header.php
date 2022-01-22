<?php 
    $nombre = $_SESSION['nombre'];
?>
<div class="header">
    <div class="logo">
        <img src="/build/img/pc.webp" alt="png"></img>
        <p><span>Hola <?php echo $nombre; ?></span></p>
    </div>
    <div class="salir">
        <a href="#"> <i class="bi bi-box-arrow-left"></i></a>
    </div>
</div>
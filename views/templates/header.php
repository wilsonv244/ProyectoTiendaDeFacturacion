<?php 
    $nombre = $_SESSION['nombre']??null;
?>
<div class="header">
    <div class="logo">
        <a href="/home"><img src="/build/img/pc.webp" alt="png"> </img></a>
        <p><span>Hola <?php echo $nombre; ?></span></p>
    </div>
    <div class="salir">
        <a href="#"> <i class="bi bi-box-arrow-left"></i></a>
    </div>
</div>
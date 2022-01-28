<div class="contenedor">
<?php include_once __DIR__ . '/../templates/header.php'; ?>
    <h1>Registrar un Producto</h1>
    <?php include_once __DIR__. '/../templates/alertas.php'; ?>
    <form action="/productosCrear" method="POST" id="formulario">
        <?php require_once __DIR__.'/../templates/formulario.php' ?>   
        <button type="submit">Registrar Producto</button>

    </form>

</div>
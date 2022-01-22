
<?php 
    if (!$_SESSION['login']) {
        header('Location: /');
    }
?>
<div class="crear">
    <div class="contenedor">
        <?php include_once __DIR__ . '/../templates/header.php'; ?>
        <h3>Principales funciones de Quesito WILSON</h3>
        <div class="funciones">
            <div class="grid">
                <div class="itemGrid crearBoleta">
                    <a href="/crearBoleta">Crear Boleta</a>
                </div>
                <div class="itemGrid verReportes">
                    <a>Ver Reporte</a>
                </div>
                <div class="itemGrid productos">
                    <a>Ver Producto</a>
                </div>
                <div class="itemGrid cliente">
                    <a>Ver Clientes</a>
                </div>
            </div>
            
            
        </div>
    </div>

</div>
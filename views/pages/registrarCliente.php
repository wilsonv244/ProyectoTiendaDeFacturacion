<div class="contenedor">
<?php require_once __DIR__ . '/../templates/header.php'  ?>
    <h1>Registrar Nuevo Cliente</h1>

<?php require_once __DIR__ . '/../templates/alertas.php'  ?>
    <form action="/cliente/crear" method="POST">
    <div class="i-personal">
            <div class="bg-black"></div>
            <div class="datoC">
                <p>Seleccionar Cliente</p>
                <div class="datosCliente">
                    <div class="dato">
                        <label for="titulo">Ruc</label>
                        <input type="text" name="ruc" id="buscarRuc" placeholder="Inserte Ruc" value=" <?php echo $cliente->ruc; ?>" required>
                    </div>
                    <div class="dato">
                        <label for="precio">Nombre del Cliente</label>
                        <input type="disable" id="nombre" data-id="nombre-cliente" name="nombre" placeholder="Inserte Precio" value="<?php echo $cliente->nombre; ?>" required>
                    </div>
                </div>
                <div class="dato">
                        <label for="apellido">Apellido Del Cliente</label>
                        <input type="text" name="apellido" id="buscarRuc" placeholder="Inserte un Apellido" value="<?php echo $cliente->apellido; ?>" required>
                    </div>
                
                <div class="datosCliente">
                    <div class="dato">
                        <label for="descripcion">Direccion</label>
                        <input type="text" name="direccion" id="direccion-cliente" value="<?php echo $cliente->direccion; ?>" placeholder="Direccion"/>
                    </div>
                    <div class="dato">
                        <label for="descripcion">Numero Celular</label>
                        <input type="text" name="numero" id="celular-cliente" value="<?php echo $cliente->numero; ?>" placeholder="Numero de Celular"/>
                    </div>
                </div>
                <div class="dato">
                    <label for="descripcion">Correo</label>
                    <input type="email" name="correo" id="celular-cliente" value="<?php echo $cliente->correo; ?>" placeholder="Numero de Celular"/>
                </div>
            </div>
        </div>
        <button type="submit">Agregar Cliente</button>
    </form>

</div>
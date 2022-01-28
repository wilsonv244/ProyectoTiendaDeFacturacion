<?php 
    if (!$_SESSION['login']) {
        header('Location: /');
    }
?>
<?php $script='<script src="build/js/app.js"></script>'; ?>
<div class="contenedor">
    <?php include_once __DIR__ . '/../templates/header.php'; ?>
    <h1>Crear Boleta</h1>
    <form action="#" method="POST" id="formulario">
        <div class="i-personal">
            <div class="bg-black"></div>
            <div class="datoC">
                <p>Seleccionar Cliente</p>
                <div class="cliente">
                    <div class="dato">
                        <label for="titulo">Ruc</label>
                        <input type="text" name="propiedad[titulo]" id="buscarRuc" placeholder="Inserte Ruc" value="" required>
                    </div>
                    <button id="aC">Agregar Cliente</button>
                </div>

                <div class="dato">
                    <label for="precio">Nombre del Cliente</label>
                    <input type="disable" id="nombre-cliente" data-id="nombre-cliente" name="propiedad[precio]" placeholder="Inserte Precio" value="" required>
                </div>
                <div class="datosCliente">
                    <div class="dato">
                        <label for="descripcion">Direccion</label>
                        <input type="text" name="propiedad[descripcion]" id="direccion-cliente" value="" placeholder="Direccion"/>
                    </div>
                    <div class="dato">
                        <label for="descripcion">Numero Celular</label>
                        <input type="text" name="propiedad[descripcion]" id="celular-cliente" value="" placeholder="Numero de Celular"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="i-personal">
            <div class="bg-verde">
    
            </div>
            <div class="datoC">
                <p>Producto</p>
    
                <div class="cliente">
                    <div class="dato">
                        <label for="titulo">Buscar por Código</label>
                        <input type="text" name="propiedad[titulo]" id="buscar-producto" placeholder="Inserte Codigo producto" value=""/>
                    </div>
                    <button id="aP">Agregar Producto</button>
                </div>
                <div class="dato">
                    <label for="precio">Nombre del Producto</label>
                    <input type="disable" id="nombre-producto" name="propiedad[precio]" placeholder="Nombre del Producto" />
                </div>
                <div class="datosCliente">
                    <div class="dato">
                        <label for="descripcion">precio</label>
                        <input type="text" name="propiedad[descripcion]" id="precio-producto" value="" placeholder="Precio del Producto"/>
                    </div>
                    <div class="dato">
                        <label for="descripcion">Cantidad del producto</label>
                        <input type="number" name="propiedad[descripcion]" id="cantidad-producto" placeholder="Cantidad de Producto"/>
                    </div>
                </div>
                <button type="button" id="add-producto">Agregar Producto</button>
            </div>
        </div>
        <div class="i-personal">
            <div class="bg-azul"></div>
            <div class="datoC">
    
                <h1 class="">Resumen de Compra</h1>
                <table class="tabla" id="lista-recibo">
                    <thead class="producto">
                        <tr class="producto_lista">
                            <!-- <th>N°</th> -->
                            <th>Descripcion</th>
                            <th>cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Importe</th>
                        </tr>
                    </thead>
                    <tbody class="addCompras">
                        
                    </tbody>

                </table>
                <!-- <select name="propiedad[vendedorId]" id="vendedorId" class="">
                    <option value="1">--SLECCCIONE UN VENDEDOR--</option>
                    <!-- <?php foreach($vendedor as $vendedores): ?>
                        <?php echo $propiedad->vendedorId === $vendedores->id ?  'selected' : ' ';  ?>
                        <option value="<?php echo sani($vendedores->id);?>"><?php echo sani($vendedores->nombre." ". $vendedores->apellido); ?> </option>
    
                    <?php endforeach; ?> -->
                                                
                <!-- </select>  -->
            </div>
        </div>
        <button id="registrarBoleta" type="button">Registrar Boleta</button>
    </form>
</div>

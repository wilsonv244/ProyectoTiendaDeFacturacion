
<?php $script='<script src="build/js/Newproducto.js"></script>' ?>
<div class="contenedor">
    <?php require_once __DIR__ . '/../templates/header.php'  ?>
    <div class="productos">
        <h1>Productos de la tienda</h1>
        <div class="boton-producto">
            <a href="/productosCrear"><button id="nuevoProducto">Agregar Nuevo Producto</button></a>
        </div>
        <table class="tabla">
            <thead class="producto">
                <tr class="producto_lista">
                    <th>N</th>
                    <th>codigo</th>
                    <th>PRECIO COMPRA</th>
                    <th>PRECIO VENTA</th>
                    <th>STOCK</th>
                    <th>ACCIONES</th>

                </tr>
            </thead>
            <?php foreach($productos as $producto): ?>
            <tr>
                    <td><?php echo $i++ ;?></td>
                    <td><?php echo $producto->nombre;?></td>
                    <td><?php echo $producto->precio_venta,' $';?></td>
                    <td><?php echo $producto->precio_compra,' $';?></td>
                    <td><?php echo $producto->cantidad;?></td>
                    <td>
                        <form method="POST" class="dato" action="./productos">
                            <input type="hidden" value="<?php echo $producto->id;?>" name="id">
                            <input class="boton-rojo" type="submit" href="#" class="btn boton-rojo" value="ELIMINAR">
                        </form>
                        <a href="/productos/actualizar?id=<?php echo $producto->id; ?>" 
                        class="boton-naranja" >ACTUALIZAR</a>
                        
                    </td>
                </tr>
            <?php endforeach; ?>
        </table>
        
    </div>
</div>
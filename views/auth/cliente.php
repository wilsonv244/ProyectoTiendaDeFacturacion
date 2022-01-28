<div class="contenedor">
<?php require_once __DIR__ . '/../templates/header.php'  ?>
    <div class="productos">
        <h1>Gestionar Clientes</h1>
        <div class="boton-producto">
            <a href="/cliente/crear"><button id="nuevoProducto">Agregar Nuevo Cliente</button></a>
        </div>
        <table class="tabla">
            <thead class="producto">
                <tr class="producto_lista">
                    <th>N</th>
                    <th>Ruc</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Direccion</th>
                    <th>Numero</th>
                    <th>Correo</th>
                    <th>Acciones</th>

                </tr>
            </thead>
            <?php foreach($cliente as $cl): ?>
            <tr>
                    <td><?php echo $i++ ;?></td>
                    <td><?php echo $cl->ruc ;?></td>
                    <td><?php echo $cl->nombre;?></td>
                    <td><?php echo $cl->apellido;?></td>
                    <td><?php echo $cl->direccion;?></td>
                    <td><?php echo $cl->numero;?></td>
                    <td><?php echo $cl->correo;?></td>
                    <td>
                        <form method="POST" class="dato" action="./productos">
                            <input type="hidden" value="<?php echo $cl->id;?>" name="id">
                            <input class="boton-rojo" type="submit" href="#" class="btn boton-rojo" value="ELIMINAR">
                        </form>
                        <a href="/productos/actualizar?id=<?php echo $cl->id; ?>" 
                        class="boton-naranja" >ACTUALIZAR</a>
                        
                    </td>
                </tr>
            <?php endforeach; ?>
        </table>
        
    </div>
</div>
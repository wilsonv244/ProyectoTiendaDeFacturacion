<div class="i-personal">
                <div class="bg-black"></div>
                <div class="datoC">
                    <p>Seleccionar Cliente</p>
                    <div class="cliente">
                        <div class="dato">
                            <label for="titulo">Nombre de Producto</label>
                            <input type="text" name="nombre" id="buscarRuc" placeholder="Inserte un nombre" value="<?php echo $producto->nombre; ?> " required>
                        </div>
                    </div>
                    <div class="datosCliente">
                        <div class="dato">
                            <label for="precio_compra">Precio Compra</label>
                            <input type="number" name="precio_compra" id="precio_compra" value="<?php echo $producto->precio_compra; ?>" placeholder="Precio Compra"/>
                        </div>
                        <div class="dato">
                            <label for="descripcion">Precio Venta</label>
                            <input type="number" name="precio_venta" id="celular-cliente" value="<?php echo $producto->precio_venta; ?>" placeholder="Numero de Celular"/>
                        </div>
                    </div>
                    <div class="datosCliente">
                        <div class="dato">
                            <label for="descripcion">Cantidad</label>
                            <input type="number" name="cantidad" value="<?php echo $producto->cantidad; ?>" placeholder="Cantidad de Producto"/>
                        </div>
                        <div class="dato">
                            <label for="codigo">Codigo</label>
                            <input type="text" name="codigo" id="celular-cliente" value="<?php echo $producto->codigo; ?>" placeholder="Codigo del producto"/>
                        </div>
                    </div>
    
                </div>
</div>
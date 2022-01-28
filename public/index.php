<?php 

require_once __DIR__ . '/../includes/app.php';

use Controllers\apiControllers;
use Controllers\clienteControllers;
use Controllers\homeControllers;
use Controllers\loginControllers;
use Controllers\productos;
use MVC\Router;

$router = new Router();
//LOGIN
$router->get('/', [loginControllers::class,'login']);
$router->post('/', [loginControllers::class,'login']);
//REGISTRARSE
$router->get('/registrate', [loginControllers::class,'registro']);
$router->post('/registrate', [loginControllers::class,'registro']);

$router->get('/home', [homeControllers::class,'home']);
//CREAR BOLETA
$router->get('/crearBoleta', [homeControllers::class,'crearBoleta']);
$router->post('/crearBoleta', [homeControllers::class,'crearBoleta']);

$router->get('/cliente', [clienteControllers::class,'cliente']);
$router->post('/cliente', [clienteControllers::class,'cliente']);

$router->get('/confirmarCuenta', [loginControllers::class,'confirmarCuenta']);

//Obtener Datos 
$router->get('/api/datos', [apiControllers::class,'crearApi']);
$router->get('/api/datosProducto', [apiControllers::class,'crearApiProducto']);

//Enviar los Productos
$router->post('/api/enviarDatos', [apiControllers::class,'enviarDatoP']);

//GestionarProductos
$router->get('/productos', [productos::class,'producto']);
$router->get('/productos/actualizar', [productos::class,'update']);
$router->post('/productos/actualizar', [productos::class,'update']);

//Eliminar Productos
$router->post('/productos', [productos::class,'eliminarProducto']);

//Registrar nuevo elemento
$router->get('/productosCrear', [productos::class,'productoCrear']);
$router->post('/productosCrear', [productos::class,'productoCrear']);

//seccionClienrtes
$router->get('/clientes', [clienteControllers::class,'cliente']);
$router->post('/clientes', [clienteControllers::class,'cliente']);
// cliente crear
$router->get('/cliente/crear', [clienteControllers::class,'clienteCrear']);
$router->post('/cliente/crear', [clienteControllers::class,'clienteCrear']);
//Reporte de Ventas
$router->get('/reporte', [clienteControllers::class,'reporte']);
$router->post('/reporte', [clienteControllers::class,'reporte']);









// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();
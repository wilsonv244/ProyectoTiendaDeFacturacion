<?php 

require_once __DIR__ . '/../includes/app.php';

use Controllers\apiControllers;
use Controllers\clienteControllers;
use Controllers\homeControllers;
use Controllers\loginControllers;
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








// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();
//Constructor que de los datos a enviar.
const facturas ={
    id: '',
    fecha: '',
    hora: '',
    cant: '',
    cantidadP: [],
    mercaderia: []
}
let stuff=[];

//variables
const addProducto = document.querySelector('#add-producto');
const inputCliente = document.querySelector('#buscarRuc');
const inputProducto = document.querySelector('#buscar-producto');
const inputNombre = document.querySelector('#nombre-cliente');
const inputDireccion = document.querySelector('#direccion-cliente');
const inputNumero = document.querySelector('#celular-cliente');
const registrarBoleta = document.querySelector('#registrarBoleta');
const registrarCantidad = document.querySelector('#cantidad-producto');
const listaRecibo = document.querySelector('#lista-recibo');

const allInputs = document.querySelectorAll('.dato input');
//Innputs producto
const inputNombreP = document.querySelector('#nombre-producto');
const inputPrecioP = document.querySelector('#precio-producto');
// const inputCantidadP = document.querySelector('#nombre-producto');
const agregarProducto = document.querySelector('.addCompras');

document.addEventListener('DOMContentLoaded', function () {
    consultarApi();
    consultarApiProducto();
    registrarCant();
    seleccionarInputs();
    desabilitarRegistro();
    desabilitarProduct();
    //Productos
    inputNombreP.addEventListener('blur', validarFormularioProd);
    inputPrecioP.addEventListener('blur', validarFormularioProd);
    registrarCantidad.addEventListener('blur', validarFormularioProd);
    //cliente
    inputCliente.addEventListener('blur', vUsuario);
    inputNombre.addEventListener('blur', vUsuario);
    inputDireccion.addEventListener('blur',vUsuario);
    inputNumero.addEventListener('blur',vUsuario);


})
function seleccionarInputs() {
    allInputs.forEach(e=>function () {
        e.addEventListener('blur', function () {
            console.log('Soy un Input...');
        })
    })
}

//Intento v1.2

let i = 0;
function crearResumenProductos(e) {
    limpiar();
    let datoN = e.slice();
    e.forEach((dato,i)=>{
        // console.log(i);
        const crearTr = document.createElement('TR');
        crearTr.innerHTML=`
        <tr>
        <th>${i}</th>
        <th>${dato.nombre}</th>
        <th>${cantProducto}</th>
        <th>${dato.precio_venta}</th>
        </tr>`;
        agregarProducto.appendChild(crearTr);
    })    
    console.log('xdxdxd');
    // agregarProducto.appendChild(agre)
}
function generarValoresRuc(datos) {
    inputCliente.addEventListener('blur', function (e) {
        const ruc = e.target.value;
        const resultado = datos.filter(dato=>ruc===dato.ruc);
        // console.log(resultado);        
        addDatos(resultado);
    })
}
function addDatos(e) {
    if (e.length>0) {
    
        addCliente(e);
        console.log(e[0].nombre);
        inputNombre.value=e[0].nombre;
        inputDireccion.value=e[0].direccion;
        inputNumero.value=e[0].numero;
    }else{
        inputNombre.value='';
        inputDireccion.value='';
        inputNumero.value='';
        
    }
}
function registrarCant() {
    registrarCantidad.addEventListener('blur', function (e) {
        if (e.target.value==='') {
            // console.log('No tiene ningun valor');
            registrarCantidad.style.border="4px red solid";
        }else{
            cantProducto = e.target.value;
            facturas.cantidadP= [...facturas.cantidadP,...cantProducto];
            registrarBoleta.onclick=getBolet;
        }

    })
}
//Resumen de productos
let datosM=[];
function añadirProductos(product) {
    let {mercaderia}=facturas;
    //AgregarValidacionInputs

    addProducto.addEventListener('click', function (stop) {
        stop.preventDefault();
        inputNombreP.value= '';
        inputPrecioP.value= '';
        registrarCantidad.value= '';
        desabilitarProduct();
        facturas.mercaderia = product.map(e=>e.id);
        console.log(facturas);
        limpiar();
        product.forEach(e=>{
            const crearTr = document.createElement('TR');
            crearTr.innerHTML=`
            <tr>
            <th>${e.nombre}</th>
            <th>${e.precio_venta}</th>
            <th>${e.precio_venta}</th>
            </tr>`;
            agregarProducto.appendChild(crearTr);
        })
        // crearResumenProductos(datosM);
    },{once : true});
    // console.log(facturas.mercaderia);
}

//AñadirCliente
function addCliente(clienteId) {
    //asingnado fecha
    let date = new Date().toISOString().split('T')[0];
    facturas.id=clienteId[0].id;
    facturas.fecha=date;
    facturas.hora=new Date().toLocaleTimeString();
}

function generarValoresProducto(productos) {
    inputProducto.addEventListener('blur', function (e) {
        const codigoP = e.target.value;
        const resultado = productos.filter(producto=>producto.codigo === codigoP);  
        //añadirValores al INput
        addDatosP(resultado);

        stuff=[...stuff,...resultado];
        console.log('CANTIDA DE DATOS'+stuff.length);
        console.log(stuff);
        añadirProductos(stuff);
    })
}
//Agrega los datos a los inputs
function addDatosP(product) {
    console.log(product.length);
    if (product.length>0) {
        // console.log(product);
        inputNombreP.value = product[0].nombre;
        inputPrecioP.value = product[0].precio_venta;
    }else{
        inputNombreP.value= '';
        inputPrecioP.value= '';
    }
}

async function getBolet() {
    
    const {fecha, id, hora, mercaderia,cant, cantidadP} = facturas;
    const id_producto = mercaderia.map(cosas=>cosas);
    const id_cantidad = cantidadP.map(cant=>cant);
    console.log(facturas);
    //return;
    const datoP = new FormData();
    datoP.append('nombre', 'wilson Vargas');
    datoP.append('fecha', fecha);    
    datoP.append('idcliente', id);    
    datoP.append('hora', hora);    
    datoP.append('cantidadp', id_cantidad);    
    datoP.append('id_producto', id_producto);
    console.log([...datoP]);
    // return;
    try {
        const url = 'http://localhost:3000/api/enviarDatos';
        const respuest = await fetch(url, {
            method: 'POST',
            body: datoP
        });
        const resultado = await respuest.json();
        console.log(resultado);
    } catch (error) {
        console.log('Hubo un error de conexion')
    }
}

async function consultarApi() {
    try {
        const url = 'http://localhost:3000/api/datos';
        const getDatos = await fetch(url);
        const resultado = await getDatos.json();
        console.log(resultado);
        generarValoresRuc(resultado);
    } catch (error) {
        console.log('Error a lconsultar la Api');
    }
}
async function consultarApiProducto() {
    try {
        const url = 'http://localhost:3000/api/datosProducto';
        //traer los productos dese 
        const getProducto = await fetch(url);
        //convertir a un Ob Json
        const resultado = await getProducto.json();
        generarValoresProducto(resultado);
        console.log(resultado);
    } catch (error) {
        console.log('hubo un error al traer los productos');
    }
}
function limpiar() {
    while (agregarProducto.firstChild) {
        agregarProducto.removeChild(agregarProducto.firstChild);
    }
}
function validarFormularioProd(e) {
    const datoI=e.target.value;
    if (datoI==='') {
        console.log('falta completar datos del producto')
    }else{
        addProducto.disabled=false;
        addProducto.classList.remove('no-datos');
    }
    console.log(e.target.value);
}
function vUsuario(e) {
    const datoU = e.target.value;
    console.log(datoU);
    if (datoU==='' && stuff.length>1) {
        e.target.classList.add('no-producto')
    }else{
        registrarBoleta.disabled=false;
        registrarBoleta.classList.remove('no-datos');
    }
}
//desabilitarRegistro Boton Input
function desabilitarRegistro() {
    console.log(stuff.length);
    registrarBoleta.disabled=true;
    registrarBoleta.classList.add('no-datos');
}
//Desabilitar Boton Input
function desabilitarProduct() {
    addProducto.disabled=true;
    addProducto.classList.add('no-datos');
}

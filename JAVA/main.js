let nombre = prompt("Ingrese el nombre")

function saludoConNombre(nombre) {
    alert("Bienvenido " + nombre);
}saludoConNombre(nombre);

let preguntaInicial = prompt("Desea realizar una compra grupal o una compra sencilla? Responda: grupal o sencilla")
alert(preguntaInicial)

//uso del condicional 

if (preguntaInicial.toLowerCase() == "grupal") {
    alert("Lo sentimos, por el momento tenemos demasiado pedido.")
} else(preguntaInicial.toLowerCase() == "sencilla")
{   alert("Bienvenid@s a Tortas Artesanales del Tolima. Presione enter y disfrute de la dulce experiencia recorriendo nuestra  reposteria")};

//declaro las variables con nombres de los productos "

let producto1 = "tortachocolate"
console.log(producto1);
let producto2 = "tortazanahoria"
console.log(producto2);
let producto3 = "tortacolores"
console.log(producto3);
let producto4 = "tortaflores"
console.log(producto4);

// variables con los precios de los productos

let precioChocolate = 200
let precioZanahoria = 250
let precioColores = 260
let precioFlores = 270

//declaro constantes

const IVA = 0.21
console.log(IVA)

//operaciones basicas con los 4 productos disponibles

let IVAprecio
IVAprecio = precioChocolate * IVA
let precioFinalChocolate
precioFinalChocolate = precioChocolate + IVAprecio
console.log(precioFinalChocolate);

let IVAprecio2
IVAprecio2 = precioZanahoria * IVA
let precioFinalZanahoria
precioFinalZanahoria = precioZanahoria + IVAprecio2
console.log(precioFinalZanahoria);

let IVAprecio3
IVAprecio3 = precioColores * IVA
let precioFinalColoeres
precioFinalColoeres = precioColores + IVAprecio3
console.log(precioFinalColoeres);

let IVAprecio4
IVAprecio4 = precioFlores * IVA
let precioFinalFlores
precioFinalFlores = precioFlores + IVAprecio4
console.log(precioFinalFlores);

let compraTotal
compraTotal = precioFinalChocolate + precioFinalZanahoria + precioFinalColoeres + precioFinalFlores
console.log(compraTotal);

let consultarPrecio = prompt("Escriba el nombre del producto del que quiere saber el precio (opciones: tortachocolate, tortazanahoria, tortacolores, tortaflores")
console.log(consultarPrecio)
if (consultarPrecio.toLowerCase() == "tortachocolate") {
    alert(precioFinalChocolate)
} else if (consultarPrecio.toLowerCase() == "tortazanahoria") {
    alert(precioFinalZanahoria)
} else if (consultarPrecio.toLowerCase() == "tortacolores") {
    alert(precioFinalColoeres)
} else if (consultarPrecio.toLowerCase() == "tortaflores") {
    alert(precioFinalFlores)
} else {
    alert("Lo sentimos no tenemos ese producto o no entendimos lo que quiso decir")
}

//functions con parametros
function precioFinalTchocolate(precioChocolate, IVAprecio) {
    resultado = precioChocolate + IVAprecio
    console.log(`el precio del chocolate es ${resultado}`)
}
precioFinalTchocolate(precioChocolate, IVAprecio)

//CREO UN ARRAY CON LOS PRODUCTOS DE MI TIENDA

const productosTienda = [
    {id: 1, nombre: "achiras",codigo: 001,precio: 20,},
    {id: 2, nombre: "calentanos",codigo: 002,precio: 10,},
    {id: 3, nombre: "rosquitas",codigo: 003,precio: 15,},
];
console.log(productosTienda[2]);

//ITERAR MI ARRAY DE PRODUCTOS CON FOREACH Y QUE ME DEVUELVA NOMBRE Y PRECIO
function iterarProductos() {
    productosTienda.forEach((producto) => {
        console.log(producto.nombre);
        console.log(producto.precio);
    })
}

//elimino el primer item de la lista(SHIFT)y el ultimo (POP)
//agrego un producto (UNSHIFT)

productosTienda.shift();
productosTienda.unshift({nombre: "cookates",codigo: 004,precio: 30}
)

productosTienda.pop();
console.log(productosTienda);

//unir dos arrays en uno con CONCAT

const productos2 = [
    {nombre: "tortafestiva",codigo: 1002,precio: 270,},
    {nombre: "tortaconfeti",codigo: 1003,precio: 280,},
]
const productosFinal = productosTienda.concat(productos2)
console.log(productosFinal);

//encontrar productos en la tienda con FIND
function buscarProducto() {
    let parametro = prompt("Ingresa el nombre de producto que te gustaria encontrar en nuestra tienda:")
    let resultado = productosFinal.find((producto) => productosFinal.nombre == parametro)
    if (resultado !== undefined) {
        console.log(resultado), alert("BUENAS NOTICIAS: ¡TENEMOS LO QUE ESTAS BUSCANDO!")
    } else {
        alert("Lo sentimos, no tenemos el producto que buscas")
    }
}


//BUSCAR UN PRODUCTO CON EL CODIGO DEL MISMO
function buscarProducto(codigo) {
    let resultado = productosFinal.find((producto)=> producto.codigo === parseInt(codigo))
        return resultado
}

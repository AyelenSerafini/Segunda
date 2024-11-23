let titulo =document.getElementById ( DeliMarket)
const elementosClases = document.getElementsByClassName ("items")
for( let items of elementosClases) {
    items.style.color = "black";

}
const nuevoParrafo = document.createElement("p")
nuevoParrafo.textContent = "Gracias por su compra"
document.body.appendChild(nuevoParrafo)

const parrafos = document.getElementsByClassName("p")
for(let item of parrafos) {
    item.style.color = "orange"
}

const boton = document.getElementsByTagName("botoncito")
boton.addEventListener('click',() =>{alert("añadiste al carrito")})
 let container = document.getElementById("contenedor")
 let nombre = "DeliMarket"

 container.innerHTML = '<h1>Venta de Mercaderia ${nombre}</h1>'

 const descripcion = document.getElementById("descripcion")

 const inputDescripcion = getElementById("inputDescripcion")

 const botonAgregar = document.getElementById("agregarDescripcion")


 function agregarTarea(){
    const nuevaTarea = document.createElement('li')
    nuevaTarea.addEventListener('click', () => nuevaTarea.style.textDecoration = 'line-through')
    descripcion.appendChild(nuevaTarea) 
    inputDescripcion.value="";
}
botonAgregar.addEventListener('click', agregarTarea)
const formulario = document.getElementById("formulario")
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value

    alert('Gracias, ${nombre}.tu formulariofue enviado con el mail ${email}')
    document.getElementById('nombre').value = ''
    document.getElementById('email').value = ''
})

const productos =[

    {id: 1, nombre: "Manzana", precio:500,descripcion:"rojas", stock: 20},
    {id: 2, nombre: "pera", precio:800, descripcion: "Verdes", stock: 50},
    {id: 3, nombre:"uvas", precio: 1000, descripcion: "Verdes",stock: 30},
    {id: 4, nombre: "Mandarinas",precio:300, descripcion: "Ingertadas",stock:50},

    const listaProductos = document.getElementById('listaProductos')
    const carro = document.getElementById('carro')
    const total = document.getElementById('total')

    let totalcompra = 0;

    productos.forEach(productos) =>{
        const item = document.createElement('div');
        item.classList.add('producto')
        item.innerHTML= 
        <h3>${productos.nombre}</h3>

        <p>precio $${productos.precios}</p> }]
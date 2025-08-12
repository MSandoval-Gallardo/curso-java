const carrito = document.getElementById('carrito')
const template = document.getElementById('template')
const fragment = document.createDocumentFragment()
const btnsBotones = document.querySelectorAll('.card .btn')

const carritObjeto = {}

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta)
    const  producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }

    if(carritObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritObjeto[producto.titulo].cantidad +1
    }

    carritObjeto[producto.titulo] = producto
    pintarCarrito(producto)
    // console.log(carritObjeto)
}

const pintarCarrito = () => {
     carrito.textContent = "";
    Object.values(carritObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)
}
btnsBotones.forEach((btn) => btn.addEventListener('click', agregarAlCarrito))
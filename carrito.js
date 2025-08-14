const carrito = document.getElementById('carrito')
const template = document.getElementById('template')
const footer = document.getElementById('footer')
const templateFooter = document.getElementById('templateFooter')
const fragment = document.createDocumentFragment()


document.addEventListener('click', (e) => {

    // console.log(e.target.matches('.card .btn-outline-primary'))
    if(e.target.matches('.card .btn-outline-primary')){
        // console.log("ejecutar agregar al carro")
    agregarAlCarrito(e);
    }

    // console.log(e.target.matches('.list-group-item .btn-success'));
    if(e.target.matches('.list-group-item .btn-success')){
        btnAumenta(e);
    }

    if(e.target.matches('.list-group-item .btn-danger')){
        btnDisminuir(e);
    }
})

let carritObjeto = []

const agregarAlCarrito = (e) => {
    // console.log(e.target.dataset.fruta)

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
    }

    // console.log(producto);

const indice = carritObjeto.findIndex((item) => item.id === producto.id);

if(indice === -1){
    carritObjeto.push(producto)
}else{
    carritObjeto[indice].cantidad ++;
    // carritObjeto[indice].precio = carritObjeto[indice].cantidad * producto.precio
}
// console.log(carritObjeto)
    pintarCarrito()
}

const pintarCarrito = () => {
     carrito.textContent = "";

    carritObjeto.forEach((item) => {
        const clone = template.content.cloneNode(true)
        clone.querySelector('.text-white .lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        clone.querySelector('div .lead span').textContent = item.precio * item.cantidad;
        clone.querySelector('.btn-danger').dataset.id = item.id
        clone.querySelector('.btn-success').dataset.id = item.id
        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment);
    
    pintarFooter();
    
}

const pintarFooter = () => {

    // console.log("pintar carrito")
    footer.textContent = "";

    const total = carritObjeto.reduce(
        (acc, current) =>  acc + current.cantidad * current.precio, 0
    );

    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector('span').textContent = total

    // console.log(total)

    if(total > 0){

        footer.appendChild(clone)
    }
    
};

const btnAumenta = (e) => {
    // console.log("me diste click", e.target.dataset.id)
    carritObjeto = carritObjeto.map(item => {
        if(item.id === e.target.dataset.id){
            item.cantidad ++
        }
        return item
    });
    pintarCarrito()
};

const btnDisminuir = (e) => {
    // console.log("me diste click", e.target.dataset.id)
    carritObjeto = carritObjeto.filter(item => {
        if(item.id === e.target.dataset.id){
            if(item.cantidad > 0){
                item.cantidad --;
                if(item.cantidad === 0) return;
                return item;
            }

        }else{
            return item;
        }
    });
    pintarCarrito();
};


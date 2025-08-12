const lista = document.querySelector("#lista")
const lista2 = document.querySelector("#lista2")
const liTemplate = document.querySelector("#liTemplate")
const fragment = document.createDocumentFragment();


const arrayPaises = ["peru", "bolivia", "colombia"]

const clickPais = (e) => console.log('me diste click', e.target)

arrayPaises.forEach((pais) => {

    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector('span').textContent = pais;

    clone.addEventListener('click', clickPais)

    fragment.appendChild(clone)
})

lista2.appendChild(fragment)


// console.log(lista)

// const li = document.createElement('li');
// li.textContent = "elemento creado con js";

// console.log(li)


// const clone = liTemplate.content.cloneNode(true);

// // console.log(liTemplate)
// clone.querySelector(".text-primary").textContent = 
// "agregué a través de un template"

// lista2.appendChild(clone);

// const fragment = new DocumentFragment (es lo mismo)
// const fragment  = document.createDocumentFragment()

// arrayPaises.forEach(pais => {
// console.log(pais)
// const li = document.createElement('li')
// li.textContent = pais
// fragment.appendChild(li)

// })

// lista.appendChild(fragment)


// Práctica createElement
// arrayPaises.forEach(pais => {

//     const li = document.createElement('li')
//     li.class = "list"
//     const b = document.createElement('b')
//     b.textContent = "País: "
//     const span = document.createElement('span')
//     span.class = "text-primary"
//     span.textContent = pais

//     li.appendChild(b)
//     li.appendChild(span)

//     fragment.appendChild(li)
// })

// lista2.appendChild(fragment)

// innerHTML
// arrayPaises.forEach((PAIS) => {
//     lista.innerHTML += `<li class="list">
//         <b>Pais:</b>
//         <span class="text-primary">${PAIS}</span>
//     </li>`
// })

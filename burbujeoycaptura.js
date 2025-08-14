
// burbujeo y captura
// const padre = document.querySelector(".border-primary")
// const hijo = document.querySelector(".border-secondary")
// const nieto = document.querySelector(".border-danger")

// padre.addEventListener('click', () => {
//     console.log('le diste click al padre')
// }, true);
    
// hijo.addEventListener('click', () => {
//     console.log('le diste click al hijo')
// }, true);

// nieto.addEventListener('click', () => {
//     console.log('le diste click al nieto')
// }, true)


// opcion 1 para evitar burbujeo y captura "stopPropagation"

// const cajitas = document.querySelectorAll(".border")

// cajitas.forEach(caja => {
//     caja.addEventListener('click', (e) => {
//         e.stopPropagation()
//         console.log("clicleado")
//     })
// })

const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("click");
});




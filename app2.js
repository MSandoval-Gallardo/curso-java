
// document.addEventListener("DOMContentLoaded", () => {
//     console.log(document.getElementById("titulo"))
//     console.log(document.getElementById("titulo").textContent)
    
// })

// console.log(document.querySelector("h1"))
// console.log(document.querySelector("#titulo"))
// console.log(document.querySelectorAll(".container .text-danger"))

const h1 = document.getElementById("titulo")
// const botom = document.querySelector(".btn-primary")
const selecColor = document.querySelector("#exampleColorInput")
const container = document.querySelector(".container")
const boton = document.querySelector("#boton")
const color = document.getElementById("color")
const textoHexa = document.getElementById("textoHexa")
// botom.addEventListener("click", () => {

//     console.log("me diste click")
//     h1.textContent = "texto cambiado desde del boton con js"
//     h1.style.backgroundColor = "green" 

// })
// h1.textContent = "nuevo text de javascript"
// h1.style.backgroundColor = "purple" 
// h1.style.color = "white"


selecColor.className = "w-100 mb-3"
boton.className = "btn btn-primary"
color.className = "card text-center p-5"
color.style.backgroundColor = "#563d7c"


boton.addEventListener("click", () => {
textoHexa.textContent = selecColor.value
color.style.backgroundColor = selecColor.value


})

// container.className = ""
console.log(selecColor)



// console.log(h1.className)

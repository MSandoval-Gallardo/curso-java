const inputColor = document.getElementById("inputColor")
const boton = document.getElementById("boton")
const colorHexa = document.getElementById("colorHexa")
const caja = document.getElementById("caja")
const spinner = document.querySelector(".spinner")



boton.addEventListener("click", () => {
    // console.log(inputColor.value)
    colorHexa.textContent = inputColor.value
    caja.style.backgroundColor = inputColor.value
    boton.style.backgroundColor = inputColor.value
    
})

let a = "hola";
let b = a

a = "chao"

console.log(b)
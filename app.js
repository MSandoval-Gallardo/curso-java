// // Tipos de variables
// console.log('este es un string, pude ser con comillas simples y "dobles"')

// // esto es un numero
// console.log(20)

// // esto es unn decimal
// console.log(20.6)

// // esta es una funcion recibiendo parametros
// console.log(20, 30)

// //booleanos
// console.log(true)
// console.log(false)

// // declaracion de variables
// var miVariableConVAr
// let miVariableConLet
// const miConstante = 0

// // array
// let frutas = ["manzana", "pera", "sandia", "uva", "durazno", "platano"]
// console.log(frutas)
// length muestra la cantidad de elementos en el array
// console.log(frutas.length)
// console.log(frutas[2])

// ciclo for
// for (let i = 0; i < frutas.length; i++){
// console.log(frutas[i])
// }

// for (let fruta of frutas){
//     console.log(fruta)
// }

// let nombreUsuario = "Emma";

// for (let usuario in nombreUsuario){
//     console.log(usuario)
// }

// let numeroUno = prompt("Ingresa el primero número");
// let numeroDos = prompt("Ingresa el segundo número");
// let resultado = numeroUno + numeroDos;
// console.log(resultado); 

// funcion

// function saludar(nombre) {
//     return ("bienvenida " + nombre)
// }
// console.log(saludar("Emma"))

// function sumar(n1, n2){
//     return parseInt(n1) + parseInt(n2)
// }

// let numUno = prompt("ingrese primer numero")
// let numDos = prompt("ingrese segundo numero")

// console.log(sumar(numUno, numDos))

// let nombreUsuario = "bluuweb"
// console.log(`bienvenido a
//     ${nombreUsuario.toUpperCase()}` )

// let estado = true    

// // operador ternario
// console.log(`
//     ${estado ? "en linea" : "offline"}
//     `)    

// //  con var se puede declarar la 
// // variable n veces sin que la consola indique un error (problema)

// var nombreUser2 = "Miguel"
// var nombreUser2 = "Juan"
// console.log(nombreUser2)

// // con let se puede cambiar el valor de la variable 
// // pero no volver a declarar la misma

// let nombreUser = "Miguel"
//  nombreUser = "Juan"
// console.log(nombreUser)

// con const no permite realizar cambio al valor de la variable
// muestra error rn consola 
// const estado = true;
// estado = false;

// const estado = true

// if(estado){
//     const estado = false
//     console.log(estado)
// }
//     console.log(estado)


// // PUSH agrega al final
// const frutas = ["sandia", "pera"]
// frutas.push("banana")
// console.log(frutas)

// // UNSHIFT agrega al inicio
// const frutas2 = ["sandia", "pera"]
// frutas2.unshift("banana")
// console.log(frutas2)

// // POP elimina el ultimo elemento del array y lo devuelve
// const frutas3 = ["sandia", "pera"]
// const frutaEliminada = frutas3.pop()
// console.log(frutas3)
// console.log(frutaEliminada)

// // SHIFT elimina el ultimo elemento del array y lo devuelve
// const frutas4 = ["sandia", "pera"]
// const frutaEliminada2 = frutas4.shift()
// console.log(frutas4)
// console.log(frutaEliminada2)



// // carro de compras
// const carro = []
// const compra = prompt("bienvenido al lider ¿desea agregar algo al carro de compras?")
// carro.push(compra)
// while(confirm("desea agregar algo mas?")){

//     const compra = prompt("que desea agregar?")
//     carro.push(compra)

// }

// console.log("Usted agrego al carro lo aiguiente")

// for(let total of carro){
//     console.log(total)
// }

// // funcion declarativa (se llaman de cualquier parte del codigo)
// function numeroAleatorio(min, max){

//     return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(numeroAleatorio(10,21))

// funcion expresada (se llaman despues de dclarar)

// const numAzar = function(min, max){
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(numAzar(10, 20))


// funcion de flecha 
// const azarFlecha = (min, max) => {

//     return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(azarFlecha(100, 200))


// FOREACH
// const carro = []
// const compra = prompt("bienvenido al lider ¿desea agregar algo al carro de compras?")
// carro.push(compra)
// while(confirm("desea agregar algo mas?")){

//     const compra = prompt("que desea agregar?")
//     carro.push(compra)

// }
// console.log("Usted agrego al carro lo aiguiente")

// // forEach con indice(opcional) y array(opcional) 
// carro.forEach((compra, index, array) => {
//     console.log(`${index}: ${compra}`)
//     console.log(array)
// })

// // foreach simple
// carro.forEach(compra => {
//     console.log(compra)
// })

// OBJETOS
// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigo:["agua","perros"],
//     otros:{
//         amigos: ["cobarde","timido"],
//         favoritos:{
//             comida:{
//                 frio:"salomon",
//                 caliente:"pollo"
//             }
//         }
//     },
//     comer:function () {
//         console.log("gato comiendo")

//     },
//     comerDos(){
//         console.log("gato comiendo dos")
//     }
// }

// gato.enemigo.push("ejercicio")
// gato.comer()
// gato.comerDos()

// console.log(gato.otros.favoritos.comida.frio)
// console.log(gato.otros.favorito?.comida.frio) //para saber si existe la propiedad "favorito"

// // console.log(gato.nombre)
// // console.log(gato.duerme)
// // console.log(gato.edad)
// // console.log(gato["enemigo"][0])
// // console.log(gato.enemigo[1])


// // console.log(gato.hasOwnProperty("nombre"))

// if(gato.hasOwnProperty("nombre")){
//     gato.nombre = "lyno"
// }
// console.log(gato)

// OBJETO USANDO "THIS" Y FUNCIONN DE FLECHA (DENTRO DE METODO)  
// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigo:["agua","perros"],
//     comer(alimento) {
//         console.log(`
//             ${this.nombre} está comiendo ${alimento}`)

//     },
//     listarEnemigos(){
//         this.enemigo.forEach(item => console.log(item))
//     }
// }
// gato.listarEnemigos()


// FOR...IN

// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigo:["agua","perros"],
// }

// DOS FORMAS DE LLAMAR AL OBJETO GATO
// console.log(Object.values(gato))
// Object.values(gato).forEach(item=> console.log(item));


// for (let propiedad in gato) {
//     console.log(gato[propiedad])
// }


//  Destructuring Objects

// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigo:["agua","perros"],
// }

// // const nombre = gato.nombre;
// // const {nombre,duerme,edad} = gato
// // console.log(nombre,duerme,edad);

// // destructuracion y alias 
// const {nombre :  nuevoNombre, duerme: nuevoDuerme} = gato
// console.log(nuevoNombre,nuevoDuerme)


// // destructuracion y valor por defecto
// const {nombre = "sin nombre", duerme,  edad} = gato
// console.log(nombre,duerme,edad)

// const gato = {
//     nombre: 'valiente',
//     duerme: true,
//     edad: 10,
//     enemigo:["agua","perros"],
//     otros:{
//         amigos: ["cobarde","timido","peludo"],
//         favoritos:{
//             comida:{
//                 frio:"salomon",
//                 caliente:"pollo"
//             }
//         }
//     },
// }

// opcion 1
// const {amigos} = gato.otros
// console.log(amigos)

// opcion 2 con array
// const {amigos: amigosArray} = gato.otros
// const [amigoUno,amigoDos] = amigosArray
// console.log(amigoDos)


// METODOS
// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     comer(comida) {
//         return `${this.nombre} está comiendo ${comida}`;
//     },
//     mostrarEnemigos() {
//         return this.enemigos.forEach((item) => console.log(item));
//     },
// };

// const comerDos = gato.comer("pez");
// console.log(comerDos);

// Getters y Setters
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    get nombreMayuscula(){
        return this.nombre.toUpperCase()
    },
    set agregarEnemigo(enemigoNuevo){
        this.enemigos.push(enemigoNuevo)
    }
}

gato.agregarEnemigo = "planton"
console.log(gato.enemigos)


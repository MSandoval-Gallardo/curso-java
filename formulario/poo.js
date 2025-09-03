// // funcion constructora
// function Persona(nombre) {
//     this.nombre = nombre;

//     this.saludar = function () {
//         return `${this.nombre} dice hola`;
//     };

//     // this.saludaIngles = function () {
//     //     return `${this.nombre} says hi!`;
//     // }
    
// }

// Persona.prototype.saludaIngles = function () {
//      this.saludaIngles = function () {
//         return `${this.nombre} says hi!`;
//     }
// }

// const juanito = new Persona("juanito");
// const pedrito = new Persona("pedrito");

// console.log(juanito)

//con clase
class Persona2 {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad
    }

    get getNombre(){
        return this.nombre
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }
    saludar(){
        return `${this.nombre} dice hola`;
    }

    static probarSaludo(nombre){
        return `${nombre} probando saludo`;
    }
}

class Estudiante extends Persona2 {

    // constructor(nombre,edad,notas = []){
    //     super(nombre, edad);
    //     this.notas = notas 
    // }

    #notas = [];

    set setNotas(notas){
        this.#notas.push(notas);
    }

    get getNotas(){
        return this.#notas;
    }
}

const juanito = new Estudiante("juanito", 40);

juanito.setNotas = 7
juanito.setNotas = 4
juanito.setNotas = 1


console.log(juanito.getNotas)


// console.log(Persona2.probarSaludo("vicente"))

// juanito.setNombre = "mihguek";
// console.log(juanito.getNombre)
// console.log(juanito.saludar())

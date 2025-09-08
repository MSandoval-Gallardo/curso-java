const formulario = document.querySelector("#formulario");
const templateEstudiante = document.querySelector("#templateEstudiante").content;
const templateProfesor = document.querySelector("#templateProfesor").content;
const pintarEstudiante = document.querySelector('#pintarEstudiante');
const pintarProfesor = document.querySelector('#pintarProfesor');
const btnSuccess = document.querySelector('.btn-success');
const alert = document.querySelector('.alert');

const estudiantes = [];
const profesores = [];

document.addEventListener("click", (e) => {
    if(e.target.dataset.uid){
        if(e.target.matches(".btn-success")){
            estudiantes.map((item) => {
                if(item.uid === e.target.dataset.uid){
                    item.setEstado = true
                }
                console.log(item)
                return item;
            });
        }
        if(e.target.matches(".btn-danger")){
            estudiantes.map((item) => {
                if(item.uid === e.target.dataset.uid){
                    item.setEstado = false
                }
                console.log(item)

                return item;
            });
        }
        Persona.pintarPersonaUI(estudiantes, "Estudiante")
    }
})

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
        this.uid = `${Date.now()}`;
    }

    static pintarPersonaUI(persona,tipo){
        if(tipo === "Estudiante"){

            pintarEstudiante.textContent = "";
            const fragment = document.createDocumentFragment();
            persona.forEach(items => {

                fragment.appendChild(items.agrearNuevoEstudiante())
                
            });

            pintarEstudiante.appendChild(fragment)
        }
        if(tipo === "Profesor"){
            pintarProfesor.textContent = "";
            const fragment = document.createDocumentFragment();
            persona.forEach(item => {
                fragment.appendChild(item.agregarNuevoProfesor());
            });

            pintarProfesor.appendChild(fragment);
        }
    }
}

class Estudiante extends Persona{
    #estado = false;
    #estudiante = "Estudiante";

    set setEstado(estado){
        this.#estado = estado
    }

    get getEstudiante(){
        return `${this.#estudiante}`
    }

    agrearNuevoEstudiante(){
        const clone = templateEstudiante.cloneNode(true);
        clone.querySelector('.text-primary').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.getEstudiante
        clone.querySelector('p').textContent = this.edad

        if(this.#estado){
            clone.querySelector('.badge').className = "badge bg-success";
            clone.querySelector('.btn-success').disabled = true;
            clone.querySelector('.btn-danger').disabled = false;
        }else{
            clone.querySelector('.badge').className = "badge bg-danger";
            clone.querySelector('.btn-danger').disabled = true;
            clone.querySelector('.btn-success').disabled = false;

        }
        
        clone.querySelector('.badge').textContent = this.#estado ? "Aprobado" : "Reprobado";

        clone.querySelector('.btn-success').dataset.uid = this.uid;
        clone.querySelector('.btn-danger').dataset.uid = this.uid;

        return clone
    }
}
class Profesor extends Persona{

    #profesor = "Profesor";

    agregarNuevoProfesor(){
        const clone = templateProfesor.cloneNode(true)
        clone.querySelector('h5').textContent = this.nombre
        clone.querySelector('h6').textContent = this.#profesor
        clone.querySelector('p').textContent = this.edad
        return clone
    }
}

formulario.addEventListener('submit', e => {
    e.preventDefault()
    alert.classList.add("d-none")

    const datos = new FormData(formulario)
    // datos.forEach(item => console.log(item))
    const [nombre, edad, opcion] = [...datos.values()]

    if(!nombre.trim() || !edad.trim() || !opcion.trim()){
        alert.classList.remove("d-none")
        return
    }
    
    if(opcion === "Estudiante"){
        const estudiante = new Estudiante(nombre, edad);
        estudiantes.push(estudiante)
        Persona.pintarPersonaUI(estudiantes, opcion)
    }

    if(opcion === "Profesor"){
        const profesor = new Profesor(nombre, edad);
        profesores.push(profesor)
        Persona.pintarPersonaUI(profesores, opcion)
    }


});
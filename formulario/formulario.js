const formulario = document.getElementById("formulario");
// con queryselector para no usar el id
// const userName = document.querySelector("input[name='userName']");
// const userEmail = document.querySelector("input[name='userEmail']");


//con getElementById
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const alertSuccess = document.getElementById("alertSuccess");
const alertEmail = document.getElementById("alertEmail");
const alertName = document.getElementById("alertName");

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Formulario enviado!!!"
}



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    alertSuccess.classList.add("d-none");

    const errores = []; 

    const pintarMensajeError = (errores) => {

        errores.forEach(items => {

            items.tipo.classList.remove("d-none");
            items.tipo.textContent = items.msg;
            items.tipo.classList.add("invalid")

            
        });


    }

    // devuelve true si existe solo espacios
    // console.log(!userName.value.trim())

    if(!regUserName.test(userName.value) || !userName.value.trim()){

        userName.classList.add("is-invalid")
        // console.log("Nombre ingresado no valido");
        errores.push({
            tipo : alertName,
            msg: "Formato no válido en el campo nombre, solo letras"
        })
    }else{
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim()){

        userEmail.classList.add("is-invalid")
        // console.log("correo no valido"); 
        errores.push({
            tipo : alertEmail,
            msg: "Escriba un correo no válido"
        });
    }else{
        alertEmail.classList.add("d-none");
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add('is-valid')

    }

    if(errores.length !== 0){
        pintarMensajeError(errores);
        return
    }

// console.log("formulario enviado");
pintarMensajeExito();

})
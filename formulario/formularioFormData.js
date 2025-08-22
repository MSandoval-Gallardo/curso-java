const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = new FormData(formulario);
    
    // primera forma
    for(let items of inputs){

        console.log(items)
    }

    // segunda forma
    console.log(inputs.get('userName'))
    console.log(inputs.get('userEmail'))




    console.log("procesando formulario....")
})
const container = document.querySelector(".container");

//para estas 3 formas de acceder al div se puede usar "container" o "document"
// document.addEventListener('click', (e) => {

container.addEventListener('click', (e) => {
    // console.log(e.target.id)


    if(e.target.id === "padre"){
        console.log("diste click en el div padre usando 'target'")
    }
    if(e.target.matches(".border-secondary")){
        console.log("diste click al div hijo usando 'matches'")
    }
    
    if(e.target.dataset.div === ("divNieto")){
        console.log("diste click al div nieto usando 'dataset'")

    }
})
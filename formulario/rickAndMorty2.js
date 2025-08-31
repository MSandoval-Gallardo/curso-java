document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

const fetchData = async (url = "https://rickandmortyapi.com/api/character") => {
    try {
        loadingData(true);

        const res = await fetch(url);
        const data = await res.json();

        pintarCard(data);
    } catch (error) {
        console.log(error);
    }finally{
        loadingData(false);
    }
};

const pintarCard = (data) => {
    const cardDinamicas = document.getElementById("card-dinamicas");
    cardDinamicas.textContent = "";

    const templateCard = document.getElementById("template-card").content;
    const fragment = document.createDocumentFragment();

    data.results.forEach((item) => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector("h5").textContent = item.name
        clone.querySelector("p").textContent = item.species;
        clone.querySelector("span").textContent = item.origin.name;
        clone.querySelector(".card-img-top").setAttribute("src", item.image);


        // se guarda en le fragment para evitar el reflow
        fragment.appendChild(clone);
    });

    cardDinamicas.appendChild(fragment);

    pintarPaginacion(data.info);

};

const pintarPaginacion = (info) => {
    const paginacion = document.getElementById("paginacion");
    paginacion.textContent = "";

    const templatePaginacion = document.getElementById("template-paginacion").content;
    const clone = templatePaginacion.cloneNode(true);

    if(info.prev){
        clone.querySelector(".btn-outline-secondary").disabled = false;
    }else{
        clone.querySelector(".btn-outline-secondary").disabled = true;
    }

    if(info.next){
        clone.querySelector(".btn-outline-primary").disabled = false;
    }else{
        clone.querySelector(".btn-outline-primary").disabled = true;
    }

    paginacion.appendChild(clone);

    paginacion.addEventListener("click", (e) => {
        if(e.target.matches(".btn-outline-primary")){
            if(info.next){
                fetchData(info.next);
            }
        }
        if(e.target.matches(".btn-outline-secondary")){
            if(info.prev){
                fetchData(info.prev);
            }
        }
    })
};

// pintar el loading
const loadingData = (estado) => {
    const loading = document.getElementById("loading");
    if(estado){
        loading.classList.remove("d-none");
    }else{
        loading.classList.add("d-none");
    }
};
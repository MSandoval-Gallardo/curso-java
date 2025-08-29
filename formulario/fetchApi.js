// const url = 'https://jsonplaceholder.typicode.com/posts/'


// // // extraer data con fetch
// // fetch(url).then((res) => res.json())
// // .then(data => console.log(data))
// // .catch(e => console.log(e))
// // .finally(() => console.log("terminó"))

// // extraer data con findPostById
// const findPostById = async (id) => {

//     try {

//         const res = await fetch(url + id)
//         const post = await res.json()
//         console.log(post)
//     } catch (error) {
//         console.log(error)
//     }
// };
// findPostById(10)

// CONSUMIENDO API DE POKEMON 
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((res) => res.json())
.then ((data) => console.log(data)
)
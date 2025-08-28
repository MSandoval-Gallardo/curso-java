const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

// const findPostById = (id, callback) => {

//     const post = posts.find((item) => item.id === id);

//     if(post){
//         callback(null,post);
//     }else{

//         //en caso de error
//         callback("no se encontró el post con el id " + id);

//     }
// };

// // ""Callback Hell""
// findPostById(1, (err, post) => {
//     if(err) return console.log(err);
//     console.log(post);

//         findPostById(2, (err, post) => {
//             if(err) return console.log(err);
//             console.log(post);

//                 findPostById(3, (err, post) => {
//                     if(err) return console.log(err);
//                     console.log(post);

//                         findPostById(4, (err, post) => {
//                             if(err) return console.log(err);
//                             console.log(post);
//                         })
//                 })
//         })
    
// });

// PROMESAS
// forma 1
// const findPostById = (id) => {

//     const post = posts.find(item => item.id === id);

//     return new Promise((resolve, reject) => {

//         if(post){ 
//             resolve(post)
//         }else{
//             reject("no de encontro el id " + id)
//         }
//     })

// }

//forma 2
// const findPostById = id => 
//     new Promise((resolve, reject) => {
//         const post = posts.find((item) => item.id === id);
//         if(post){
//             resolve(post);
//         }else{
//             reject("no se encontro el post con el id " + id);
//         }
//     })


// findPostById(1)
//     .then(post => console.log(post))
//     .catch((e) => console.log(e))
    // .finally(() => console.log("Fin de la promesa"))



// SYNC AWAIT

const findPostById = (id) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
             const post = posts.find((item) => item.id === id);
            //  operador ternario
            //  post ? resolve(post) : reject("no se encontro el post con el id " + id);
            if(post){
                resolve(post)
            }else{
                reject("no se encontro el post con el id " + id);
            }    
        }, 2000);    
    })    

const buscar = async () => {
    // all hacer varias promesas dentro de Promise.all([]) si una falla, fallan todas, solo se muestra el error

    try {

        const resPosts = await Promise.all([
            findPostById(1),
            findPostById(3)
        ])
        console.log(resPosts)
        // const postUno = await findPostById(6)
        // const postDos = await findPostById(2)
        // console.log(postUno. title, postDos.title)
    } catch (error) {
        console.log(error)
    }finally{
        console.log("finally se ejecuta si o si")
        // loading = false
    }

}

buscar()

console.log("fin del codigo");
    


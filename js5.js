const frutas = ["🍌", "🍎", "🍓"];
const nuevoArray = frutas.map((item) => item)

const users = [
    {uid: 1, name: "jhon", age: 34},
    {uid: 2, name: "amy", age: 20},
    {uid: 3, name: "camperCat", age: 10},

];

// const names = users.map(item => item.name);
// console.log(names)

const numeros = [1,2,3,4,5,6,7,8,9,10];

//mapeo de array que multiplica todos los numeros por 2
const numerosPorDos = numeros.map((item) => item * 2)
// console.log(numerosPorDos)

//filtro para traer a los mayores de 30
const sub30 = users.filter((item) => item.age > 30)
// console.log(sub30)

//filtro para eliminar uno de la lista
const userFiltrado = users.filter((fil) => fil.uid !== 3)
// console.log(userFiltrado)

// filtro para buscar alguien de la lista
const {age} = users.find((item) => item.uid === 2)
// console.log(age)

//valida que usuario existe
const existe = users.some((item) => item.uid === 2)
// console.log(existe)

//trae el indice del objeto 
const buscar = users.findIndex((item) => item.uid === 3)
// console.log(buscar)

// devuelve una copia de una parte del array de inicio a fin (sin incluir fin) cueck 
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
// console.log(newArray)

//concatena los array
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
// console.log(array3);


// spread syntax
const array4 = ["a", "b", "c"];
const array5 = ["d", "e", "f"];
const array6 = [...array1," - ", ...array2];
// console.log(array6);

// reduce 
const numerosRed = [1, 2, 3, 4, 5];
const sumaTodos = numerosRed.reduce((acc, valorActual) => acc + valorActual);
// console.log(sumaTodos);

// REDUCE para aplanar matriz anidada 1
const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];
const soloNumeros = arrayNumeros.reduce((acc, item) => acc.concat(item));
console.log(soloNumeros)

// OTRA OPCION para aplanar matriz anidada 2
const flatSingle = [].concat(...arrayNumeros);
console.log(flatSingle);

// FLAT() para aplanar matriz anidada 
const flatSingle2 = arrayNumeros.flat();
console.log(flatSingle2);

const arrayNumeros2 = [1, 2, [3, 4, [5, 6]]];

const arrayPlano = arrayNumeros2.flat(2);
console.log("ultimo")
console.log(arrayPlano);


// SPLIT (separa)
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

// JOIN (une por defecto con coma)
const joinMes = arrayMeses.join("-")
console.log(joinMes)

// // // function filtrar(productos) {
// // //     // var filtrados = productos.filter(function(producto) {
// // //     //     return producto.price >= 50;
// // //     // });
// // //     var array = [];
    
// // //     for (let i = 0; i < productos.length; i++) {
// // //         // console.log(politicos[i]);
// // //         if (productos[i].price >= 50) {
// // //             array.push(productos[i]);
// // //         }

// // //     }
// // //     return array;
// // // }


// // // var productos = [{
// // //     price: 100,
// // //     name:'tv'
// // // },{
// // //     price: 50,
// // //     name:'phone'
// // // },{
// // //     price: 30,
// // //     name:'lamp'
// // // }];


// // // var resultado = filtrar(productos);
// // // console.log(resultado);
// function fiestaDeDisfraces(personas) {
//     var array = [];

//     // for (let i = 0; i < personas.length; i++) {
//     //     if (personas[i].disfraz) {
//     //         array.push(personas[i].nombre);
//     //     }
//     // }
//     // return array;

//     var result = personas.filter(function (persona) {
//        return persona.disfraz == true && persona.personaje != null;
//     });
//     return result;
// }
    


// var personas = [
//     {nombre: "Juan Manuel", disfraz: true, personaje: "Wally"},
//     {nombre: "Mariana", disfraz: true},
//     {nombre: "Pedro", disfraz: false}
// ];

// var result = fiestaDeDisfraces(personas);
// console.log(result);


function buscandoAWally(personajes) {
    var posicion = 0;
    var frase = "He encontrado a Wally en la posición";
    
    for (let i = 0; i < personajes.length; i++) {
        if (personajes[i] === "Wally") {
            posicion = i;
            return frase + " " + posicion;
        }
    }
    
}



var personajes = ["Dobby", "Harry", "Dementor", "Wally", "Sirius"];

var resultado = buscandoAWally(personajes);
console.log(resultado);
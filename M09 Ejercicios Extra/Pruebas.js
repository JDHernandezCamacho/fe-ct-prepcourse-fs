// class Mascota {
//     constructor(nombre, dueño, actividades) {
//         // Inicializar las propiedades de la Mascota con los valores recibidos como argumento
//         // tu código aquí
//         this.nombre = nombre;
//         this.dueño = dueño;
//         this.actividades = actividades;
//     }

//     getNombre() {
//         // tu código aquí
//         return this.nombre;
//     }

//     getDueño() {
//         // retorna un string concatenando el nombre y el apellido del dueño
//         // tu código aquí
//         return (this.dueño.nombre + " " + this.dueño.apellido);
//     }

//     addActividad(actividad, frecuencia) {
//         // Agrega un objeto {actividad: actividad, frecuencia: frecuencia} al arreglo de actividades de la mascota.
//         // tu código aquí
//         var objetoAAgregar = {
//             actividad,
//             frecuencia
//         }
//         this.actividades.push(objetoAAgregar);
//         return mascota1;
//     }

//     getActividades() {
//         return this.actividades;
//     }

//     getFrecuencia(actividad) {
//         // El metodo debe retornar la frecuencia de dicha actividad
//         // [{actividad: 'salir a caminar', frecuencia: '1 vez al dia'}, {actividad: 'baño', frecuencia: '1 vez al mes'}]
//         // mascotas.getFrecuencia('baño') debería devolver '1 vez al mes'
//         // tu código aquí
//         for (let i = 0; i < this.actividades.length; i++) {
//             if (this.actividades[i].actividad == actividad){
//                 return this.actividades[i].frecuencia;
//             }
//         }


//     }
// }

// var actividades = [
//     {
//         actividad: "salir a caminar",
//         frecuencia: "diario"
//     }, {
//         actividad: "baño",
//         frecuencia: "mensual"
//     }
// ];
// var dueño = {
//     nombre: "Nicki",
//     apellido: "Medina"
// };
// var nombre = "Bola de nieve";
// var mascota1 = new Mascota(nombre, dueño, actividades);
// var actividad = "salir a caminar";
// var actividad1 = "jugar la pelota";
// var frecuencia1 = "3 por semana";


// console.log(mascota1.addActividad(actividad1, frecuencia1));





/*
 * Completa la función verificarHeroe a continuación.
 *
 * La función debería retornar un string.
 * La función acepta un OBJETO como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */

// // // function verificarHeroe(heroe) {
// // //     var result = "";

// // //     if (heroe.esMilitar && heroe.batalla){
// // //         result = heroe.nombre + ", es héroe militar y ha participado en batallas";
// // //         return (result);
// // //     } else if (heroe.esMilitar && heroe.batalla == false) {
// // //         result = heroe.nombre, ", aunque es héroe militar no ha participado en batallas";
// // //         return (result);
// // //     }else if (heroe.esMilitar == false && heroe.batalla == false) {
// // //         result = heroe.nombre, ", no es militar y tampoco ha participado en batallas";
// // //         return (result);
// // //     }else if (heroe.esMilitar == false && heroe.batalla) {
// // //         result = heroe.nombre, ", aunque no es un héroe militar ha participado en batallas";
// // //         return (result);
// // //     }
// // // }

// // // var heroe = {
// // //     nombre: "John Doe",
// // //     fechaNacimiento: "10 de enero de 1980",
// // //     lugarNacimiento: "Ciudad X",
// // //     logros: "Ganador de múltiples medallas",
// // //     esMilitar: true,
// // //     batalla: true,
// // // };

// var resultado = verificarHeroe(heroe);
// console.log(resultado);



//-------------------------------------------------------------------
/*
 * Completa la función filtrarPoliticos a continuación.
 *
 * La función debería retornar un ARREGLO de strings.
 * La función acepta un OBJETO, un NÚMERO y un STRING como parámetros.
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */

// // // function filtrarPoliticos(politicos, edadMinima, partido) {
// // //     // Tu código aquí
// // //     var array = [];

// // //     for (let i = 0; i < politicos.length; i++) {
// // //         // console.log(politicos[i]);
// // //         if (politicos[i].edad > edadMinima && politicos[i].partido == partido) {
// // //             array.push(politicos[i].nombre);
// // //         }

// // //     }
// // //     return array;
// // // }


// // // var politicos = [
// // //     {nombre: "Juan", edad: 45, partido: "A"},
// // //     {nombre: "María", edad: 52, partido: "B"},
// // //     {nombre: "Pedro", edad: 41, partido: "A"}
// // // ];

// // // var resultado = filtrarPoliticos (politicos, 40, "A");
// // // console.log(resultado);



/*
 * Completa la función 'filtrar' a continuación.
 *
 * La función debe retornar un ARREGLO.
 * La función recibe un CALLBACK como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

// // // Array.prototype.filtrar = function (cb) {
// // //     // tu código aquí
// // //     var filtro = prototype.filter(function (parametro){
// // //         cb();
// // //         return parametro.price >= 50;
// // //     });
// // //     return filtro;
// // // };


// // // function filtrar(productos) {
// // //     var filtrados = productos.filter((producto){
// // //         return producto.price >= 50;
// // //     });
// // // }


// // // var productos = [{
// // //     price: 100,
// // //     name:'tv'
// // // },{
// // //     price: 50,
// // //     name:'phone'
// // // },{
// // //     price: 100,
// // //     name:'lamp'
// // // }];




// // // var resultado = filtrar(productos);
// // // console.log(resultado);




//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------

// // function deObjetoAarray(objeto) {
// //     // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
// //     // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
// //     // Estos elementos debe ser cada par clave:valor del objeto recibido.
// //     // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
// //     // Tu código:
// //     var entradas;

// //     entradas = Object.entries(objeto);
// //     return entradas;
// // }


// //  var objeto = {D: 1, B: 2, C: 3};
// //  var result = deObjetoAarray(objeto);
// //  console.log(result);


//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------

// // function numberOfCharacters(string) {
// //     // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
// //     // letras del string, y su valor es la cantidad de veces que se repite en el string.
// //     // Las letras deben estar en orden alfabético.
// //     // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
// //     // Tu código:

// // //     var letra;
// // //     var contador = 0;
// // //     var objeto = {};
// // //     var objetoOrdenado = {};

// // //     // Iterar cada una de las letras del string
// // //     for (let i = 0; i < string.length; i++) {
// // //         letra = string[i];
// // //         var n = 0;
// // //         //Comparando las letras iguales
// // //         do {
// // //             if (letra == string[n]){
// // //                 contador = contador + 1;
// // //             }
// // //             n = n + 1;
// // //         } while (n <= string.length);
// // //         // Agregando las claves al objeto
// // //         objeto[letra] = contador;
// // //         contador = 0;
// // //     }
// // //     //Para ordenar las claves dentro del objeto
// // //     var claves = Object.keys(objeto);
// // //     claves.sort();
// // //     //Integrando los pares a las claves (valores a sus respectivas claves)
// // //     claves.forEach(element => {
// // //         objetoOrdenado[element] = objeto[element];
// // //     });
// // //     return objetoOrdenado;
// // 

// // // var string = "adsjfdsfsfjsdjfhacabcsbajda";
// // // var result = numberOfCharacters (string);

// // // console.log(result);


//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------


// // function capToFront(string) {
// //     // Recibes un string con algunas letras en mayúscula y otras en minúscula.
// //     // Debes enviar todas las letras en mayúscula al comienzo del string.
// //     // Retornar el string.
// //     // [EJEMPLO]: soyHENRY ---> HENRYsoy
// //     // Tu código:
// //     var array = string.split("");
// //     var arrayDistribuido = [];

// //     for (let i = 0; i < array.length; i++) {
// //         if (array[i] === array[i].toUpperCase()){
// //             arrayDistribuido.push(array[i]);
// //         } 
// //     }

// //     for (let i = 0; i < array.length; i++) {
// //         if (array[i] === array[i].toLowerCase()){
// //             arrayDistribuido.push(array[i]);
// //         }
// //     }
// //     return(arrayDistribuido.join(""));
    
// // }

// // var string = "soyHENRY";

// // var result = capToFront(string);
// // console.log(result);



//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------

// // function asAmirror(frase) {
// //     // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
// //     // La diferencia es que cada palabra estará escrita al inverso.
// //     // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
// //     // Tu código:
// //     var array = frase.split(" ");
// //     var arrMirror = [];
// //     var newFrase;

// //     for (let i = 0; i < array.length; i++) {
// //         console.log(array[i].length)
// //         for (let j = array[i].length; j >= 0; j--) {
// //             arrMirror.push(array[i][j]);
// //             console.log(arrMirror);
// //         }
// //         if (i < array.length-1){
// //             arrMirror.push(" ");
// //         }
// //     }
// //     newFrase = arrMirror.join("");
// //     return newFrase;

// //  }

// //  var frase = "Juan Diego Hernandez Camacho";
// //  var result = asAmirror(frase);

// //  console.log(result);

//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
// // function capicua(numero) {
// //     // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
// //     // Caso contrario: "No es capicua".
// //     // Tu código:
// //     var arrNumero = String(numero).split("");
// //     var result = "";
// //     var x = 0;
// //     var i = 0;
// //     var j = arrNumero.length-1;

// //     do {
// //         x++;
// //         if (arrNumero[i] === arrNumero[j]){
// //             i = i + 1;
// //             j = j - 1;
// //             result = "Es capicua";
// //         } else {
// //             result = "No es capicua";
// //         }
// //     } while (x < arrNumero.length / 2);
// //     return result;
// // }

// // var numero = 123321;
// // var result = capicua(numero);

// // console.log(result);
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
// // function deleteAbc(string) {
// //     // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
// //     // Retorna el string sin estas letras.
// //     // Tu código:   
// //     var str = string.replace(/[abc]/ig,"");
// //     console.log(str);
    
// //     return(str);
// //  }

// // var string = "abcefgh";
// // var result = deleteAbc(string);
// // console.log(result);
//-----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------- 
// // function sortArray(arrayOfStrings) {
// // // Recibes un arreglo de strings.
// // // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
// // // de la longitud de cada string.
// // // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
// // // Tu código:

// // arrayOfStrings.sort((a, b) => {
// //     if (a.length == b.length) {
// //         return 0;
// //     } if (a.length < b.length) {
// //         return -1;
// //     }
// //     return 1;
// // });

// // return(arrayOfStrings);

    
// // }


// // var arrayOfStrings = ["You", "are", "beautiful", "looking"];
// // var result = sortArray(arrayOfStrings);
// // console.log(result);

//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
function buscoInterseccion(array1, array2) {
    // Recibes dos arreglos de números.
    // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
    // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
    // Si no tienen elementos en común, retornar un arreglo vacío.
    // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
    // Tu código:
    var conjuntoInterseccion = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]){
                conjuntoInterseccion.push(array1[i]);
            }
        }
    }
    return conjuntoInterseccion;
 }

 var array1 = [1, 2, 3, "f", 4, 5, 6];
 var array2 = [2, 3, "f", 0];
 var result = buscoInterseccion(array1, array2);
 console.log(result);


//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------

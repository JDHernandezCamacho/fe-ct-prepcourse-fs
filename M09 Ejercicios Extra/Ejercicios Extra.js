/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var entradas;
   entradas = Object.entries(objeto);
   return entradas;

   // var array = [];
   // for (const key in objeto) {
   //    array.push([key, objeto[key]]);
   //    return array;
   // }
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var letra;
    var contador = 0;
    var objeto = {};
    var objetoOrdenado = {};
    
    // Iterar cada una de las letras del string
    for (let i = 0; i < string.length; i++) {
        letra = string[i];
        var n = 0;
        //Comparando las letras iguales
        do {
            if (letra == string[n]){
                contador = contador + 1;
            }
            n = n + 1;
        } while (n <= string.length);
        // Agregando las claves al objeto
        objeto[letra] = contador;
        contador = 0;
    }
    //Para ordenar las claves dentro del objeto
   var claves = Object.keys(objeto);
   claves.sort();
   //Integrando los pares a las claves (valores a sus respectivas claves)
   claves.forEach(element => {
      objetoOrdenado[element] = objeto[element];
   });
   return objetoOrdenado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var array = string.split("");
   var arrayDistribuido = [];

   for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i].toUpperCase()){
         arrayDistribuido.push(array[i]);
      } 
   }

   for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i].toLowerCase()){
         arrayDistribuido.push(array[i]);
      }
   }
   return(arrayDistribuido.join(""));
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var array = frase.split(" ");
   var arrMirror = [];
   var newFrase;

   for (let i = 0; i < array.length; i++) {
      for (let j = array[i].length; j >= 0; j--) {
         arrMirror.push(array[i][j]);
      }
      if (i < array.length-1){
         arrMirror.push(" ");
      }
   }
   newFrase = arrMirror.join("");
   return newFrase;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var arrNumero = String(numero).split("");
    var result = "";
    var x = 0;
    var i = 0;
    var j = arrNumero.length-1;

    do {
        x++;
        if (arrNumero[i] === arrNumero[j]){
            i = i + 1;
            j = j - 1;
            result = "Es capicua";
        } else {
            result = "No es capicua";
        }
    } while (x < arrNumero.length / 2);
    return result;
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
  
   var string = string.replace(/["abc"]/ig,"");
   return string;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a, b) => {
      if (a.length == b.length) {
          return 0;
      } if (a.length < b.length) {
          return -1;
      }
      return 1;
  });
  return arrayOfStrings;
}

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

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

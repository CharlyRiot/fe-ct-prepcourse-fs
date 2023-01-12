/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   if (x > y){
      return (x);
   }else if (x < y){
      return (y);
   }else {
      return (y);
   }
}

function mayoriaDeEdad(edad) {
   //Determinar si la persona según su edad puede ingresar a un evento.
   //Si tiene 18 años ó más, devolver --> "Allowed"
   //Si es menor, devolver --> "Not allowed"
   if(edad >= 18) {
     return "Allowed";
   }
   else {
     return "Not allowed";
   }
 }

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   if (status === 1){
      return "Online";
   } else if(status === 2){
      return "Away";
   } else {
      return "Offline";
   }
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   if (idioma === "aleman"){
      return "Guten Tag!";
   }else if (idioma === "mandarin"){
      return "Ni Hao!"
   }else if (idioma === "ingles"){
      return "Hello!";
   }else{
      return "Hola!";
   }
}

function colors(color) {
   //La función recibe un color. Devolver el string correspondiente:
   //En caso que el color recibido sea "blue", devuleve --> "This is blue"
   //En caso que el color recibido sea "red", devuleve --> "This is red"
   //En caso que el color recibido sea "green", devuleve --> "This is green"
   //En caso que el color recibido sea "orange", devuleve --> "This is orange"
   //Caso default: devuelve --> "Color not found"
   //Usar el statement Switch.
   switch(color) {
     case "blue":
       return "This is blue";
     case "red": 
       return "This is red";
     case "green":
       return "This is green";
     case "orange":
       return "This is orange";
     default: 
     return "Color not found";
   }
 }

function esDiezOCinco(num) {
   // Retornar "true" si "num" es 10 o 5.
   // De lo contrario, retornar "false".
   // Tu código:
  if (num ===10 || num ===5){
   return true;
  }else{
   return false;
  }

}

function estaEnRango(num) {
   // Retornar "true" si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar "false".
   // Tu código:
   if (num <50 && num >20){
      return true;
   }else {
      return false;
   }
}

function esEntero(num) {
   // Retornar "true" si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna "false".
   // Tu código:
   return num % 1 === 0;
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // De lo contrario, retorna el número.
   // Tu código:
   if(num % 15 === 0) return 'fizzbuzz';
   if(num % 3 === 0) return 'fizz';
   if(num % 5 === 0) return 'buzz';
   return num;
 
}

function operadoresLogicos(num1, num2, num3) {
   //La función recibe tres números distintos. 
   if(num1 === 0 || num2 === 0 || num3 === 0) {
       return "Error";
   }
   // Si num1 es mayor a num2 y num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
   if(num1 > 0 && num1 > num2 && num1 > num3) {
       return "Número 1 es mayor y positivo";
   }
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
   if(num1 < 0 || num2 < 0 || num3 < 0) {
       return "Hay negativos";
   }
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   if(num3 > num1 && num3 > num2) {
       return num3 + 1;
   }
   return false;
}


function esPrimo(num) {
   // Retornar True si "num" es primo.
   // De lo contrario retorna False.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
  if( num < 2) return false; //esta linea resuelve que se ingrese 1 o 0 o algun numero negativo
  if(num === 2) return true; //en esta se resuelve que se ingrese directamente el unico primo que es par: 2
  for(var i = 2; i < num; i++){//"i" vale 2, y para que el bucle inicie, el numero ingresado debe ser menor a 2
   //Pues no hay numeros primos menores a 2. De ahí toda comparación se hará con cualquier numero mayor a 2
    if(num % i === 0) {//aqui se resuelve: se comprueba si num es divisible por el valor de i, si sí entonces no es primo
      return false;//retorna falso por la linea anterior
    }
  }
  return true;//en caso de toparse con el segudo numero primo o sea 3, JS devuelve true porque si pudo dividir.
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if(valor === true){
      return "Soy verdadero"
    }
    return "Soy falso"   
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar True.
   // Caso contrario, retornar False.
   // Tu código:
   if(num > 99 && num< 1000){
      return true
    }
    return false
}

function doWhile(numero) {
   //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
   //Retornar el valor final.
   //Usar el bucle do ... while.
   var a = numero;
   var i = 0;
   do {
     i = i + 1;
     a = a + 5;
   }
   while(i < 8);
   return a;
 }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};

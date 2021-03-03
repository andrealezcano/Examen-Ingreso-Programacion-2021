//Nombre,
////estado civil ("soltero", "casado" o "viudo"),
//edad( solo mayores de edad, mas de 17),
//temperatura corporal(validar por favor)
//y sexo (validar).
//NOTA:el precio por pasajero es de $600.
//Se debe informar (solo si corresponde):
//a) La cantidad de personas con estado "viudo" de mas de 60 años.
//b) el nombre y edad de la mujer soltera mas joven.
//c) cuanto sale el viaje total sin descuento.
//d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

{
var nombre
var estadoCivil
var edad
var temperatura
var Sexo
var precioBase = 600


var contadorNombres=0
var contadorSolteros=0
var contadorViudos=0
var contadorCasados=0

do { nombre=prompt("Ingrese su nombre"))
  if (nombre!="") {

    contadorNombres++}
  
} while (nombre);

do { estadoCivil=prompt("Ingrese su estado civil")

 if ( estadoCivil=="Soltero") {

  contadorSolteros++}

  else if (estadoCivil=="Viudo" ){
	  contadorViudos++
  }
   
  else{
	  contadorCasados++
  }
  
} while (estadoCivil);

do {
	 
	edad=(prompt(parseInt("Ingrese su edad"))
	
  if(edad>60 && estadoCivil==Viudo){
	  contadorViudos++
  }

} while (edad>17);

//a) La cantidad de personas con estado "viudo" de mas de 60 años.

 contadorViudos

//b) el nombre y edad de la mujer soltera mas joven.

//c) cuanto sale el viaje total sin descuento.

//d) 








}



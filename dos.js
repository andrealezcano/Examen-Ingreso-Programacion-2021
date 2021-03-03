//datos solicitados son:
//nombre
//Tipo curasada("libre";"presencial";"remota")
//cantidad de materias( mas de cero y menos de 8)
////Sexo ( femenino , masculino , no binario)
//Nota promedio (entre 0 y 10)
//edad (validar)
//se debe informar de existir, o informar que no existe , en el caso que corresponda.
//a) El nombre del mejor promedio que no sea masculino
//b) El nombre del mas joven de los alumnos entre los que la dan libre
//c) El promedio de nota por sexo
//d) La edad y nombre del que cursa mas materias que no sean en forma remota

{

var tipoDeCursada
var cantidadMaterias
var Sexo
var nota
var edad
var nombre
var respuesta 
var promedioFemenino

var acumuladorNotas=0
var notasFemenina=0
var notasMasculina=0
var notasNobinaries=0
var cantidadlibres=0
var cantidadPresencial=0
var cantidadRemoto=0
var contadorMasculino=0
var contadorFemenino=0
var contadorNobinario=0
var acumuladorEdades=0



do { nombre=prompt("Ingrese su nombre")

 if (nombre!="") {

  acumuladorNombres++
   
  
} while (nombre);


do {
  tipoDeCursada=prompt(parseInt("Ingrese el tipo de cursada: libre, presencial o remota"))

   if(respuesta==libre){

    cantidadlibres++
   }
   else if(respuesta==presencial){

    cantidadPresencial++
   }
   else {

    cantidadRemoto++
   }


} while (tipoDeCursada!="");

do {
  sexo=prompt("Ingrese su sexo: masculino, femenino o no binario")

  if(respuesta=="masculino"){

    contadorMasculino++
   }
   else if(respuesta=="femenino"){

    contadorFemenino++
   }
   else {

    contadorNobinario++
   }


} while (sexo!="");

do {
  nota = prompt(parseInt("Ingrese su nota"))

  if(Sexo=="masculino"){

    notasMasculina++
   }
   else if(respuesta=="femenino"){

    notasFemenina++
   }
  
  
   else {

    notasNobinaries++
   }


} while (nota>0&&nota<11);

do {
  edad=prompt(parseInt("Ingrese su edad"))

  if(Sexo!="Masculino"){
    
    promedioFemenino++
   


  }
 

} while (edad>18);


//a) El nombre del mejor promedio que no sea masculino
promedio=acumuladorNotas-(notasNobinaries&&notasMasculina)


//b) El nombre del mas joven de los alumnos entre los que la dan libre


//c) El promedio de nota por sexo
promedio = notasMasculina%acumuladorNotas
promedio =notasMasculina%acumuladorNotas

//d) La edad y nombre del que cursa mas materias que no sean en forma remota









}


}

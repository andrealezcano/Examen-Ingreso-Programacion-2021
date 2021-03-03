//Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
//de cada una debo obtener los siguientes datos:
//l nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
//el precio (validar entre 100 y 300),
//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
//el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
//Se debe Informar al usuario lo siguiente:
//a) El promedio de cantidad por tipo de producto
//b) El tipo de inflamable con más cantidad de unidades en total de la compra
//c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
//d) la marca y tipo del más caro de los productos

{
	
	var productoIngresado
    var precioIngresado
    var unidades
	var tipoInflamable
	var cantidad
	var ALCOHOL
	var QUAT
	var IAC
	var promedioAlcohol
	var promedioQuat
	var promedioIac

	var inflamableConMasCantidad=0
	var cantidadTipoDeProducto=0
	var unidadesIAC=0
	var unidadesAlcohol=0
	var unidadesQuat=0
	var masProductoMasCaro=0
	var inflamableAlcohol=0
	var inflamableIac=0
	var inflamableQuat=0

	{ for (i=0; i<6; i++) {

     productoIngresado = prompt(parseInt("Ingrese el producto: ALCOHOL, IAC o QUAT "))

	     if (productoIngresado==ALCOHOL) {
			 
          unidadesAlcohol=unidadesAlcohol+productoIngresado

		  cantidadTipoDeProducto=cantidadTipoDeProducto+productoIngresado


		 } 
		
		 if (productoIngresado==IAC)
		 {

            unidadesIAC=unidadesIAC+productoIngresado

			cantidadTipoDeProducto=cantidadTipoDeProducto+productoIngresado
		 
		 }

		  else{

			unidadesQuat=unidadesQuat+productoIngresado
			cantidadTipoDeProducto=cantidadTipoDeProducto+productoIngresado
		 }
       
     precioIngresado= prompt (parseInt("Ingrese el precio del producto ingresado"))
       
       //valido precio
	   if (precioIngresado<100 || precioIngresado>300) {

         precioIngresado=prompt(parseInt("Ingrese nuevamente un producto entre 100 y 300"))
		   
	   } 

       tipoInflamable=prompt(parseInt("Ingrese el tipo de inflamable:ignífugo, combustible, explosivo"))

        if(tipoInflamable==ALCOHOL){

			inflamableAlcohol=inflamableAlcohol+tipoInflamable
 
		}
          if(tipoInflamable==QUAT){

			inflamableQuat=inflamableQuat+tipoInflamable}
		       
         else {

           inflamableIac=inflamableIac+tipoInflamable

		}
      






     //A)
           
      //unidades de alcohol

	 promedioAlcohol= cantidadTipoDeProducto%unidadesAlcohol

	 // unidades de iac

	 promedioIac=cantidadTipoDeProducto%unidadesIAC

	 //unidades quat

	 promedioQuat=cantidadTipoDeProducto%unidadesQuat

	 //B)
     











      document.write(" promedio de cantida de alcoho es " + promedioAlcohol)
      document.write(" promedio de cantida de iac es " + promedioIac)
	  document.write(" promedio de cantida de quat es " + promedioQuat)   
          










		











	}

  












	}








}

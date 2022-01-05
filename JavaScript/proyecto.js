// agregar producto y cantidad al carrito. 
// agregar otro producto y cantidad al carrito. No
// --pedir localidad y calcular envio. 
// -- calcular precio por cuotas y el interes que tenga.  


let precioPulAcBlanco = 1600;
let envioCapital = 500;
let envioGBA = 800;
let envioProv = 1200; 


function AgregarCarrito1 (precioPulAcBlanco) {   // creo la funcion

    let cuantos = parseInt(prompt("ingrese cuantos productos quiere.")); //pido cantidad
    precio1 = precioPulAcBlanco * cuantos;                                 //calculo precio de la cantidad
    let Total = (precio1 + tipoDeEnvio (envioCapital, envioGBA));   // calculo el el total sumandole la funcion de envios
    alert ("El precio total es de : $"+  Total)  //muestro por alerta al user el total

}

function tipoDeEnvio (envioCapital, envioGBA) {    //creo la funcion para que el user elija el tipo de envio

    let destino = prompt("ingrese Capital Federal , Gran Buenos Aires o Provincia");  //pido que ingrese el destino

    if (destino == "Capital Federal" || destino == "capital federal") { //condiciono los ingresos
        
        alert("el envio es de :"+ envioCapital);

        return envioCapital
    }
    else if (destino == "Gran Buenos aires" || destino == "gran buenos aires"){

        alert("el envio es de :"+ envioGBA)
        return envioGBA
    }
    else if ( destino == "Provincia" || destino == "provincia" ) {
        
        alert("el envio es de :"+ envioProv);
        return envioProv
    }
    else{
        alert("ingrese una provincia en envio")
    }
}   

function cantidadDecuotas (  ) { // creo funcion para calcular precio por cuotas y su recargo

    let precio2 = parseInt(prompt("Calcule primero el precio y luego lo ingresa aca.")); // le pido el precio calculado.
    let cuotas = parseInt(prompt("ingrese cantidad de cuotas")); // pido cuantas cuotas.
    
    if (cuotas == 1){   // condiciono los valores y se los muestro al user. 
        alert (precio2) 
    }
    else if (cuotas == 3){
        alert("3 cuotas de: "+ (precio2 / cuotas))
    }
    else if (cuotas ==6 ) {
        recargo= (precio2 * 0.15);
        cuotaTotal = (precio2 + recargo) / 6;
        alert ( "6 cuotas de : "+cuotaTotal)
    }
     else if (cuotas ==12) {
        recargo = (precio2 * 0.35);
        cuotaTotal = (precio2+ recargo)/12
        alert ("12 cuotas de : " +cuotaTotal)
    }
    
}



function anillos (nombre , material , color , precio ,  id){
    this.nombre = nombre;
    this.material = material;
    this.color = color ;
    this.precio = precio ;
    this.id = id ;
    
}


let anillo1 = new anillos ("Anillo Solitario Corona" , "Oro" , "rosa" ,  10000, 10 );
let anillo2 = new anillos ( "Hojas Brillantes" , "plata esterlina " , "Plata brillante" ,5500,  12);
let anillo3 = new anillos ( "Banda Triple Cruzado Con Pavé" , "Recubrimiento en Oro " , "Dorado" ,9800,  13);
let anillo4 = new anillos ( " Banda Pétalos De Rosa" , " plata esterlina" , "Plata brillante" ,5400,  14);
let anillo5 = new anillos ( "Corona pulida" , "plata esterlina" , "Plata brillante" , 6200, 15);





function collarersYdiges ( nombre , material , color , conDije , conCadenita , precio , id  ){
    this.nombre = nombre ;
    this.material = material;
    this.color =color ;
    this.conDije = conDije;
    this.conCadenita =conCadenita;
    this.precio = precio ;
    this.id =id ;
}

let cadenitaYdije1 = new collarersYdiges ("Estrella Azul De Cenicienta De Disney" , "plata esterlina" , "Plata Brillante" , "si" , "no" , 8000,  200);
let cadenitaYdije2 = new collarersYdiges ("Dije Llave Del Corazón" , "plata esterlina" , "Plata brillante y Rojo Manzana" , "si" , "no" , 9100,  201);
let cadenitaYdije3 = new collarersYdiges ("Collar Cadena de cuentas" , "Recubrimiento en Oro Rosa de 14k" , "Oro Rosa" , "no" , "si" , 18000,  202);
let cadenitaYdije4 = new collarersYdiges ("Collar De Cuero Negro Con Pluma" , "Cuero Negro y plata esterlin" , "Ngero y Plata brillante" , "si" , "si" , 8400,  203);

/* console.log (cadenitaYdije1, cadenitaYdije2 , cadenitaYdije3, cadenitaYdije4); */


//--------------------- array y funcion para cuando tenga botones de agregar producto--------


  ////agrego un array vacio   
let Productos = [];
var total = 0 ;

function carritoAgregar (nombre){     //creo funcion para que se agregue el nombre al array carrito.
    carrito.push(nombre);
    console.log(carrito);
    
   
}
 function sumaProductos (precio){     //creo funcion para que se  agregue el precio al array carrito.
    Productos.push(precio);
    console.log(precio);
    for (i = 0 ; i < 1 ; i++) {

        total = total + precio;
        console.log ("El precio total es :" + total);
    }

}



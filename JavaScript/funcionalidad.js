

const clickAgregar = document.querySelectorAll("button");  // creo constante con el selector por class de button. 
// console.log(clickAgregar);

let tbody=document.querySelector('.tbody')  // creo constante con la classe tbody del html

let carrito = []; 



clickAgregar.forEach(btn =>{
    btn.addEventListener('click', addCarritoItem)   // recorro la constante clickAgregar y le digo que para cada btn le agregue el evento click con una funcion.
    
}) 


function addCarritoItem(e){             //creo la funcion

    const button = e.target;            // creo const buton con el target de ese elemnto para traer todo el boton      
    const item = button.closest('.card');  // creo constante y traigo al padre de ese boton. que tenga la clase card.
    const itemTitulo = item.querySelector(".card-title").textContent;   // const titulo con el selector de la clase card-title. y el texto que se encuentra en esa clase.
    const itemPrecio = item.querySelector('.precio').textContent;    //cont precio cn el selector de la clase precio y el texto que contiene
    const itemImg = item.querySelector('.card-img-top').src;        // const img  con el selector de la clase card-img-top con el link que se encuentra en cada imagen
    // console.log(itemTitulo, itemPrecio);
    // console.log(itemImg);
 
    
    const  nuevoItem ={         //creo un objeto con esa info extraida anteriormente
        title : itemTitulo,
        precio :itemPrecio, 
        imagen : itemImg,
        cantidad : 1,

    }
    
    addItemCarrito(nuevoItem);   // llamo a una funcion con la const nuevoItem
}

function addItemCarrito(nuevoItem){   //creo una nueva funcion llamada anteriormente
    
    const inputCantidad = tbody.getElementsByClassName ("cantidadElemento");   //creo const de la cantidad  creado en el tbody por medio de la clase


    for ( let i =0 ; i < carrito.length; i ++){            // para cuando i sea menor que el largo de carrito de una vuelta.

        if (carrito[i].title.trim() === nuevoItem.title.trim()){        // 
            carrito[i].cantidad ++;
            let inputValue = inputCantidad[i];
            inputValue.value++;
            console.log(carrito);
            console.log(carrito);
            totalCarrito()
            return null
        }
    }
    carrito.push(nuevoItem);          //  agrego a carrito ese nuevo item creado.
    renderCarrito();                     // llamo a la funcion 
    $(".offCarrito").append('<h3>Puede seguir agregando productos al carrito o aumentarle la cantidad</h3>')   //----- agrego titulo descriptivo on jquery-------

}


function renderCarrito(){           // creo esa funcion llamada anteriormente.
    tbody.innerHTML = ''                // le paso que a la class tbody se muestre vacio en el html. 
    carrito.map(item =>{                // recorro la variable carrito con .map y le agrego una funcion como parametro. 
        let tr =document.createElement('tr');   // creo una variable tr con un elemnto tr
        tr.classList.add('itemCarrito');        // a tr le creo una class itemCarrito.
        let contenido = `<th scope="row">1</th>       
                        <td class="table__productos">
                        <img class="imgCarrito" src=${item.imagen} alt="">
                        <h6 class="title">${item.title}</h6>
                        </td>
                        <td class="table__precio"><p>${item.precio}</p></td>
                        <td class="table__cantidad">
                        <input class ="cantidadElemento" type="number" min="1" value=${item.cantidad} >
                        <button class="delete btn btn-danger">x</button>
                        </td>`;
                            // le creo un contenido entre comillas (``) con las clases de bootstrap y le paso los elemento a utilizar imagen, precio y titulo.
        tr.innerHTML=contenido;   // le digo que a tr le pase por html la variable contenido.
        tbody.appendChild(tr);     // le digo que agregue cada tr creado en tbody.

        tr.querySelector(".delete").addEventListener('click', removeItemCarrito);
        tr.querySelector(".cantidadElemento").addEventListener('change', sumaCantidad);
    })
    totalCarrito();
    
    

    
}

function totalCarrito(){

    let total = 0;
    let itemCarritoTotal  = document.querySelector('.itemCarTotal');
    // let itemCarritoTotal = $(".itemCarTotal");
    carrito.forEach((item) =>{
        let precio = Number(item.precio.replace("$", ''));
        total = total + precio*item.cantidad;
    })
    itemCarritoTotal.innerHTML= `Total = $ ${total}`;
    $('.itemCarTotal').css('color', '#2c7da7');       //----------------------- Cambio color de la cuenta con jquery----------
    
    addLocalStorage()

}



function removeItemCarrito(e){

    const botonBorrar = e.target;
    const tr = botonBorrar.closest('.itemCarrito');
    const title = tr.querySelector('.title').textContent;
    
    for(let i = 0 ; i <carrito.length ; i ++){
        if (carrito[i].title.trim() === title.trim()){
            carrito.splice(i , 1);
            console.log("borrando")
            

        }
    }

    tr.remove();
    totalCarrito();
    $("h3").empty();  // ----------- borro el h3 con empty de jquery-----------   
}
  
function sumaCantidad(e){
    let sumaInput = e.target;
    let tr = sumaInput.closest(".itemCarrito");
    let title = tr.querySelector('.title').textContent;

    carrito.forEach(item =>{
        if(item.title.trim() === title){
            sumaInput.value < 1 ? (sumaInput.value =1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            
            totalCarrito();
        }
        
    })
}

function addLocalStorage(){
    localStorage.setItem('carrito',JSON.stringify(carrito))
}

window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
        carrito=storage;
        renderCarrito()
    }
}
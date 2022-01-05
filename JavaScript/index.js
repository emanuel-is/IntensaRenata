const express = require('express');
const app = express();


// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
    access_token: 'APP_USR-3445499910542999-010423-3fee432d4af76693e8ae02f0eba25aa7-1051198483'
  });

//routes

app.get('/checkout', (req, res)=>{
              
// Crea un objeto de preferencia
let preference = {
    items: [
      {
        title: 'Mi producto',
        unit_price: 100,
        quantity: 1,
      }
    ]
  };
  
  mercadopago.preferences.create(preference)
  .then(function(response){
 
    
  }).catch(function(error){
    console.log(error);
  });
  
});


//servidor

app.listen(3000, () =>{
    console.log("server on port 3000")
})
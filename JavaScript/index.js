

const express = require('express');
const app = express();
const bodyParser= require('body-parser');

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

//middleware
app.use(bodyParser.urlencoded({extended:false}))


// Agrega credenciales
mercadopago.configure({
    access_token: 'APP_USR-3445499910542999-010423-3fee432d4af76693e8ae02f0eba25aa7-1051198483'
  });

//routes

app.post('/checkout', (req, res)=>{
// Crea un objeto de preferencia
  let preference = {
      items: [
        {
          title:"Productos",
          unit_price: 50000,
          quantity: 1,
        }
      ],
      back_urls:{
        success:"http://localhost:3000/feedback",
        failure:"http://localhost:3000/feedback",
        pending:"http://localhost:3000/feedback"
      },
      auto_return:"approved",

    };
  
  mercadopago.preferences.create(preference)
  .then(function(response){
    
  /*  console.log(response.body);
    res.send('checkout'); */
   res.redirect(response.body.init_point)

  }).catch(function(error){
    console.log(error);
  });
  
});


//servidor

app.listen(3000, () =>{
    console.log("server on port 3000")
})
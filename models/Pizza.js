const {Schema, model} = require('mongoose'); 


//create the schema with data wanted 
const PizzaSchema = new Schema({
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    size: {
      type: String,
      default: 'Large'
    },
    //empty brackets indicate an array as data type, but you can also just write Array instead too
    toppings: []
  });


// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;
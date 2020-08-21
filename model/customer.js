const mongoose = require('mongoose');



var Schema = mongoose.Schema;

var CostumerSchema = new Schema({

    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
});

module.exports = mongoose.model('Costumer', CostumerSchema);
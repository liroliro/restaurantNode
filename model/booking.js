const mongoose = require('mongoose');



var Schema = mongoose.Schema;

var BookingSchema = new Schema({

    id: number,
    date: string,
    time: string,
    quantity: number,
    message: string,
    customerId: number,
});

module.exports = mongoose.model('Booking', BookingSchema);
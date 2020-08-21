const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BookingSchema = new Schema({
    id: Number,
    date: String,
    time: String,
    quantity: Number,
    message: String,
    customerId: Number,
});

const BS = mongoose.model('Booking', BookingSchema);

module.exports = BS;
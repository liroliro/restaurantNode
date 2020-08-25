const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BookingSchema = new Schema({
	// id: Number,
	date: String,
	time: String,
	guests: Number,
	message: String,
	customerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer',
	},
});

const BS = mongoose.model('Booking', BookingSchema);

module.exports = BS;

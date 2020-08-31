const express = require('express');
const router = express.Router();

// const nodeMailer = require("nodemailer");
// const sendGridTransport = require("nodemailer-sendgrid-transport");

const BookingModel = require('../model/booking');
const CustomerModel = require('../model/customer');

router.get('/bookings', async (req, res) => {
	const bookings = await BookingModel.find();

	res.send(bookings);
});

router.get('/customers', async (req, res) => {
	const customers = await CustomerModel.find();
	res.send(customers);
});

router.post('/', async (req, res) => {
	const user = await CustomerModel.findOne({ email: req.body.email });

	if (!user) {
		new CustomerModel({
			firstName: (string = req.body.firstName),
			lastName: (string = req.body.lastName),
			email: (string = req.body.email),
			phone: (string = req.body.phone),
		})
			.save()
			.then(async () => {
				const newUser = await CustomerModel.findOne({ email: req.body.email });

				new BookingModel({
					date: (number = req.body.date),
					time: (number = req.body.time),
					guests: (number = req.body.guests),
					message: (string = req.body.message),
					customerId: (string = newUser._id),
				}).save();
			});
	} else {
		new BookingModel({
			date: (number = req.body.date),
			time: (number = req.body.time),
			guests: (number = req.body.guests),
			message: (string = req.body.message),
			customerId: (string = user._id),
		}).save();
	}
});

module.exports = router;

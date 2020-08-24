const express = require("express");
const router = express.Router();
const config = require("../config/config");

// const nodeMailer = require("nodemailer");
// const sendGridTransport = require("nodemailer-sendgrid-transport");

const BookingModel = require('../model/booking')
const CustomerModel = require('../model/customer')


router.get('/', async(req,res) => {
    res.render('index')
});

router.get('/booking', async(req,res) => {
    res.render('booking')
});

router.post('/', async (req, res) => {
    const user = await CustomerModel.findOne({ email: req.body.email });

    await new CustomerModel({
        firstName: string = req.body.firstName,
        lastName: string = req.body.lastName,
        email: string = req.body.email,
        phone: string = req.body.phone,
    }).save()

    console.log('customer posted')
}); 


router.post('/booking', async(req,res)=> {
    const booking = await CustomerModel.findOne({ id: req.body._id });

    await new BookingModel({
        date: number = req.body.date,
        time: number = req.body.time,
        quantity: number = req.body.quantity,
        message: string = req.body.message,
        customerId: string = booking._id
    }).save()

    console.log('booking posted')
})



module.exports = router; 
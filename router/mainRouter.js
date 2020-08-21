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



router.post('/', async (req, res) => {
    await new CustomerModel({
        id: number = 1,
        firstName: string = 'Hej',
        lastName: string = 'Do',
        email: string = 'hej@email.com',
        phone: string = '123457890',
    }).save()

    console.log('hej det funkar')
}); 



module.exports = router; 
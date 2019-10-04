const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const keys = require('./config/keys')
const validateMailInput = require('./validation/mail');
const app = express();



// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.post('/api/send',(req,res)=>{
    const { errors, isValid } = validateMailInput(req.body);

    // Check Validation
    if (!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
    }
    const htmlEmail = `
    <p> Some one send mail in your portfollio</p>
    <h3> Contact detail </h3>
    <p> Name: ${req.body.name}</p>
    <p> Email: ${req.body.email}</p>
    <p> Message: ${req.body.message}</p>
    `

    var transporter = nodemailer.createTransport({
        service: "gmail",
        host:'stmp.gmail.com',
        port: 587,
        secure: true,
        auth:{
            user: keys.emailname,
            pass: keys.mailpass
        } 
    })

    const mailOptions ={
        from: `"Job Portfollio" <${keys.emailname}>` ,
        to: keys.emailname,
        subject: `Porfollio mail ${req.body.email}`,
        html: htmlEmail
    }

    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err);
        }
        else{
            console.log(info);
            
        }
    })

    res.json({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        success: 'You have successfully sent email !'
    })
})

app.listen(PORT,()=>{
    console.log(`Server listen on PORT ${PORT}` );  
})


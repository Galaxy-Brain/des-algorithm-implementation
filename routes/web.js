const Router = require('express').Router();
const path = require('path');
const EmailJS = require('emailjs-com');
const CryptoJS  = require('crypto-js');
const dotenv = require('dotenv')

dotenv.config('./.env')
const{SERVICE_ID,TEMPLATE_ID,USER_ID, from_name} = process.env
const {Crypto} = require('../models')
const otpgen = require('otp-generator')


Router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/../public/index.html'))
})


Router.get('/allrecords', (req,res)=> {
    Crypto.findAll()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json({
            data:err.response,
        })
    });
    
})

Router.post('/encryption', async (req, res)=>{
    const {message, email} = req.body
    const pass = otpgen.generate(6, {
        digits:true,
        alphabets:false,
        upperCase:false,
        specialChars:false
    })
    const params = {
        message: CryptoJS.DES.encrypt(message, pass).toString(),
        to_email: email,
        from_name,
        pass
        
    }
    EmailJS.send(SERVICE_ID, TEMPLATE_ID, params, USER_ID)
    .then((result) => {
        console.log(result)
        if(result.status === 200){
            Crypto.create({
                message: CryptoJS.DES.encrypt(message, pass).toString(),
                rec_email: req.body.email
            })
            .then((result) => {
                res.json({
                    status:200,
                    data:result
                })
            }).catch((err) => {
                res.json({
                    status:500,
                    message:'Database Error'
                })
            });
            
        }   
    }).catch((err) => {
        res.json({
            status:500,
            message:err
        })
    });
    
        
    
})



Router.post('/decryption', async (req, res)=>{
    const {message, password} = req.body;
    const result = await CryptoJS.DES.decrypt(message,password)
    try {
        if(result.status ===200) {
            res.json({
                message:res.data,
                status:200
            })
        }
    } catch (err) {
        res.json({
            status:500,
            message:'Server Error'
        })
    }
})



module.exports = Router
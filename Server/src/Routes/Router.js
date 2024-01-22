const {Router} = require ('express')
const nodemailer = require('nodemailer')

const trasporter = nodemailer.createTransport({
    host:"smtp.zoho.com",
    port: 465,
    secure: true,
    auth:{
        user:"jefferson.baldion.b@zohomail.com",
        pass:"xamPtXKLTpUB",
    }
})
const router = Router()

router.post("/mail", async(req, res)=>{
    const {name, phone, mail, message} = req.body
    try {
        const info = await trasporter.sendMail({
            from:"jefferson.baldion.b@zohomail.com",
            to:"jefferson.baldion.b@gmail.com",
            subject:`${name}, Portafolio`,
            text: message,
            html:`<b>${message}</b> <br></br> <b> contactanos: ${phone} email: ${mail} </b>`
        })
        res.status(200).send("Mensaje enviado con exito.")
    } catch (error) {
         console.error(error)

    }
})

module.exports = router;
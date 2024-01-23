export default function validate(form){
    const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let error = {}
    if(form.name.length<=0){
        error = {...error, errorName:"Este campo es obligatorio"}
    }
    if(form.phone<=0){
        error = {...error, errorPhone:"Este campo es obligatorio"}
    }
    if(form.mail.length<=0){
        error = {...error, errorMail:"Este campo es obligatorio"}
    }
    if(!regexMail.test(form.mail)){
        error = {...error, errorMail:"Este correo electronico no es valido"}
    }
    if(form.message.length<=0 || form.message.length>250){
        error = {...error, errorMessage:"El mensaje debe contener minimo 1 caracter y maximo 250"}
    }
    return error
}
window.addEventListener('load', () => {

    let $ = (element) => document.querySelector(element);

    /* Expresiones regulares */
    const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/
    const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    const regExLetter = /^[A-Z]+$/;

    let form = $("#form")
    let name = $("#name")
    let lastName = $("#lastName")
    let phoneNumber = $("#phoneNumber")
    let gender = $("#gender")
    let email = $("#email")
    let city = $("#city")
    let image = $("#signinFile")
    let terms = $("#terminos")
    let pass = $("#pass")
    let pass2 = $("#pass2")
    

    name.addEventListener("blur",() => {
        switch (true) {
            case !name.value:
                $("#namesContainer").innerHTML = "<small>El campo nombre es obligatorio</small>"
                name.style.border = "1.5px solid red"
                break;
            case name.value.length < 2:
                $("#namesContainer").innerHTML = "<small>El campo nombre debe tener al menos 2 caracteres</small>"
                name.style.border = "1.5px solid red"
                break;
        
            default:
                $("#namesContainer").innerHTML = ""
                name.style.border = "1px solid black"
                break;
        }
    })
    lastName.addEventListener("blur",() => {
        switch (true) {
            case !lastName.value:
                $("#lastNameContainer").innerHTML = "<small>El campo apellido es obligatorio</small>"
                lastName.style.border = "1.5px solid red"
                break;
                case lastName.value.length < 2:
                    $("#lastNameContainer").innerHTML = "<small>El campo apellido debe tener al menos 2 caracteres</small>"
                    lastName.style.border = "1.5px solid red"
                    break;
            default:
                $("#lastNameContainer").innerHTML = ""
                lastName.style.border = "1px solid black"
                break;
        }
        
        })
        email.addEventListener("blur",() => {
            switch (true) {
                case !email.value:
                    $("#emailContainer").innerHTML = "<small>El campo email es obligatorio</small>"
                    email.style.border = "1.5px solid red"
                    break;
                    case !regExEmail.test(email.value):
                        $('#emailContainer').innerHTML = "<small>El email no coincide con un email valido</small>"
                        email.style.border = "1.5px solid red"
                        break;
                default:
                    $("#emailContainer").innerHTML = ""
                    email.style.border = "1px solid black"
                    break;
            
                }
            
            })
        phoneNumber.addEventListener("blur",() => {
            switch (true) {
                case !phoneNumber.value:
                    $("#phoneNumberContainer").innerHTML = "<small>El campo Celular es obligatorio</small>"
                    phoneNumber.style.border = "1.5px solid red"
                    break;
                case phoneNumber.value.length < 10:
                    $("#phoneNumberContainer").innerHTML = "<small>El campo Celular debe tener al menos 10 números</small>"
                    phoneNumber.style.border = "1.5px solid red"
                    break;
            
                default:
                    $("#phoneNumberContainer").innerHTML = ""
                    phoneNumber.style.border = "1px solid black"
                    break;
            }
        })
        city.addEventListener("blur",() => {
            switch (true) {
                case !city.value:
                    $("#cityContainer").innerHTML = "<small>El campo ciudad es obligatorio</small>"
                    city.style.border = "1.5px solid red"
                    break;
            
                default:
                    $("#cityContainer").innerHTML = ""
                    phoneNumber.style.border = "1px solid black"
                    break;
            }
        })
        pass.addEventListener('blur',() => {
            let error = {
                id: 5,
                elemento:"pass",
                mensaje: "La contraseña es obligatoria"
            }
            let variable = true
            switch (true) {
                case !pass.value:
                    $('#passContainer').innerHTML = "<small>La contraseña es obligatoria</small>"
                    pass.style.border = "1px solid red"
                    errores.forEach(e => {
                        if(e.id === 5 ){
                            e.mensaje = "La contraseña es obligatoria"
                            variable = false
                        }
                    });
                    if (variable) {
                        errores.push(error)
                    }
                    break;
                case !regExPass.test(pass.value):
                    $('#passContainer').innerHTML = "<small>La contraseña debe tener entre 6 y 12 caracteres <br> y contener una mayuscula, una minuscula y un numero</small>"
                    email.style.border = "1px solid red"
                    errores.forEach(e => {
                        if(e.id === 4 ){
                            e.mensaje = "La contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero"
                            variable = false
                        }
                    });
                    if (variable) {
                        errores.push(error)
                    }
                    break;
                default:
                    $('#passContainer').innerHTML = ""
                    pass.style.border = "1px solid black"
                    errores = errores.filter(error => {
                        return error.id !== 5
                    })
                    break;
            }
        }) 
        pass2.addEventListener('blur',() => {
            let error = {
                id: 6,
                elemento:"pass2",
                mensaje: "Debe confirmar su contraseña"
            }
            let variable = true
            
            switch (true) {
                case pass2.value != pass.value:
                    $('#passContainer2').innerHTML = "<small>Las contraseñas no coinciden</small>"
                    error.mensaje = "Las contraseñas no coinciden"
                    pass2.style.border = "1px solid red"
                    errores.forEach(e => {
                        if(e.id === 6 ){
                            variable = false
                        }
                    });
                    
                    if (variable) {
                        errores.push(error)
                    }
                
                    break;
                    case !pass2.value:
                        $('#passContainer2').innerHTML = "<small>La confirmacion de la contraseña no puede estar vacia</small>"
                        pass2.style.border = "1px solid red"
                        error.mensaje = "La confirmacion de la contraseña no puede estar vacia"
                        errores.forEach(e => {
                            if(e.id === 6 ){
                                variable = false
                            }
                        });
                        if (variable) {
                            errores.push(error)
                        }
                        break;
                        case pass2.value < 6:
                   $("#passContainer2").innerHTML = "<small>El campo debe tener al menos 6 digitos</small>"
                   pass2.style.border = "1px solid red"
                   break; 
                        
                default:
                    $('#passContainer2').innerHTML = ""
                    pass2.style.border = "1px solid black"
                    errores = errores.filter(error => {
                        return error.id !== 6
                    })
                    break;
            }

        }) 
        terminos.addEventListener('blur', (e) => {
            switch (true) {
             case !terminos.checked:
         $("#terminosContainer").innerHTML = "<small>Debe aceptar los terminos y condiciones</small>"
         terminos.style.border = "1px solid red"
         break;
 
     default:
         $("#terminosContainer").innerHTML = ""
         terminos.style.border = "1px solid black"
         break;
 }
         })
         image.addEventListener('change', function() {
            switch (true) {
                case !regExExt.exec(image.value):
                    $('#imagenContainer').innerHTML = "Solo se permite formatos: <br> (jpg|jpeg|png|jfif|gif|webp)"
                    validate.image = false
                    break;
                default:
                    $('#imagenContainer').innerHTML = null
                    validate.image = true
                    break;
            }
            funcValidate(validate)
        })
         



})
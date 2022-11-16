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
    let email = $("#email")
    let city = $("#city")
    let image = $("#signinFile")
    let terms = $("#terminos")
    let pass = $("#pass")
    let pass2 = $("#pass2")
    let buttonSubmit = $("#buttonSubmit")
    let submitContainer = $("#submitContainer")
    

    const validate = {
        name: false,
        lastName: false,
        phoneNumber: false,
        email: false,
        city: false,
        image: false,
        terms: false,
        pass: false,
        pass2: false
    }


    const funcValidate = (obj) => {
        let arr = Object.values(obj)
        console.log(arr);
        if (!arr.includes(false)) {
            buttonSubmit.disabled = false;
            buttonSubmit.classList.remove("invalid");
            submitContainer.innerHTML = "";
        } else {
            buttonSubmit.disabled = true
            submitContainer.innerHTML = "Tienes que completar los campos del formulario";
            submitContainer.style.margin = "10px 0";
            submitContainer.style.color = "red";
            buttonSubmit.classList.add("invalid");
        }
    }


    name.addEventListener("blur",() => {
        switch (true) {
            case !name.value:
                $("#namesContainer").innerHTML = "<small>El campo nombre es obligatorio</small>"
                name.style.border = "1.5px solid red"
                validate.name = false
                break;
            case name.value.length < 2:
                $("#namesContainer").innerHTML = "<small>El campo nombre debe tener al menos 2 caracteres</small>"
                name.style.border = "1.5px solid red"
                validate.name = false
                break;
        
            default:
                $("#namesContainer").innerHTML = ""
                name.style.border = "1px solid black"
                validate.name = true
                break;
                
        }
        funcValidate(validate)
    })
    lastName.addEventListener("blur",() => {
        switch (true) {
            case !lastName.value:
                $("#lastNameContainer").innerHTML = "<small>El campo apellido es obligatorio</small>"
                lastName.style.border = "1.5px solid red"
                validate.lastName = false
                break;
                case lastName.value.length < 2:
                $("#lastNameContainer").innerHTML = "<small>El campo apellido debe tener al menos 2 caracteres</small>"
                lastName.style.border = "1.5px solid red"
                validate.lastName = false
                break;
            default:
                $("#lastNameContainer").innerHTML = ""
                lastName.style.border = "1px solid black"
                validate.lastName = true
                break;
        }
        funcValidate(validate)
        })
        email.addEventListener("blur",() => {
            switch (true) {
                case !email.value:
                    $("#emailContainer").innerHTML = "<small>El campo email es obligatorio</small>"
                    email.style.border = "1.5px solid red"
                    validate.email = false
                break;
                case !regExEmail.test(email.value):
                    $('#emailContainer').innerHTML = "<small>El email no coincide con un email valido</small>"
                    email.style.border = "1.5px solid red"
                    validate.email = false
                break;
                default:
                    $("#emailContainer").innerHTML = ""
                    email.style.border = "1px solid black"
                    validate.email = true
                break;           
                }
                funcValidate(validate)           
            })
        phoneNumber.addEventListener("blur",() => {
            switch (true) {
                case !phoneNumber.value:
                    $("#phoneNumberContainer").innerHTML = "<small>El campo Celular es obligatorio</small>"
                    phoneNumber.style.border = "1.5px solid red"
                    validate.phoneNumber = false
                break;
                case phoneNumber.value.length < 10:
                    $("#phoneNumberContainer").innerHTML = "<small>El campo Celular debe tener al menos 10 números</small>"
                    phoneNumber.style.border = "1.5px solid red"
                    validate.phoneNumber = false
                break;
                default:
                    $("#phoneNumberContainer").innerHTML = ""
                    phoneNumber.style.border = "1px solid black"
                    validate.phoneNumber = true
                break;
            }
            funcValidate(validate)
        })
        city.addEventListener("blur",() => {
            switch (true) {
                case !city.value:
                    $("#cityContainer").innerHTML = "<small>El campo ciudad es obligatorio</small>"
                    city.style.border = "1.5px solid red"
                    validate.city = false
                    break;
            
                default:
                    $("#cityContainer").innerHTML = ""
                    phoneNumber.style.border = "1px solid black"
                    validate.city = true
                    break;
            }
            funcValidate(validate)
        })
        pass.addEventListener('blur',() => {
            switch (true) {
                case !pass.value:
                    $('#passContainer').innerHTML = "<small>La contraseña es obligatoria</small>"
                    pass.style.border = "1px solid red"
                    validate.pass = false
                break;
                case !regExPass.test(pass.value):
                    $('#passContainer').innerHTML = "<small>La contraseña debe tener entre 6 y 12 caracteres <br> y contener una mayuscula, una minuscula y un numero</small>"
                    email.style.border = "1px solid red"
                    validate.pass = false
                break;
                default:
                    $('#passContainer').innerHTML = ""
                    pass.style.border = "1px solid black"
                    validate.pass = true
                break;
            }
            funcValidate(validate)
        }) 
        pass2.addEventListener('blur',() => {
            switch (true) {
                case pass2.value != pass.value:
                    $('#passContainer2').innerHTML = "<small>Las contraseñas no coinciden</small>"
                    error.mensaje = "Las contraseñas no coinciden"
                    pass2.style.border = "1px solid red"
                
                break;
                case !pass2.value:
                    $('#passContainer2').innerHTML = "<small>La confirmacion de la contraseña no puede estar vacia</small>"
                    pass2.style.border = "1px solid red"
                    validate.pass2 = false
                    break;
                case pass2.value < 6:
                   $("#passContainer2").innerHTML = "<small>El campo debe tener al menos 6 digitos</small>"
                   pass2.style.border = "1px solid red"
                   validate.pass2 = false
                break;  
                default:
                    $('#passContainer2').innerHTML = ""
                    pass2.style.border = "1px solid black"
                    validate.pass2 = true
                break;
            }
            funcValidate(validate)
        }) 
        terms.addEventListener('blur', (e) => {
        switch (true) {
        case !terminos.checked:
            $("#terminosContainer").innerHTML = "<small>Debe aceptar los terminos y condiciones</small>"
            terminos.style.border = "1px solid red"
            validate.terms = false 
        break;
        default:
            $("#terminosContainer").innerHTML = ""
            terminos.style.border = "1px solid black"
            validate.terms = true
            break;
        }
        funcValidate(validate)
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

        
         
        /* form.addEventListener('submit',(e) => {
            
            e.preventDefault();
            submitContainer.innerHTML = "Tienes que completar los campos del formulario"
            submitContainer.style.margin = "10px 0"
            submitContainer.style.color = "red"
            buttonSubmit.classList.add("invalid");
            
            if(invalid.length == 1 ){
                buttonSubmit.classList.remove("invalid");
                submitContainer.innerHTML = ""
                form.submit()
             }
        })


        console.log(invalid); */
}) 
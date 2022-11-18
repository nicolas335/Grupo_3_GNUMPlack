window.addEventListener('load', function() {
    console.log('Vinculación exitosa');

    const $ = (dato) => this.document.querySelector(dato)
    const $all = (dato) => this.document.querySelectorAll(dato)

    let nombre = $('#name')
    let apellido = $('#lastName')
    let email = $('#email')
    let celular = $('#phoneNumber')
    let ciudad = $('#city')
    let imagen = $('#imagen')
    let btn = $('#btn')

    // Expresiones regulares
    let regExNumber = /^[A-Z]+$/i
    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/

    // Funcion para validar el formulario
    const funcValidate = (obj) => {
        let arr = Object.values(obj)
        console.log(arr);
        if (!arr.includes(false)) {
            btn.disabled = false
        } else {
            btn.disabled = true
        }
    }

    
    nombre.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#nameError').innerHTML = 'Debe ingresar su nombre'
                $('#nameError').style.color = 'red'
                validation.name = false                
                break;
                case !regExNumber.test(nombre.value.trim()):
                $('#nameError').innerHTML = 'Solo se aceptan letras'
                $('#nameError').style.color = 'red'
                validation.name = false                
                break;
            case this.value.trim().length < 3:
                $('#nameError').innerHTML = 'Debe ingresar al menos 3 caracteres'
                $('#nameError').style.color = 'red'
                validation.name = false   
                break
        
            default:
                $('#nameError').innerHTML = null
                validation.name = true
                break;
            }
            funcValidate(validation)
    })
    
    apellido.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#lastNameError').innerHTML = 'Debe ingresar su apellido'
                $('#lastNameError').style.color = 'red'
                validation.name = false                
                break;
            case !regExNumber.test(apellido.value.trim()):
                $('#lastNameError').innerHTML = 'Solo se aceptan letras'
                $('#lastNameError').style.color = 'red'
                validation.name = false
                break;
                case this.value.trim().length < 3:
                $('#lastNameError').innerHTML = 'Debe ingresar al menos 3 caracteres'
                $('#lastNameError').style.color = 'red'
                validation.name = false   
                break
        
            default:
                $('#lastNameError').innerHTML = null
                validation.name = true
                break;
            }
            funcValidate(validation)
    })

    email.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#emailError').innerHTML = 'Debe ingresar su email'
                $('#emailError').style.color = 'red'
                validation.email = false
                break;
            case !regExEmail.test(email.value):
                $('#emailError').innerHTML = 'Debe ingresar un email válido'
                $('#emailError').style.color = 'red'
                validation.email = false
                break
        
            default:
                $('#emailError').innerHTML = null
                validation.email = true
                break;
        }
    })

    celular.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#phoneNumberError').innerHTML = 'Debe ingresar su número de celular'
                $('#phoneNumberError').style.color = 'red'
                validation.celular = false
                break;
        
            default:
                $('#phoneNumberError').innerHTML = null
                validation.celular = true
                break;
        }
    })

    ciudad.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#cityError').innerHTML = 'Debe ingresar su ciudad'
                $('#cityError').style.color = 'red'
                validation.ciudad = false                
                break;
            case !regExNumber.test(ciudad.value.trim()):
                $('#cityError').innerHTML = 'Solo se permiten letras'
                $('#cityError').style.color = 'red'
                validation.ciudad = false                
                break
        
            default:
                $('#cityError').innerHTML = null
                validation.ciudad = true             
                break;
        }
    })

    imagen.addEventListener('change', function() {
        //console.log(this.value);
        switch (true) {
            case !regExExt.exec(imagen.value):
                $('#imagenError').innerHTML = 'Solo se permiten imagenes con formato (jpg|jpeg|png|jfif|gif|webp)'
                validation.imagen = false
                break;
            default:
                $('#imagenError').innerHTML = ''
                validation.imagen = true
                break;
        }
        funcValidate(validate)
    })

    let validation = {
        nombre: true,
        apellido: true,
        email: true,
        celular: true,
        ciudad: true,
        imagen: true
    }  

    funcValidate(validate)
})
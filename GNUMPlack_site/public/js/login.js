window.addEventListener('load', () => {

    let $ = (elemento) => document.querySelector(elemento)
    console.log("Login vinculado");

    const regExLetter = /^[A-Z]+$/;
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/
    const regExPass = /^(?=.*\d)(?=.*[a-z]).{6,12}$/;
    const regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    let form = $('#formulario')
    let email = $('#email')
    let inputPass = $('#pass')
    let btn = $('#btn')

    const validate = {
        email: false,
        pass: false,
    }
    const funcValidate = (obj) => {
        let arr = Object.values(obj)
        console.log(arr);
        if (!arr.includes(false)) {
            btn.disabled = false
        } else {
            btn.disabled = true
        }
    }


    let errores = [{
        id: 1,
        elemento: "email",
        mensaje: "El email es obligatorio"
    }, {
        id: 2,
        elemento: "inputPass",
        mensaje: "la contraseña es obligatoria"
    },
    ];


    email.addEventListener('blur', () => {
        let error = {
            id: 1,
            elemento: "email",
            mensaje: "El campo Email es obligatorio"
        }
        let variable = true
        switch (true) {
            case !email.value:
                $('#emailContainer').innerHTML = "<small>El campo Email es obligatorio</small>"
                email.style.border = "1px solid red"
                validate.email= false
                errores.forEach(e => {
                    if (e.id === 1) {
                        e.mensaje = "El campo Email es obligatorio"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case !regExEmail.test(email.value):
                $('#emailContainer').innerHTML = "<small>El email no coincide con un email valido</small>"
                email.style.border = "1px solid red"
                validate.email= false
                errores.forEach(e => {
                    if (e.id === 1) {
                        e.mensaje = "El email no coincide con un email valido"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#emailContainer').innerHTML = ""
                email.style.border = "1px solid black"
                validate.email= true
                errores = errores.filter(error => {
                    return error.id !== 1
                })
                break;
        }
        funcValidate(validate)
        console.log(errores);
    
    })
    inputPass.addEventListener('blur', () => {
        let error = {
            id: 2,
            elemento: "inputPass",
            mensaje: "La contraseña es obligatoria"
        }
        let variable = false
        switch (true) {
            case !inputPass.value:
                $('#passContainer').innerHTML = "<small>La contraseña es obligatoria</small>"
                inputPass.style.border = "1px solid red"
                validate.pass= false
                errores.forEach(e => {
                    if (e.id === 2) {
                        e.mensaje = "La contraseña es obligatoria"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case inputPass.value.length < 8:
                $('#passContainer').innerHTML = "<small>La contraseña debe tener un mínimo de 8 caracteres</small>"
                email.style.border = "1px solid red"
                validate.pass= false
                errores.forEach(e => {
                    if (e.id === 1) {
                        e.mensaje = "La contraseña debe tener un mínimo de 8 caracteres "
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#passContainer').innerHTML = ""
                inputPass.style.border = "1px solid black"
                validate.pass= true
                errores = errores.filter(error => {
                    return error.id !== 2
                })
                break;
        }
        funcValidate(validate)
        
    })
    funcValidate(validate)
    


    


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log(form.elements);
        if (errores.length > 0) {
            form.submit()
        }
    })
}
)


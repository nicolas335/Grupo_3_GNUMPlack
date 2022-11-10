window.addEventListener('load', () => {
    console.log('Vinculación exitosa');

    // Funciones para traer elementos del document
    const $ = (elemento) => document.querySelector(elemento)
    const $all = (elemento) => document.querySelectorAll(elemento)

    // Expresiones regulares
    let regExLetter = /^[a-zA-Z\sñáéíóúü]*$/
    let regExNumber = /^[+]?([0-9][0-9]?|150)$/
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/

    // Funcion para validar el formulario
    const funcValidate = (obj) => {
        let arr = Object.values(obj)
        console.log(arr);
        if (!arr.includes(false)) {
            btn.disabled = false
            //btn.style.backgroundColor = '#1a78fd'
        } else {
            btn.disabled = true
            //btn.style.backgroundColor = 'var(--Jorge)'
        }
    }

    let name = $('#name')
    let qualities = $('#qualities')
    let advantage = $('#advantage')
    let dimensions = $('#dimensions')
    let description = $('#description')
    let category = $('#category')
    let condition = $('#condition')
    let price = $('#price')
    let stock = $('#stock')
    let discount = $('#discount')
    let image = $('#image')
    let btn = $('#submit')


    // Validacion de inputs

    name.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('#nameError').innerHTML = 'Debe ingresar el nombre'
                this.classList.add('is-invalid')
                validate.name = false
                break;
            case !(this.value.trim().length > 5 && this.value.trim().length < 100):
                $('#nameError').innerHTML = 'El nombre debe tener al menos 5 caracteres y máximo 100 caracteres'
                this.classList.add('is-invalid')
                validate.name = false
                break;
            default:
                $('#nameError').innerHTML = ''
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.name = true
                break;
        }
        funcValidate(validate)
    })

    qualities.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('#qualitiesError').innerHTML = 'Debe ingresar las cualidades'
                this.classList.add('is-invalid')
                validate.qualities = false
                break;
            case !this.value.length > 600:
                $('#qualitiesError').innerHTML = 'Las cualidades no puede contener mas de 600 caracteres'
                this.classList.add('is-invalid')
                validate.qualities = false
                break;
            default:
                $('#qualitiesError').innerHTML = ''
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.qualities = true
                break;
        }
        funcValidate(validate)
    })

    advantage.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('#advantageError').innerHTML = 'Debe ingresar las ventajas'
                this.classList.add('is-invalid')
                validate.advantage = false
                break;
            case !this.value.length > 600:
                $('#advantageError').innerHTML = 'Las ventajas no puede contener mas de 600 caracteres'
                this.classList.add('is-invalid')
                validate.advantage = false
                break;
            default:
                $('#advantageError').innerHTML = ''
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.advantage = true
                break;
        }
        funcValidate(validate)
    })

    dimensions.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('#dimensionsError').innerHTML = 'Debe ingresar las dimensiones'
                this.classList.add('is-invalid')
                validate.dimensions = false
                break;
            case !this.value.length > 600:
                $('#dimensionsError').innerHTML = 'Las dimensiones no puede contener mas de 45 caracteres'
                this.classList.add('is-invalid')
                validate.dimensions = false
                break;
            default:
                $('#dimensionsError').innerHTML = ''
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.dimensions = true
                break;
        }
        funcValidate(validate)
    })

    description.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('#descriptionError').innerHTML = 'Debe ingresar la descripción'
                this.classList.add('is-invalid')
                validate.description = false
                break;
            case !this.value.length > 600:
                $('#descriptionError').innerHTML = 'La descripción no puede contener mas de 600 caracteres'
                this.classList.add('is-invalid')
                validate.description = false
                break;
            default:
                $('#descriptionError').innerHTML = ''
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.description = true
                break;
        }
        funcValidate(validate)
    })

    category.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#categoryError').innerHTML = 'Debe ingresar la categoria'
                this.classList.add('is-invalid')
                validate.category = false                
                break;  
            default:
                $('#categoryError').innerHTML = ''
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.category = true
                break;
        }
        funcValidate(validate)
    })

    condition.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#conditionError').innerHTML = 'Debe ingresar la condición'
                this.classList.add('is-invalid')
                validate.condition = false                
                break;  
            default:
                $('#conditionError').innerHTML = ''
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.condition = true
                break;
        }
        funcValidate(validate)
    })

    price.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#priceError').innerHTML = 'Debe ingresar el precio'
                this.classList.add('is-invalid')
                validate.price = false
                break;
            case this.value.trim()<0:
                $('#priceError').innerHTML = 'No puede ingresar un precio negativo'
                this.classList.add('is-invalid')
                validate.price = false
                break;
            case !(this.value.trim().length>2 && this.value.trim().length<9):
                $('#priceError').innerHTML = 'El precio no puede ser menor que 100 y mayor que 100 millones'
                this.classList.add('is-invalid')
                validate.price = false
                //this.value < 0 ? console.log('es menor que cero') : console.log('es mayor a cero');
                break;        
            default:
                $('#priceError').innerHTML = ''
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.price = true
                break;
        }
        funcValidate(validate)
    })

    stock.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#stockError').innerHTML = 'Debe ingresar el stock'
                this.classList.add('is-invalid')
                validate.stock = false
                break;
            case !(this.value.trim()>0 && this.value.trim().length<9):
                $('#stockError').innerHTML = 'No puede ingresar un stock negativo o mayor que 100 millones'
                this.classList.add('is-invalid')
                validate.stock = false
                break;
            /* case !this.value.trim().length<9:
                $('#stockError').innerHTML = 'El stock no puede ser mayor que 1 millon'
                this.classList.add('is-invalid')
                validate.stock = false
                break;  */       
            default:
                $('#stockError').innerHTML = ''
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.stock = true
                break;
        }
        funcValidate(validate)
    })

    discount.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#discountError').innerHTML = 'Debe ingresar el descuento'
                this.classList.add('is-invalid')
                validate.discount = false
                break;
            case !(this.value.trim()>0 && this.value.trim()<100):
                $('#discountError').innerHTML = 'No puede ingresar un descuento negativo o mayor que 100'
                this.classList.add('is-invalid')
                validate.discount = false
                break;  
            default:
                $('#discountError').innerHTML = ''
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.discount = true
                break;
        }
        funcValidate(validate)
    })

    image.addEventListener('change', function() {
        //console.log(this.value);
        switch (true) {
            case !regExExt.exec(image.value):
                $('#imageError').innerHTML = 'Solo se permiten imagenes con formato (jpg|jpeg|png|jfif|gif|webp)'
                validate.image = false
                break;
            default:
                $('#imageError').innerHTML = ''
                validate.image = true
                break;
        }
        funcValidate(validate)
    })

    const validate = {
        name: false,
        qualities: false,
        advantage: false,
        dimensions: false,
        description: false,
        category: false,
        condition: false,
        price: false,
        stock: false,
        discount: false,
        image: true
    }

    funcValidate(validate)
})
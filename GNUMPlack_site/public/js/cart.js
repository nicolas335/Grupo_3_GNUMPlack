window.addEventListener('load', function() {
    const $ = (e) => document.querySelector(e);
    const $all = (e) => document.querySelectorAll(e);

    let valorActual = 1;

    /* let precioSumado = 0; */

    const botonesMas = $all('.botonMas');
    const botonesMenos = $all('.botonMenos');
    const contadoresClass = $all('.p-contador');
    /* const precios = $all('.p-price'); */
    const comprar = $('.comprarOrden');

    comprar.addEventListener('submit', (e) => {
        e.preventDefault();
                Swal.fire({
                customClass: {
                    confirmButton: 'swalBtnColor',
                    cancelButton: 'swalBtnColor'
                },

                title: '¡Compra realizada con éxito!',
                text: "Tu compra ha sido realizada exitosamente, por favor retirala en tu tienda GNUMPlack mas cercana: https://goo.gl/maps/QXuYudfsFKX7jdco6",
                icon: 'success',
                background: "#ebebeb",
                showCancelButton: false,
                confirmButtonText: 'Genial!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },

                }).then((result) => {

                    if (result.isConfirmed) {
                        comprar.submit();
                    }

                })
    })
    for (let i = 0; i < contadoresClass.length; i++) {
        botonesMas[i].addEventListener('click', e => {
            /* precioSumado = 0; */
            valorActual++;
            valorActual < 1? valorActual = 1:contadoresClass[i].textContent = valorActual;
            /* precioSumado = precios[i].textContent * valorActual;
            precios[i].textContent = precioSumado; */
        })
        botonesMenos[i].addEventListener('click', e => {
            /* precioSumado = 0; */
            valorActual--;
            valorActual < 1? valorActual = 1: contadoresClass[i].textContent = valorActual;
            /* precioSumado = precios[i].textContent * valorActual;
            precios[i].textContent = precioSumado; */
    })
    }

      
})


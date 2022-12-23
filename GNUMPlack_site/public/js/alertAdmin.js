window.addEventListener('load', function() {
    let forms = document.querySelectorAll('form');
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', event => {
                event.preventDefault();
                Swal.fire({
                customClass: {
                    confirmButton: 'swalBtnColor',
                    cancelButton: 'swalBtnColor'
                },

                title: '¿Estas seguro que quieres eliminar el producto?',
                text: "El producto pasará a la sección de historial de productos.",
                background: "#ebebeb",
                showCancelButton: true,
                cancelButtonText:'Cancelar',
                confirmButtonText: 'Confirmar',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },

                }).then((result) => {

                    if (result.isConfirmed) {
                        forms[i].submit();
                    }

                })
        })
    }
    })
    
    
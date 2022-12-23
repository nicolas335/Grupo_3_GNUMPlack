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

                title: '¿Estas seguro?',
                text: "El producto se eliminará completamente de la base de datos",
                icon: 'warning',
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
    
    
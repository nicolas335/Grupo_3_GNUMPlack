window.addEventListener('load', function() {
    const $ = (e) => document.querySelector(e);
    const $all = (e) => document.querySelectorAll(e);

    let valorActual = 1;

    const botones = $all('.boton');
    const contador = $('#p-cantidad');
    const contadoresClass = $all('.p-contador');


    botones.forEach((boton, i) =>{

        boton.addEventListener('click', e => {

            const estilos = e.currentTarget.classList;

            if(estilos.contains('mas')){
                valorActual++;
                
            }else if(estilos.contains('menos')){
                valorActual--;

            }else{
                valorActual = 1;
            }

            
            valorActual < 1? valorActual = 1: contador.textContent = valorActual;
            
            
        })
    })
        
  
   
})


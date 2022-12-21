/* window.addEventListener('load', function() {
    const $ = (e) => document.querySelector(e);
    const $all = (e) => document.querySelectorAll(e);

    let valorActual = 1;
    let sumaTotal = 0;

    const botones = $all('.boton');
    const contador = $('#p-cantidad');
    const prices = $all('.p-price');
    const total = $('#total');


    botones.forEach(boton =>{
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
            console.log(e);
        })
    })
        
   prices.forEach(p => {
    sumaTotal += +p.textContent
   });
   total.textContent = sumaTotal
   
}) */


window.addEventListener('load', function() {

const $ = (tag) => document.querySelector(tag);


  

    
 
 });

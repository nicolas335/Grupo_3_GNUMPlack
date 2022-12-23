window.addEventListener('load', function() {
    const $ = (e) => document.querySelector(e);
    const $all = (e) => document.querySelectorAll(e);

    let valorActual = 1;

    let precioSumado = 0;

    const botonesMas = $all('.botonMas');
    const botonesMenos = $all('.botonMenos');
    const contadoresClass = $all('.p-contador');
    const precios = $all('.p-price');

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


"use strict";

// MILESTONE 2:
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci 
// dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, 
// ma costruito dinamicamente attraverso JavaScript.

// 1. Creo l'ARRAY con le immagini del carosello e la variabile del container degli elementi
//    che userò per appendere il box contenente l'immagine
// 2. Creo un ciclo FOR per inserire le immagini dinamicamente

const images = [ "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg" ];
const itemsContainer = document.querySelector('.items');

for (let i = 0; i < images.length; i++) {
    console.log(images[i]);
    const boxItem = document.createElement('div');
    boxItem.classList.add('box-item');
    if ( i === 0 ) {
        boxItem.classList.add('active');
    }
    const img = document.createElement('img');
    img.setAttribute( "src", images[i] );
    boxItem.append(img);
    itemsContainer.append(boxItem);
}

// MILESTONE 3:
// 3. Creo una variabile che mi permetta di cambiare immagine all'evento click del bottone
// 4. Creo un evento click che mi permetta di nascondere l'immagine precedente e rendere attiva
//    l'immagine successiva nel caso del bottone NEXT e viceversa nel caso del bottone PREVIOUS
let active = 0;
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    if( active === images.length ) {
        active = 0;
    } 
    itemsContainer.querySelectorAll('.box-item')[active].classList.remove('active');
    active = active + 1;
    itemsContainer.querySelectorAll('.box-item')[active].classList.add('active');
});

const previous = document.querySelector('.previous');

previous.addEventListener('click', function(){
    if( active === images.length ) {
        active = 0;
    } 
    itemsContainer.querySelectorAll('.box-item')[active].classList.remove('active');
    active = active - 1;
    itemsContainer.querySelectorAll('.box-item')[active].classList.add('active');
});

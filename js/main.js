"use strict";

// MILESTONE 2:
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci 
// dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, 
// ma costruito dinamicamente attraverso JavaScript.

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
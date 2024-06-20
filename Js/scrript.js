// carousel 
let image = 0;

function prochaineimage() {
    const carousel = document.querySelector('.carousel');
    image++;
    if (image >= 2) {
        image = 0;
    }
    const offset = -image * 100; //pour deplacer l'image en faisant toute sa taille donc 100%
    carousel.style.transform = `translateX(${offset}%)`; //déplacer l'image d'après la taille de la ligne au dessus
}

setInterval(prochaineimage, 4000);
// fin carousel 


// carousel 
let img = 0;

function prochaineimage1() {
    const carousel1 = document.querySelector('.carousel1');
    img++;
    if (img >= 6) {
        img = 0;
    }
    const offset1 = -img * 100; //pour deplacer l'image en faisant toute sa taille donc 100%
    carousel1.style.transform = `translateX(${offset1}%)`; //déplacer l'image d'après la taille de la ligne au dessus
}

setInterval(prochaineimage1, 4000);
// fin carousel 

// carousel 
let img2 = 0;

function prochaineimage2() {
    const carousel2 = document.querySelector('.carousel2');
    img2++;
    if (img2 >= 4) {
        img2 = 0;
    }
    const offset2 = -img2 * 100; //pour deplacer l'image en faisant toute sa taille donc 100%
    carousel2.style.transform = `translateX(${offset2}%)`; //déplacer l'image d'après la taille de la ligne au dessus
}

setInterval(prochaineimage2, 4000);
// fin carousel 
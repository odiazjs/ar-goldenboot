import * as Animate from './animate.js';

var stateInterval = null;

function init() {
    initAnimation();
    document.querySelector('#redirect').addEventListener('click', (ev) => {
        ev.preventDefault();
        window.location = 'https://api.codetenango.com/api/v1/auth/facebook';
        //window.location = 'http://localhost:8080/api/v1/auth/facebook';
    })
}

function initAnimation() {
    // logo
    Animate.animateCSS('#logo', 'fadeInLeftBig', () => {

    })
    // image 
    Animate.animateCSS('#ar', 'fadeInUpBig', () => {

    })
    // instructions
    Animate.animateCSS('#title', 'fadeInUpBig', () => {
        setTimeout(() => {
            setTimeout(() => {
                document.querySelector('#title').innerHTML = 'PRESIONA COMENZAR Y PODRAS VER LOS 3 OBJETOS DEL MUSEO';
            }, 500)
            Animate.animateCSS('#title', 'fadeOutUpBig', () => {
                document.querySelector('#ar').style.display = 'none';
                document.querySelector('#step1').style.display = '';
                Animate.animateCSS('#step1', 'fadeInUpBig', () => {

                })
            })
        }, 3000)
    })
}

function checkDomState() {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        init();
        clearInterval(stateInterval);
    }
}

function docReady() {
    if (document.readyState === "loading") {
        stateInterval = setInterval(checkDomState, 1);
    } else if (document.readyState === "complete" || document.readyState === "interactive") {
        stateInterval = setInterval(checkDomState, 1);
    }
}

docReady();
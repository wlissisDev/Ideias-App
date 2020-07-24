var boxElement = document.querySelector('.box');
var limpaCor = document.querySelector('.limpaCor');
var btnAplicaCor = document.querySelector('.corInicial');

var r = document.querySelector('.r');
var g = document.querySelector('.g');
var b = document.querySelector('.b');




function aplicaCor() {
    boxElement.style.backgroundColor = `rgb(${r.value}, ${g.value}, ${b.value})`
}

function limpar() {
    r.value = 0
    g.value = 0
    b.value = 0
    aplicaCor();
}


btnAplicaCor.addEventListener('click', aplicaCor);

limpaCor.addEventListener('click', limpar);






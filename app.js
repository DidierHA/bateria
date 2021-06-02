let numeroBotones = document.querySelectorAll('#boton').length;

for(let i=0; i<numeroBotones; i++){
    document.querySelectorAll('#boton')[i].addEventListener('click', function() {
        let sonido = new Audio('sonidos/crash.mp3');
        sonido.play();
    })
}
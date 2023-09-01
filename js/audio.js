let botonPlay = document.querySelector('#play');
let botonPausa =document.querySelector('#pausa');
let botonVolumen = document.querySelector('#volumen');
let barraVolumen = document.querySelector('#barraVolumen');
let contendorVolumen= document.querySelector('#volumen')
let flujoMusica = document.querySelector('#flujo')

let sonido = new Audio('../audio/sample.mp3');

var volMusica = 0;


//reproducir musica
botonPlay.addEventListener('click', function(){
    sonido.play();
});

//Pausar la musica
botonPausa.addEventListener('click', function(){
    sonido.pause();
});

//Mostrar la barra de volumen 
contendorVolumen.addEventListener('mouseover',function(){
    console.log(barraVolumen.value)
    barraVolumen.classList.add('ver')
});

//Borrar la barra de volumen
contendorVolumen.addEventListener('mouseleave',function(){
    barraVolumen.classList.remove('ver')
});


// Camibar el sonido de la musica
barraVolumen.onchange = function(){
    console.log(barraVolumen.value);
    volMusica = barraVolumen.value;
    sonido.volume = volMusica;
}

// barraVolumen.addEventListener('click', function(){
//     console.log(barraVolumen.value);
//     volMusica = barraVolumen.value;
//     sonido.volume = volMusica;
// })


//El flujo de la musica
sonido.onloadedmetadata =function(){
    flujoMusica.max = this.duration;
    flujoMusica.value = this.currentTime;
}

if(sonido.play()){
    setInterval(function(){
        flujoMusica.value = sonido.currentTime;
    },500);
}


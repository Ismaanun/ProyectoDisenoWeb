function abrirNovedad(event) {
     const noticia = event.target;
     const parrafo = noticia.nextElementSibling;
     parrafo.classList.toggle('pFuncion', parrafo.classList.contains('visible'));
     parrafo.classList.toggle('visible', !parrafo.classList.contains('visible'));
}

window.onload = function(e) {
    console.log('documento cargado');

    const enlaces = [
        { enlace: document.getElementById('enlace_1'), contenido: document.getElementById('contenidos_1') },
        { enlace: document.getElementById('enlace_2'), contenido: document.getElementById('contenidos_2') },
        { enlace: document.getElementById('enlace_3'), contenido: document.getElementById('contenidos_3') }
    ];

    enlaces.forEach(item => {
        item.enlace.onclick = function(e) {
            
            if (item.contenido.style.display === 'none') {
                item.contenido.style.display = 'block';
                item.enlace.innerHTML = 'Ocultar contenidos';
            } else {
                item.contenido.style.display = 'none';
                item.enlace.innerHTML = 'Mostrar contenidos';
            }
        };

        item.contenido.style.display = 'block';
        item.enlace.innerHTML = 'Ocultar contenidos';
    });
};

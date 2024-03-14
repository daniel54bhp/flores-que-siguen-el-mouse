// Función para generar estrellas
function generarEstrellas() {
  const body = document.body;
  const anchoVentana = window.innerWidth;
  const altoVentana = window.innerHeight;

  for (let i = 0; i < 100; i++) {
    const estrella = document.createElement('div');
    estrella.classList.add('estrella');
    estrella.style.left = Math.random() * anchoVentana + 'px';
    estrella.style.top = Math.random() * altoVentana + 'px';
    estrella.style.animationDelay = Math.random() * 2 + 's';
    body.appendChild(estrella);
  }

  // Generar estrella fugaz cada 5-10 segundos
  setInterval(function() {
    const estrellaFugaz = document.createElement('div');
    estrellaFugaz.classList.add('estrella-fugaz');
    estrellaFugaz.style.left = '-100vw';
    estrellaFugaz.style.top = Math.random() * 100 + 'vh';
    body.appendChild(estrellaFugaz);

    setTimeout(function() {
      estrellaFugaz.remove();
    }, 5000);
  }, Math.random() * 5000 + 5000);

  // Agregar mensaje
  const mensaje = document.createElement('div');
  mensaje.classList.add('mensaje');
  mensaje.textContent = 'TE AMO AMANDA JEREZ, APJB';
  body.appendChild(mensaje);
}

// Generar estrellas al cargar la página
generarEstrellas();

// Código para las flores
document.addEventListener('mousemove', function(e) {
  const flor = document.createElement('div');
  flor.classList.add('flor');
  flor.style.left = e.clientX - 25 + 'px';
  flor.style.top = e.clientY - 25 + 'px';
  document.body.appendChild(flor);

  const colors = ['#ff69b4', '#ffa07a', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ee82ee'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  for (let i = 0; i < 5; i++) {
    const petalo = document.createElement('div');
    petalo.classList.add('petalo');
    petalo.style.left = 20 + Math.cos(i * 72 * Math.PI / 180) * 15 + 'px';
    petalo.style.top = 20 + Math.sin(i * 72 * Math.PI / 180) * 15 + 'px';
    petalo.style.backgroundColor = randomColor;
    flor.appendChild(petalo);
  }

  setTimeout(function() {
    flor.style.opacity = 0;
    setTimeout(function() {
      flor.remove();
    }, 50);
  }, 500);
});
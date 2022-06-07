function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
elemento.innerHTML = '';
  for(let i = 0; i < textoArray.length; i++) {
    setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
  }
}

const btnMobile = document.getElementById('btn');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.onclick = (ev) =>{
  toggleMenu(ev)
}

btnMobile.ontouchstart = (ev) =>{
  toggleMenu(ev)
}

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout(() => elemento.innerHTML += letra, 90 * i);
          
    });
  }
  
  const titulo = document.querySelector('.text-wrapper');
  typeWriter (titulo);


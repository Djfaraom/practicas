//Elemento
const buttonRed = document.querySelector('footer button:first-of-type');
const buttonYellow = document.querySelector('footer button:last-of-type');

// Evento
buttonRed.addEventListener('click', changeToRed);
buttonYellow.addEventListener('click', changeToYellow);

// Execution

function changeToRed(event) {
  // alert('hola Isa');
  document.body.style.backgroundColor = 'red';
}

function changeToYellow(event) {
  // alert('hola Isa');
  document.body.style.backgroundColor = 'yellow';
}

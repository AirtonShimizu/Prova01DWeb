const apert = document.getElementById('botao');
const textoOriginal = document.getElementById('texto');
const textoNovo = document.getElementById('novoTexto1');

apert.addEventListener('click', textoMudar);

function textoMudar() {
  textoOriginal.innerHTML = 'textoNovo';
}
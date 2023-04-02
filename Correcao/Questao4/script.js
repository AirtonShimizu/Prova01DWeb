function verificar() 
{
  // Recupera o valor digitado pelo usuário
  var numero = document.getElementById("numero").value;

  // Verifica se o número é par ou ímpar
  if (numero % 2 == 0) {
    alert(numero + " é um número par.");
  } else {
    alert(numero + " é um número ímpar.");
  }
}
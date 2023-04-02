function verificar() 
{
    // Obter os valores dos campos de nome e sobrenome
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;

    // Verificar se ambos os campos estão preenchidos
    if (nome != "" && sobrenome != "") {
      // Exibir mensagem de boas-vindas
      alert("Bem-vindo, " + nome + " " + sobrenome + "!");
    } else {
      // Exibir mensagem de erro
      alert("Por favor, preencha todos os campos.");
    }
}
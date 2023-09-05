/*Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela abaixo. Mostre uma mensagem informando o saldo médio e o valor do crédito.
   De 0 a 200   --> Nenhum crédito
   De 201 a 400 --> 20% do valor do saldo médio
   De 401 a 600 --> 30% do valor do saldo médio
   Acima de 601 --> 40% do valor do saldo médio */

   var saldo = parseInt(prompt("Digite o valor de seu saldo médio:"));

   if (saldo <= 200) {
    alert("Você não tem crédito");
} else if (saldo >= 201 && saldo <= 400) {
    alert("Seu saldo médio é: " + saldo * 0.2);
} else if (saldo >= 401 && saldo <= 600) {
    alert("Seu saldo médio é: " + saldo * 0.3);
} else if (saldo > 600) {
    alert("Seu saldo médio é: " + saldo * 0.4);
} else {
    alert("Valor de saldo inválido");
}
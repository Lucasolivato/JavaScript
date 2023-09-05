var nota1 = parseInt(prompt("Digite sua primeira nota:"));
var nota2 = parseInt(prompt("Digite a sua segunda nota:"));
var nota3 = parseInt(prompt("Digite a sua terceira nota:"));

var peso1 = 4;
var peso2 = 3;
var peso3 = 3;

var mediaPonderada = ((nota1 *peso1) + (nota2*peso2) + (nota3 *peso3) );

if (mediaPonderada >=7 ) {
    alert("Você foi aprovado!");
} 

    else if (mediaPonderada >=5 && mediaPonderada <=6.9) {
        alert ("Você está de recuperação");
    }     
        else {
            alert("Você foi reprovado");
    }

    
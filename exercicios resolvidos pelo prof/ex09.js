//Elabore um algoritmo que leia o ano de nascimento do usuário e informe se ele pode ou não votar. 
//Faça uma pesquisa para descobrir os limites de idades em que o voto deve ser proibido, obrigatório ou facultativo.  

var nasc = parseInt(prompt("Digite o ano de nascimento:"));

var idade = 2023 - nasc;

if (idade <16) {
    alert("Você não pode votar");
} 

    else if (idade >= 70) {
        alert ("Você pode votar,porém não é obrigatório");
    }     
        else { 
            alert("Você pode votar");
        }





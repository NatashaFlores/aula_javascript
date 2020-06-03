
// Variaveis
var nome = "Natasha";
var idade = 29;
alert(nome + " tem " + idade + " anos");

var idade2 = 10;
alert(idade + idade2); 

var frase = "Japao é o melhor time do mundo.";
console.log(frase.replace("Japao", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

var n1 = 5;
var n2 = 3;
console.log(n1*n2);

//Array

var lista = ["maca", "pera","laranja"];
lista.push("uva");
console.log(lista[3]);
lista.pop(); // retira o último elemento
console.log(lista.length); // tamanho da lista
console.log(lista.reverse()); // inverte a lista
console.log(lista.toString()); // transforma a lista em string

console.log(lista[0]);// primeiro elemento
console.log(lista.toString()[0]); // primeira letra da string

console.log(lista.join(" - "));
console.log("Também retorna uma String: "+lista.join());

// Dicionário

var fruta = {nome:"maca", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);

//Lista de dicionário
var frutas = [{ nome: "maca", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(frutas);
console.log(frutas[1].nome);

//Condicionais, laços de repetição e Date

var idade = prompt("Qual sua idade?");
var idade = 18;
if(idade >= 18)
{
    alert ("maior de idade");

}else{
    alert("menor de idade");
}

var count = 0;
while(count <= 5)
{
    console.log(count);
    //count = count + 1; OU
    count++;
};

var countFor;
for (countFor = 0; countFor <= 5; countFor++)
{
    console.log(countFor);
};

var d = new Date();
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getMinutes());
console.log(d.getHours());


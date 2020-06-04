
// Variaveis
var nome = "Natasha";
var idade = 29;
alert(nome + " tem " + idade + " anos");

var idade2 = "10";
alert(idade + idade2 + "-"); 

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

// Funções

function soma(n1,n2)
{
    return n1+n2;
}
alert(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japao","Japao", "Brasil"));

function validaIdade(idade)
{
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));


//Manipulando eventos de página

function clicou(){
    //alert("Obrigada por clicar.");
    //console.log(document.getElementById("agradecimento"));

    //Para ID
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>"; 
    
}

function redirecionar(){
    // Abre uma aba nova
    window.open("https://translate.google.com/"); 
    // Carrega a página na mesma aba
    //window.location.href = "https://translate.google.com/"; 
}

function trocar(elemento){
    //Pode fazer sem passar parametro
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";

    //Sabe qual é o elemento com o this.
    elemento.innerHTML = "Obrigada por passar o mouse";
}

function voltar(elemento){
    //Pode fazer sem passar parametro
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

    //Sabe qual é o elemento com o this.
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    // Troca o elemento
    console.log(elemento.value);
}
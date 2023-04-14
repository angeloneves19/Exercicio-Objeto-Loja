/*
Suponha que você esteja criando um programa de controle de estoque para uma loja de eletrônicos.
Crie um objeto chamado "produto" que tenha as seguintes propriedades:

nome: string que representa o nome do produto
preço: número que representa o preço do produto em reais
quantidade: número que representa a quantidade de unidades do produto em estoque
Além disso, crie os seguintes métodos para o objeto "produto":

comprar(): que recebe como parâmetro um número inteiro representando a quantidade de unidades a serem compradas e diminui esse valor da propriedade quantidade.
 Caso a quantidade a ser comprada seja maior do que a quantidade em estoque, exiba uma mensagem de erro.
vender(): que recebe como parâmetro um número inteiro representando a quantidade de unidades a serem vendidas e diminui esse valor da propriedade quantidade.
 Caso a quantidade a ser vendida seja maior do que a quantidade em estoque, exiba uma mensagem de erro.
*/

function produtos(){
    return {
        nome: "Mouse",
        valor: 30,
        quantidade: 100,
    }
}
//console.log(produtos())

//Caso 1
// -> depositado -> dinheiro 60
// --> quantidade --> 98 

//Caso 2
//--->Deposito --->3.030
//--->Quantdade --->00 ---> erro só temos 100 no estoque

function comprar(quantidade){
//let compra = dinheiro / produtos().valor 
let numeroDeProdutos  =  produtos().quantidade - quantidade
return numeroDeProdutos
}
console.log(comprar(10))
//pokemon é uma das coisas mais idiotas que já foram inventadas, perde pra friends e how i met your mother (pq diabos essas paradas ruins fazem tanto sucesso?)
// e eu sou constrangido a ter que mexer com isso...triste mas é a vida

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
// ) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
const pokemon2={...pokemon1}
pokemon2.nome = "Squirtle"
pokemon2.tipo = "Água"
//console.log(pokemon2);

// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`
pokemon1.ataques=[]
const investida = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100, 
      
}
pokemon1.ataques.push(investida)
//console.log(pokemon1)

// c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
pokemon2.ataques= [...pokemon1.ataques]
//console.log(pokemon2)
// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
pokemon1.ataques.push({nome:"Folha Navalha", dano: 45, tipo: "Grama", precisão:100})
//console.log(pokemon1)
// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
pokemon2.ataques.push({nome:"Jato de Água", dano: 40, tipo: "Água", precisão:100})
// const jatoDAgua = {
//     nome: "Jato de Água",
//     dano: 40,
//     tipo: "Água",
//     precisão: 100
// }
// pokemon2.ataques=[]
// pokemon2.ataques.push(investida,jatoDAgua)
// f) Imprima os dois objetos no console.
console.log(pokemon1)
console.log(pokemon2)
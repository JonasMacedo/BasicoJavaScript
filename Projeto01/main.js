
/* QuerySelecetorAll: ira retornar um NodeList que é estatico, se houver alterações posteriores 
no elmento nao ira constar. */
var gridSectionNode = document.querySelectorAll('describ')
console.log(gridSectionNode); //NodeList: estatico.

/* GetElements: retorna um HTMLCollection, a lista retornada é dinamica, significa que se 
elementos forem adicionados, ela será automaticamente atualizada */
var gridSectionHTMLConnection = document.getElementsByClassName('sectionAnimais')
console.log(gridSectionHTMLConnection); //HTMLConnection: dinamico.

/*QuerySelector: é um seletor geral unico, retorna o primeiro elemento que combinar com seu 
seletor CSS. */
var firstH2 = document.querySelector('h2')
console.log(firstH2)

var lastP= document.querySelector('p:last-child')
console.log(lastP)

//Retornando todas as imagens.
var imagens = document.querySelectorAll('img')
console.log(imagens)

//Retornando todas as imagens, que comecam com a palavra imagem.
var imgs = document.querySelectorAll('img[src^="./img/imagem"]')
console.log(imgs);

//Selecionando links internos com "#"
var linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos);

//Selecionando primeiro H2
var h2Animais = document.querySelectorAll('h2')
console.log(h2Animais[0]);

//Selecionando ultimo paragrafo.
var pS = document.querySelectorAll('p')
console.log(pS[--pS.length]);

console.log(
"///-------------------///------------------- FOREACH --------------------///-------------------///-------------------"
)

//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

const imagensFor = document.querySelectorAll('img')

imagensFor.forEach(function(item,index, array){
    
    /*O primeiro parâmetro é o callback, ou seja, oque sera retornado.
    a função que será ativada a cada item. 
    Esse função pode receber três parâmetros: valorAtual, index e array;*/
    
    console.log(item) // item atual no loop.
    console.log(index) // numero do index.
   
});


//FOREACH E ARRAY
// forEach é um método de Array, alguns objetos array-like possuem este método. 
// Caso não possua, o ideal é transformá-los em uma array.

var titulos = document.getElementsByClassName('titulo')
console.log(titulos)

const arrayTitulos = Array.from(titulos) // Se comentar dara erro dizendo que nao é um array.
arrayTitulos.forEach(function(item){
    console.log(item);
})

//Retornando cada paragrafo do site
var tagsP = document.querySelectorAll('p')
tagsP.forEach((tag)=>{
    console.log(tag)
})

//Retornando cada conteudo dos paragrafos



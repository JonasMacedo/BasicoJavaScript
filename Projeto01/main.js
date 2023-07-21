
/* QuerySelecetorAll: 
    - ira retornar um NodeList que é estatico, se houver alterações posteriores 
    - no elmento nao ira constar. 
*/
var gridSectionNode = document.querySelectorAll('describ')
console.log(gridSectionNode); //NodeList: estatico.

/* GetElements: 
    - retorna um HTMLCollection, a lista retornada é dinamica, significa que se 
    - elementos forem adicionados, ela será automaticamente atualizada! 
*/

var gridSectionHTMLConnection = document.getElementsByClassName('sectionAnimais')
console.log(gridSectionHTMLConnection); //HTMLConnection: dinamico.

/* QuerySelector: 
    - é um seletor geral unico, retorna o primeiro elemento que combinar com seu  seletor CSS. 
*/

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

/* FOREACH E ARRAY
    - forEach é um método de Array, alguns objetos array-like possuem este método. 
    - Caso não possua, o ideal é transforma-los em uma array.
*/ 

const imagensFor = document.querySelectorAll('img')
imagensFor.forEach(function(item,index, array){
    
    /*O primeiro parâmetro é o callback, ou seja, oque sera retornado.
    a função que será ativada a cada item. 
    Esse função pode receber três parâmetros: valorAtual, index e array;*/
    
    console.log(item,index) // item atual no loop, e numero do index.
    
});

//Constantemente vamos selecionar uma lista de itens da DOM.

var titulos = document.getElementsByClassName('titulo')
console.log(titulos)

// A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
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
tagsP.forEach((item) => {
    console.log(item.innerText)
});

const itensMenu = document.querySelectorAll('.menu a')

console.log(itensMenu)

// adicionando a classe 'ATIVA' a todas os itens do menu.
itensMenu.forEach((item)=>{
    item.classList.add('ativo')
    console.log(item)
})

// deixando a classe 'ATIVA' apenas no primeiro item do menu.
itensMenu.forEach((itemRemove,ind)=>{
    (ind == 0 )? itemRemove.classList.add('ATIVO') : itemRemove.classList.remove('ativo');
})

// ArrowFunction mais simplificada.
itensMenu.forEach((itemRemove,ind)=>(ind == 0 )? itemRemove.classList.add('ATIVO') : itemRemove.classList.remove('ativo'))

// verificando se as imagens possui o atributo "alt"
imagensFor.forEach((img)=>{
    var attribut = img.hasAttribute('alt')
    console.log(img, attribut)
})

//Alterando o link de "contato" do menu.
var attribut = document.querySelector('a[href^="#contato"]')
attribut.setAttribute('href','https://google.com')



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



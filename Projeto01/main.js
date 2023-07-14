
//Retornando todas as imagens
var imagens = document.querySelectorAll('img')
console.log(imagens)

/* QuerySelecetorAll: ira retornar um NodeList que é estatico, se houver alterações posteriores 
no elmento nao ira constar. */

var gridSectionHTMLConnection = document.getElementsByClassName('sectionAnimais')
console.log(gridSectionHTMLConnection); //HTMLConnection: dinamico.

var gridSectionNode = document.querySelectorAll('describ')
console.log(gridSectionNode); //NodeList: estatico.

/*QuerySelector: é um seletor geral unico, retorna o primeiro elemento que combinar com seu 
seletor CSS. */
var firstH2 = document.querySelector('h2')
console.log(firstH2)

var lastP= document.querySelector('p:last-child')
console.log(lastP)

/* GetElements: retorna um HTMLCollection, a lista retornada está ao vivo, significa que se 
elementos forem adicionados, ela será automaticamente atualizada */



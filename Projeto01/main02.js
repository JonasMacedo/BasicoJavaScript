console.log(
"///-------------------///------------------- Dimensões e Distâncias --------------------///------------------"
)
// Dimensões e Distâncias

/*HEIGHT e WIDTH
    - São propriedades e métodos dos objetos Element e HTMLElement
    - a maioria delas são Read Only.
*/

const listaAnimais = document.querySelector('.animaisLista')

console.log("Retornando o comprimento do elemento: ", listaAnimais.clientHeight)
console.log("Retornando o comprimento total com Scroll: ", listaAnimais.scrollHeight)

// Mesma coisa para o Width, com o metodo "clientWidth"

/* OFFSETTOP E OFFSETLEFT
    - Distância entre o topo do elemento e o topo da página.
*/
const dimensPagina = document.querySelector('.sectionAnimais')
alturaElement = dimensPagina.offsetTop;
console.log("altura do elemento: ", alturaElement)

/* OFFSETLEFT
    - Distância do canto esquerdo da PAGINA ao canto esquerdo do ELEMENTO.
*/
var primeiroH2 = document.querySelector('h2')
var h2Raposa = primeiroH2.offsetLeft;
console.log("Distancia do canto esquerdo da PAGINA ao canto esquerdo do ELEMENTO: ", h2Raposa)



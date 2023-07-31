console.log(
"///-------------------///------------------- Navegacao de elementos DOM --------------------///------------------"
)


// TRASVERSING
// Consiste em navegar pelo DOM, utilizando suas propriedades e métodos.

const lista = document.querySelector('.animaisLista')

// Verificando o elemento pai.
console.log('Retorna o elemento PAI da classe animaisLista: ', lista.parentElement) 

// Verificando o elemento acima do pai.
console.log('Retorna o elemento ACIMA da classe animaisLista: ', lista.parentElement.parentElement) 

// Verificando o elemento abaixo do pai.
console.log('Retorna o elemento ABAIXO da classe animaisLista: ', lista.nextElementSibling) 

// Verificando o elemento anterior do pai.
console.log('Retorna o elemento ANTERIOR da classe animaisLista: ', lista.previousElementSibling) 

// Retornando os elementos filhos do tipo HTMLCollection.
console.log(lista.children);

// Retornando os elementos filhos do tipo NodeList.
console.log(lista.childNodes);

// Movendo elementos na DOM com Node. 

const contat = document.querySelector('.contato');
const titulo = contat.querySelector('.titulo');

// Move o elemento/tag para o final da possição dentro da arvore de elementos.
// lista.appendChild(titulo)

// Move o elemento/tag para o final da possição dentro da arvore de elementos.
contat.insertBefore(lista, titulo); // Move apenas elementos filhos.

//Adicionando um elemento com JS no DOM.

//Denindo o tipo do elemento.
const novoH1 = document.createElement('h1'); 

//Insereindo conteudo.
novoH1.innerText='Novo titulo' 

//Inserindo classe de estilizacao.
novoH1.classList.add('titulo')

//Adicionando o elemento na DOM.
const mapa = document.querySelector('.mapa')




//Clonando Elementos da DOM.
const tituloPrincipal = document.querySelector('h1')

const cloneTituloPrincipal = tituloPrincipal.cloneNode(true)
console.log(tituloPrincipal)
console.log(cloneTituloPrincipal)
tituloPrincipal.appendChild(cloneTituloPrincipal)

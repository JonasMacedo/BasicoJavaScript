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


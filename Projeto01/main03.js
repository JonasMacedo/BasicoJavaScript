console.log(
"///-------------------///------------------- Eventos --------------------///------------------"
)

/* ADDEVENTLISTENER
    - Adiciona uma função ao elemento, esta chamada de "callback" que será ativada assim que 
    - certo evento ocorrer neste elemento.
*/

const img = document.querySelector('img');
img.addEventListener('click',()=>{
    console.log('clicou na image!!')
})

// Melhor separar o Callback mais facil para manutencoes futuras.
const h1 = document.querySelector('h1')
function callback(event){
    // Mais facil para manutencoes.
    console.log("callback ativo!", event)
}

h1.addEventListener('click',callback)

var animaisList = document.querySelector('.animaisLista')
animaisList.addEventListener('click',callbackAnimais)

// Retornando o exato local do click do mouse.
function callbackAnimais(event){
    console.log(event.target)
}
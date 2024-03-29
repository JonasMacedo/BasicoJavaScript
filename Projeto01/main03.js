console.log(
"///-------------------///------------------- Eventos --------------------///------------------"
)

/* ADDEVENTLISTENER
    - Adiciona uma função ao elemento, esta chamada de "callback" que será ativada assim que 
    - certo evento ocorrer neste elemento.
*/

const img = document.querySelector('img');
img.addEventListener('click',()=>{
    // O primeiro parâmetro do callback é referente ao evento que ocorreu.
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

function verificaLetra(event){
    
    if(event.key == 'A'){
        document.body.classList.toggle(window.alert('Apertou A'));
    }
}

window.addEventListener('keydown', verificaLetra)

// ForEach e Eventos
// Para adicionar o addEventListener em varios elementos é necessario um loop, porq o metodo é por elemento.

const allImags = document.querySelectorAll('.animaisLista');

function imagSrc(event) {
    console.log('Evento em loop, clicou na imagem:',event.target)
}
allImags.forEach((imag) => {
    imag.addEventListener('click',imagSrc);
});

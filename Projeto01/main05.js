
// ADICIONAR CLASSES PARA MANIPULAÇÃO

/* A ideia de navegação por tabs, é ter uma lista de itens que controla a visualização de uma 
    lista de conteúdo. Cada item da lista possui um conteúdo relacionado ao mesmo.
*/

const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

function activeTab(index){

    tabContent.forEach((section)=>{
        section.classList.remove('ativa')
    })

    tabContent[index].classList.add('ativa');
}


tabMenu.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        activeTab(index)
    })
})
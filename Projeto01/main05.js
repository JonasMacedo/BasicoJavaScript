
// ADICIONAR CLASSES PARA MANIPULAÇÃO

/* A ideia de navegação por tabs, é ter uma lista de itens que controla a visualização de uma 
    lista de conteúdo. Cada item da lista possui um conteúdo relacionado ao mesmo.
*/

const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

// Verificacao para caso o item existam na pagina.
if (tabMenu.length && tabContent.length) {
    
    // para deixar a primeiro item como ativo padrao.
    tabContent[0].classList.add('ativa')
        
    tabMenu.forEach((item, index)=>{
        /* 
        Passar antes a função anônima no callback, para poder passar o index 
        como argumento da funcao activeTab.
        */
       item.addEventListener('click', ()=>{activeTab(index)})
    })
    
    function activeTab(index){
        
        // Recebe index como parâmetro para ativar a tab. 
        
        tabContent.forEach((section)=>{
            //Sempre que ativar, remove a classe ativo de todos os outros elementos.
            section.classList.remove('ativa')
        })
    
        tabContent[index].classList.add('ativa');
    }
}
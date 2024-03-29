//Referenciando os elementos.
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button'); 

//Elementos estão vindo do Storage, em formato json, precisam ser convertidos em um array simples.
var todos = JSON.parse(localStorage.getItem('list_todos'))||[];
// Caso não consiga retornar um valor aceitavel da memoria do navegador(storage), ira retornar um array vazio.

//Renderizando os elementos com JS.
function renderTodos(){

    listElement.innerHTML = '';//LImpando a tela antes de apresenta o conteudo.

    for(todo of todos){
        /* for(elemento of array): trata-se de um for especial para Arrays,
            percorre todos os elementos do array, e retorna no elemento.         
        */

        //Criando elementos da lista.
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        //Link para remoção de elemento.
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');//Criando texto para o link a.
        linkElement.setAttribute('href','#');

        linkElement.appendChild(linkText);
        
        //IndexOf(): retorna a posição de um array de String.
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);//Variavel global recebendo elemento criado.
    }
}

renderTodos();

//Recuperando valor do input e ação do botão.
buttonElement.onclick = function addTodo(){
    
    var todoText = inputElement.value;
    
     
    todos.push(todoText);
    //Push: funcao para adicionar elemento no final de arrays.

    inputElement.value = '';
    renderTodos();
    saveToStorage();
} 

function deleteTodo(pos){

    //Splice(posição, ItensParaRemover):Remove itens de arrays, baseado na posição passada.
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

//Salvando conteudos no Storage, ou seja em memoria local.
function saveToStorage(){

    /* Responsavel por pegar a lita de elementos, 
        e salvar na memoria local do navegador
    */

    //JSON: JavaScript Object Notation.
    localStorage.setItem('list_todos',JSON.stringify(todos));
    //Convertendo o vetor todos para JSON.

}

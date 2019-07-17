//Referenciando os elementos.
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button'); 

var todos = JSON.parse(localStorage.getItem('list_todos'))||[];

//Renderizando os elementos com JS.
function renderTodos(){

    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        //Link para remoção de elemento.
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
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

    //Splice(posição, itens):Remove itens de arrays, baseado na posição.
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

//Salvando conteudos em memoria local.
function saveToStorage(){

    //JSON: JavaScript Object Notation.
    localStorage.setItem('list_todos',JSON.stringify(todos));


}











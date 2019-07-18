/* Promises:
    - Trata-se de codigos que não irão influenciar na linha de tempo do código JS. 
    - Pois o restante do JavaScript ira executar normalmente.
*/

var minhaPromise = function(){

    /*Estrutura padrão de promise.
        RESOLVE: trata-se de uma função que sera utilizada dentro da promise, 
        quando o resultado obtiver SUCESSO.
        REJECT: trata-se de uma função que sera utilizada dentro da promise, 
        quando o resultado obtido for de ERRO.
    */
    return new Promise(function(resolve,reject){
      
        //Usando o AJAX.
        var xhr = new XMLHttpRequest();
        xhr.open('get','https://api.github.com/users/diego3g');
        xhr.send(null);

        //Verificando a resposta do servidor.
        xhr.onreadystatechange = function(){

            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText)); //RESOLVE: caso a aquisição ao servidor obteve sucesso.
                }else{
                    reject('Erro na requisição');//REJECT: caso a aquisição ao servidor obteve erro.
                }
            }

        }

    });
}

var resultado = minhaPromise(); 
console.log(resultado);
/*Obs.: variavel resultado irá apresentar no console:" Promisse:{<pending>}".
Isso porque é um metodo assincrono, o JS continuara executando o restante do codigo,
indiferente a sua resposta.*/


//Ussando corretamente a promise.
minhaPromise()
.then(function(response){ 
    /* Caso a promise teve sucesso, 
    aqui pode se adicionar codigos e metodos.*/

    console.log(response);
})
.catch(function(error){
    /*Caso a promise teve erro,
    aqui pode se adicionar codigos e metodos.*/

    console.warn(error);
});

/*Obs.: A promise permite usar os metodos THEN e CATCH, 
    para trabalhar com codigo assincrono no JavaScript, 
    adicionando códigos e metodos para trabalhar com as respostas do servidor. 
*/

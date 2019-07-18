/* AJAX: 
    - Trata-se de uma requisição ASSINCRONA em algum BackEnd. 
    - Principal forma de obter informações pelo servidor, atraves do JavaScript.
*/

// XMLHttpRequest(): Realiza a recuperação de informaçoes de algum servidor, por meio do AJAX.
var xhr = new XMLHttpRequest();


//open('AçãoMetodo','CaminhoDoServidor'):Realizando requisição para o servidor.
xhr.open('GET', 'https://api.github.com/users/JonasMacedo');
xhr.send(null);

/*Obs: abra no navegador o perfil de debug(F12).
    Na aba Network, dentro do campo Headers você vera a requisição feita ao servidor,
    assim como o estado "status code" em que ela se encontra.
    
*/


//Verificando se houve resposta do servidor.
xhr.onreadystatechange = function(){ 
    
    /*ObS: Por ser uma função assincrona, não ocorre no mesmo tempo de execução do código, 
    e isso pode prejudicar todo o uncionamento do código. 
    */
    
    if(xhr.readyState == 4){

        //JSON.parse: Converte um objeto JavaScript, e assim ser usado.
        console.log(JSON.parse(xhr.responseText)); //Necessario a conversção para um objeto json pois o retorno do servidor sera um objeto json.
    }

}

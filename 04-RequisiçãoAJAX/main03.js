/* AXIOS:
    - Trata-se de uma bibliteca, que realiza aquisições assincronas, junto com AJAX, de forma mais SIMPLIFICADA.
    - Necessario realizar o importe https://unpkg.com/axios/dist/axios.min.js antes de utilizar o script do JS.
    - O Axios opera sobre o metodo XMLHttpRequest do AJAX, retornando os valores de forma mais facil.
    - Não precisando converter o conteudo para JSON, pois ja retorna um Objeto JavaScript. 
*/


//O axios ja vem de forma capsulada, as verifações da promise e ja converte a informação para json.
axios.get('https://api.github.com/users/diego3g')
    .then(function(response){
        console.log(response);
        //Usa a estrutura de uma Promise.

        // Demais metodos e codigo.
    })
    .catch(function(error){
        console.warn(error);
        // Demais metodos e codigo.
    });

//Obs.: Mais simples de usar do que a função XMLHttpRequest, nativa do javascript.

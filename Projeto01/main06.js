
/*
    Accordion List
    - Muito usado em sites resposniveis.
    - Basicamentente uma lista que abre e fecha, lembrando o instrumento muscial 
    - arcodeon/sanfona dai o nome Accordion.
*/

const accordionList = document.querySelectorAll('.js-accordion dt')

accordionList[0].classList.add('ativo')
accordionList[0].nextElementSibling.classList.add('ativo');

accordionList.forEach((item)=>{
    item.addEventListener('click', activeAccordion)
})

function activeAccordion(){
    console.log('Elemento alvo: ', this)
    console.log('Proximo elemento: ', this.nextElementSibling)
    
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');

}

/*
Accordion List
- Muito usado em sites resposniveis.
- Basicamentente uma lista que abre e fecha, lembrando o instrumento muscial 
- arcodeon/sanfona dai o nome Accordion.
*/

function initAccordion(){

    const accordionList = document.querySelectorAll('.js-accordion dt')
    var activeClass= 'ativo';
    
    if (accordionList.length) { //Só ativara o accordion caso haja uma lista.
        
        accordionList[0].classList.add( activeClass)
        accordionList[0].nextElementSibling.classList.add( activeClass);
        
        accordionList.forEach((item)=>{
            item.addEventListener('click', activeAccordion)
        })
        
        function activeAccordion(){
            console.log('Elemento alvo: ', this)
            console.log('Proximo elemento: ', this.nextElementSibling)
            
            this.classList.toggle( activeClass);
            this.nextElementSibling.classList.toggle( activeClass);
            
        }
    }
}

initAccordion();

// Corrigindo link externo.
const contat = document.querySelector('a[href^="https"')
contat.setAttribute('href','#contato');

function initScrollSuave(){

    const linksMenu = document.querySelectorAll('.js-menu a[href^="#"]');
    
    function scrollToSection(item){
        item.preventDefault();   
        var href = item.currentTarget.getAttribute('href')
        var section = document.querySelector(href)
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    
        /* Metodo de scrool suave, alterantivo.
        let topo = section.offsetTop
        
        window.scrollTo({
            top: topo,
            behavior: "smooth"
        })
        
        */
       
    }
    
    linksMenu.forEach((link)=>{ 
        link.addEventListener('click', scrollToSection)
    });
}

initScrollSuave()
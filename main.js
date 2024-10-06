
const button = document.querySelectorAll('.button')
const emmo = document.querySelectorAll('.emmo')
const bot = document.querySelectorAll('.bot')
const section = document.querySelectorAll('.section')
const start = document.querySelector('.start')
const avisoBox = document.querySelector('.aviso')
const avisoBox2 = document.querySelector('.aviso2')

start.addEventListener('click',()=>{
    //Move bot
    function setAnimationBot(Element){
        const numRanddom = Math.floor(Math.random() * 11) + 1
        Element.style.animation =`botMove${numRanddom}`
        Element.style.animationDuration ='4s'
        
    }
    setInterval(()=>{setAnimationBot(bot[0])}, Math.floor(Math.random() * (4000 - 1000 + 1)) + 2000);
    setInterval(()=>{setAnimationBot(bot[1])}, Math.floor(Math.random() * (4000 - 1000 + 1)) + 2000);
    setInterval(()=>{setAnimationBot(bot[2])},Math.floor(Math.random() * (4000 - 1000 + 1)) + 2000);
    setInterval(()=>{setAnimationBot(bot[3])}, Math.floor(Math.random() * (4000 - 1000 + 1)) + 2000);
    
    //move Emmo 
    function setAnimationEmmo(Element){
        const numRanddom = Math.floor(Math.random() * 11) + 1
        Element.style.animation =`EmmoMove${numRanddom}`
        Element.style.animationDuration ='1.5s'
    }
    
    
    button[0].addEventListener('click',()=>{
        setAnimationEmmo(emmo[0])
        
    })
    button[1].addEventListener('click',()=>{
        
        setAnimationEmmo(emmo[1])
    })
    button[2].addEventListener('click',()=>{
        
        setAnimationEmmo(emmo[2])
    })
    button[3].addEventListener('click',()=>{
        setAnimationEmmo(emmo[3])
    })
    
    
    
    
    function refresh() {
        let pontuacao = parseInt(document.querySelector('.pontuacao').innerHTML)
        // Código de atualização aqui
        
        let botPosition = bot[0].getBoundingClientRect()
        let emmoPosition = emmo[0].getBoundingClientRect()
        let buttonPosition = button[0].getBoundingClientRect()
        
        let botPosition1 = bot[1].getBoundingClientRect()
        let emmoPosition1 = emmo[1].getBoundingClientRect()
        let buttonPosition1 = button[1].getBoundingClientRect()
        
        let botPosition2 = bot[2].getBoundingClientRect()
        let emmoPosition2 = emmo[2].getBoundingClientRect()
        let buttonPosition2 = button[2].getBoundingClientRect()
        
        let botPosition3 = bot[3].getBoundingClientRect()
        let emmoPosition3 = emmo[3].getBoundingClientRect()
        let buttonPosition3 = button[3].getBoundingClientRect()
        
    // Chama a função novamente no próximo ciclo de animação
    //==================================
    if(botPosition.y>emmoPosition.y){
        bot[0].style.display = 'none'
        document.querySelector('.pontuacao').innerHTML = pontuacao+1
        setTimeout(() => {
            bot[0].style.display = 'block'
            
        }, 3000);
    }
    if(botPosition.y>buttonPosition.y){
        avisoBox2.style.display = 'block'
    }
    //==================================
    if(botPosition1.y>emmoPosition1.y){
        bot[1].style.display = 'none'
        document.querySelector('.pontuacao').innerHTML = pontuacao+1
        setTimeout(() => {
            bot[1].style.display = 'block'
            
            
        }, 3000);
    }
    if(botPosition1.y>buttonPosition1.y){
          avisoBox2.style.display = 'block'
    }
    //==================================
    if(botPosition2.y>emmoPosition2.y){
        document.querySelector('.pontuacao').innerHTML = pontuacao+1
        bot[2].style.display = 'none'
        setTimeout(() => {
            bot[2].style.display = 'block'
            
        }, 3000);
    }
    if(botPosition2.y>buttonPosition2.y ){
        
    }
    
    //==================================
    if(botPosition3.y>emmoPosition3.y){
        bot[3].style.display = 'none'
        document.querySelector('.pontuacao').innerHTML = pontuacao+1
        setTimeout(() => {
            bot[3].style.display = 'block'
        }, 3000);
    }
     if(botPosition3.y>buttonPosition3.y){
        console.log('lose')
    }
    requestAnimationFrame(refresh);
}

// Inicia a atualização
requestAnimationFrame(refresh);

avisoBox.style.display = 'none'

})
const buttons = document.querySelectorAll('.btn')
const expression = document.querySelector('#mathexpression p')
const result = document.querySelector('#result p')
const display = document.querySelector('#display')
const operators = ["+", "-", "*", "/"];

let state = true // this means the calculator is ON
function calculate (){
    const answer = eval(expression.textContent)
  
    result.textContent = answer
   
}

function addToExpression (input){
    expression.textContent += input
}



function clickHandler (e) {
 const value = e.target.dataset.key
   

    if( value === 'ac'){
        
        if(state){
            expression.textContent = ''
            result.textContent = ''
            display.style.opacity ="0"
            state= !state
            return
        }

        display.style.opacity = "1"
        state= !state
        return

    }


    if(state){

    if( value === '='){
        calculate()
        return
    }

    if( value === 'c'){
        expression.textContent = ''
        result.textContent = ''
        return
    }
    
    if( value === 'back'){
      let length =  expression.textContent.length
      expression.textContent = expression.textContent.substring(0,length-1)
      return
    }

    if( operators.indexOf(value) > -1 && result.textContent !== ''){       
            expression.textContent = result.textContent
             result.textContent = ''    
    }

    addToExpression( value )
    }
    

}

buttons.forEach(btn =>{
    btn.addEventListener('click',clickHandler)
})
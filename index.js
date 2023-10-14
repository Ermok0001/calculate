let calculate = document.getElementById('calculate')

const numberButtons = document.getElementById('number')
const button = document.getElementById('button')

const DeleteAll = document.getElementById('DeleteAll')
const Delete = document.getElementById('Delete')

const division = document.getElementById('division')
const multiplication = document.getElementById('multiplication')

const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const plusminus = document.getElementById('plusminus')

const dot = document.getElementById('dot')
const equals = document.getElementById('equals')

let a = '' //Первая цифра 
let b = '' // Вторая цифра
let sign = '' //Умножение, деление, плюс и т.д.
const digit = ['0','1','2','3','4','5','6','7','8','9','.']//все цифры в Html
const element = ['/','+','-','±','✕']//Все элементы в Html

outerHeight.textContent = '0'

    button.addEventListener('click', (event)=>{
        
        const key = event.target.textContent

        equals.addEventListener('click', ()=>{
if(key === '/'){
        calculate.textContent = a / b
        }else if(key === '-'){
        calculate.textContent = a - b
        }else if(key === '+'){
        calculate.textContent = Number(a) + Number(b)
        }else if(key === '✕'){
        calculate.textContent = a * b
    } 
        })
        if(digit.includes(key)){
            if(b === '' && sign === ''){
            a += key
            calculate.textContent = a
            console.log(a,b,sign)
        }else{
            b +=key 
            calculate.textContent = b
            console.log(a,b, sign)
        }
        }
        if(element.includes(key)){
            sign = key
            calculate.textContent = sign
        console.log(a,b,sign)
        }

        DeleteAll.addEventListener('click', ()=>{
            calculate.textContent = '0'
            a = ''
            b = ''
            sign = ''
          })

          Delete.addEventListener('click', ()=>{
            let newNumber = calculate.textContent.slice(0,-1)
            calculate.textContent = newNumber
            console.log(calculate.textContent)
            // calculate.textContent = Number(button.slice(-1))
          })
    })

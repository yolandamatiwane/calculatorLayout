let result = document.querySelector('#result')

let buttons = document.querySelectorAll('.onS ')
let answer = document.querySelector('#equal')
let cls = document.querySelector('#clear')

//Input
for (let button of buttons) {
    button.addEventListener('click',()=>{
        result.value += button.value

    })
}

//output
answer.addEventListener('click',()=>{
    result.value = eval(`${result.value}`).toFixed(2)
})


//Clear Screen
cls.addEventListener('click',()=>{
    result.value = ""
})
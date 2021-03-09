window.onload = function(){
    let buttons = document.querySelectorAll("button"), current = document.querySelector(".calc-result-current-value"), prev = document.querySelector(".calc-result-previous-value"), operator = ''
    let count = () => {
        current.innerHTML = current.innerHTML.replace(/\.$/, "")
        if(operator == '') return Number(current.innerHTML)
        if(operator == '+') return Number(prev.innerHTML) + Number(current.innerHTML)
        if(operator == '-') return Number(prev.innerHTML) - Number(current.innerHTML)
        if(operator == '*') return Number(prev.innerHTML) * Number(current.innerHTML)
        if(operator == '/') return Number(prev.innerHTML) / Number(current.innerHTML)
    }
    let clear = () => current.innerHTML = '0'
    for(let i = 0; i < buttons.length; ++i){
        if(buttons[i].classList.contains("calc-button-number")) buttons[i].onclick = (e) => current.innerHTML = current.innerHTML == '0' ?  e.target.innerHTML : current.innerHTML + e.target.innerHTML
        else if(buttons[i].classList.contains("calc-button-comma")) buttons[i].onclick = () => current.innerHTML = current.innerHTML.match(/\./) ? current.innerHTML : current.innerHTML + '.'
        else if(buttons[i].classList.contains("calc-button-clear")) buttons[i].onclick = clear
        else if(buttons[i].classList.contains("calc-button-back")) buttons[i].onclick = () => {
            current.innerHTML = current.innerHTML.substring(0,current.innerHTML.length - 1)
            if(current.innerHTML.length == 0) current.innerHTML = '0'
            if(current.innerHTML[current.innerHTML.length - 1] == '.') current.innerHTML = current.innerHTML.substring(0,current.innerHTML.length - 1)
        }
        else if(buttons[i].classList.contains("calc-button-add") || buttons[i].classList.contains("calc-button-subtract")
            || buttons[i].classList.contains("calc-button-multiply") || buttons[i].classList.contains("calc-button-divide")) buttons[i].onclick = (e) => {
                console.log(count() + '')
                prev.innerHTML = count() + ''
                console.log(prev.innerHTML)
                operator = e.target.innerHTML
                clear()
            }
        else if(buttons[i].classList.contains("calc-button-equals")) buttons[i].onclick = () => {
            current.innerHTML = count() + ''
            operator = ''
        }
    }
}
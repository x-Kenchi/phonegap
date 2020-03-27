import { calculate } from "./calculate.js";

function action(el) {
    const result = calculate(document.getElementById('a').value, document.getElementById('b').value, el.value);
    document.getElementById('result').innerHTML = result;
}
const operator = document.getElementById('operator');
const changeables = [...document.querySelectorAll('#container > *')];
for(let i = changeables.length - 1; i >= 0; i--){
    changeables[i].addEventListener('change',function(){
        action(operator);
    })
}
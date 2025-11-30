const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const strNum = document.getElementById('number');
const reset = document.getElementById('reset');
let number = parseInt(strNum.innerText, 10);

plus.addEventListener('click', () => {
    number += 1;
    strNum.innerText = number;
    numberColour(number);
})

minus.addEventListener('click', () => {
    number -= 1;
    strNum.innerText = number;
    numberColour(number);
})

reset.addEventListener('click', () => {
    number = 0;
    strNum.innerText = number;
    numberColour(number);
})

function numberColour(num) {
    if (num === 0) {
        strNum.classList.remove('plus');
        strNum.classList.remove('minus');
    } else if (num < 0) {
        strNum.classList.remove('plus');
        strNum.classList.add('minus');
    } else {
        strNum.classList.remove('minus');
        strNum.classList.add('plus');
    }
}
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const numberElem = document.getElementById('number');
const reset = document.getElementById('reset');
let number = parseInt(numberElem.innerText, 10);
let intervalId = null; 

plus.addEventListener('click', () => update(1));
minus.addEventListener('click', () => update(-1));
reset.addEventListener('click', () => {
    number = 0;
    numberElem.innerText = number;
    updateColour(number);
})

function startHoldChange(step) {
    if (intervalId) return;

    intervalId = setInterval(() => {
        update(step);
    }, 100);
}

function stopHoldChange() {
    clearInterval(intervalId);
    intervalId = null;
}

plus.addEventListener('mousedown', ()=> startHoldChange(1));
plus.addEventListener('mouseup', stopHoldChange);
plus.addEventListener('mouseleave', stopHoldChange);

minus.addEventListener('mousedown', ()=> startHoldChange(-1));
minus.addEventListener('mouseup', stopHoldChange);
minus.addEventListener('mouseleave', stopHoldChange);

function update(step) {
    number += step;
    numberElem.innerText = number;
    updateColour(number);
}


function updateColour(num) {
    if (num === 0) {
        numberElem.classList.remove('plus');
        numberElem.classList.remove('minus');
    } else if (num < 0) {
        numberElem.classList.remove('plus');
        numberElem.classList.add('minus');
    } else {
        numberElem.classList.remove('minus');
        numberElem.classList.add('plus');
    }
}

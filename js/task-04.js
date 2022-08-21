
const valueEl = document.querySelector('#value');
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementEl.addEventListener('click', onBtnMinus);
incrementEl.addEventListener('click', onBtnPlus);

function onBtnMinus() {
    counterValue -= 1;
    console.log(counterValue);
    valueEl.textContent = counterValue;
};
function onBtnPlus() {
    counterValue += 1;
    console.log(counterValue);
    valueEl.textContent = counterValue;
}






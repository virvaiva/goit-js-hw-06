const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', newInput);


function newInput(a) {
    spanEl.textContent = a.currentTarget.value;
    if (a.currentTarget.value === " ") {
        spanEl.textContent = "Anonymous"
    }
}
const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', newInput);


function newInput(event) {
    spanEl.textContent = event.currentTarget.value;
    if (a.currentTarget.value === " ") {
        spanEl.textContent = "Anonymous"
    }
}
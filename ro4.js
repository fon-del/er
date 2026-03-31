let inputs = document.querySelectorAll('input');
let map = new Map();

for (let i = 0; i < inputs.length; i++) {
    map.set(inputs[i], i + 1);
}

for (let input of inputs) {
    input.addEventListener('click', function () {
        this.value = map.get(this);
    });
}
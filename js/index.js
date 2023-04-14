const closeBtn = document.getElementById('close');
const switchStates = document.querySelectorAll('.switch');
const inputsEl = document.querySelectorAll('.inputs');

closeBtn.addEventListener('click', function() {
    switchStates[1].classList.remove('active');
    switchStates[0].classList.add('active');
    for (input of inputsEl) {
        input.value = '';
    }
})



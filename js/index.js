const switchState = document.querySelectorAll('.switch');
const alienNameHolders = document.querySelectorAll('.alien-name');
const errors = document.querySelectorAll('.error');
const alienNameInput = document.getElementById('alien-name-input');
const btnSubmit = document.getElementById('btn-submit');




btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if(alienNameInput.value != '') {
        for (let alienName of alienNameHolders) {
            alienName.innerHTML = alienNameInput.value;
        }
        switchState[0].classList.remove('active');
        switchState[1].classList.add('active');
    }
    else {
        for (let error of errors) {
            error.innerHTML = "Field required";
        }
    }
})


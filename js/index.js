const switchState = document.querySelectorAll('.switch');
const alienNameHolders = document.querySelectorAll('.alien-name');
const nounOneHolders = document.querySelectorAll('.noun-one');
const nounTwoHolders = document.querySelectorAll('.noun-two');
const nounThreeHolders = document.querySelectorAll('.noun-three');
const errors = document.querySelectorAll('.error');
const alienNameInput = document.getElementById('alien-name-input');
const nounOneInput = document.getElementById('noun1');
const nounTwoInput = document.getElementById('noun2');
const nounThreeInput = document.getElementById('noun3');
const btnSubmit = document.getElementById('btn-submit');




btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if(alienNameInput.value != '') {
        for (let alienName of alienNameHolders) {
            alienName.innerHTML = alienNameInput.value;
        }
        for (let nounOne of nounOneHolders) {
            nounOne.innerHTML = nounOneInput.value;
        }
        for (let nounTwo of nounTwoHolders) {
            nounTwo.innerHTML = nounTwoInput.value;
        }
        for (let nounThree of nounThreeHolders) {
            nounThree.innerHTML = nounThreeInput.value;
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


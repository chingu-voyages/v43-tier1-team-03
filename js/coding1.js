const switchState = document.querySelectorAll('.switch');
const nameHolders = document.querySelectorAll('.name');
const nounOneHolders = document.querySelectorAll('.noun-one');
const nounTwoHolders = document.querySelectorAll('.noun-two');
const nounThreeHolders = document.querySelectorAll('.noun-three');
const adjectiveOneHolders = document.querySelectorAll('.adjective-one');
const ajectiveTwoHolder = document.getElementById('adjective-two');
const verbOneHolder = document.getElementById('verb-one');
const verbTwoHolder = document.getElementById('verb-two');
const nameInput = document.getElementById('name-input');
const nounOneInput = document.getElementById('noun1');
const nounTwoInput = document.getElementById('noun2');
const nounThreeInput = document.getElementById('noun3');
const adjectiveOneInput = document.getElementById('adjective1');
const adjectiveTwoInput = document.getElementById('adjective2');
const verbOneInput = document.getElementById('verb1');
const verbTwoInput = document.getElementById('verb2');
const btnSubmit = document.getElementById('btn-submit');




btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if(alienNameInput.value != '') {
        for (let name of nameHolders) {
            name.innerHTML = nameInput.value;
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
        for (let adjectiveOne of adjectiveOneHolders) {
            adjectiveOne.innerHTML = adjectiveOneInput.value;
        }

        ajectiveTwoHolder.innerHTML = adjectiveTwoInput.value;
        verbOneHolder.innerHTML = verbOneInput.value;
        verbTwoHolder.innerHTML = verbTwoInput.value;

        switchState[0].classList.remove('active');
        switchState[1].classList.add('active');
    }
})


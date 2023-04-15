const switchState = document.querySelectorAll('.switch');
const nameHolders = document.querySelectorAll('.name');
const adjectiveOneHolders = document.querySelectorAll('.adjective-one');
const adjectiveTwoHolders = document.querySelectorAll('.adjective-two');
const adjectiveThreeHolders = document.querySelectorAll('.adjective-three');
const adjectiveFourHolders = document.querySelectorAll('.adjective-four');
const nounOneHolder = document.getElementById('noun-one');
const nounTwoHolder = document.getElementById('noun-two');
const verbOneHolder = document.getElementById('verb-one');
const verbTwoHolder = document.getElementById('verb-two');
const nameInput = document.getElementById('name-input');
const nounOneInput = document.getElementById('noun1');
const nounTwoInput = document.getElementById('noun2');
const adjectiveOneInput = document.getElementById('adjective1');
const adjectiveTwoInput = document.getElementById('adjective2');
const adjectiveThreeInput = document.getElementById('adjective3');
const adjectiveFourInput = document.getElementById('adjective4')
const verbOneInput = document.getElementById('verb1');
const verbTwoInput = document.getElementById('verb2');
const btnSubmit = document.getElementById('btn-submit');




btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if(nameInput.value != '') {
        for (let name of nameHolders) {
            name.innerHTML = nameInput.value;
        }
        for (let adjective1 of adjectiveOneHolders) {
            adjective1.innerHTML = adjectiveOneInput.value;
        }
        for (let adjective2 of adjectiveTwoHolders) {
            adjective2.innerHTML = adjectiveTwoInput.value;
        }
        for (let adjective3 of adjectiveThreeHolders) {
            adjective3.innerHTML = adjectiveThreeInput.value;
        }
        for (let adjective4 of adjectiveFourHolders) {
            adjective4.innerHTML = adjectiveFourInput.value;
        }
        
        nounOneHolder.innerHTML = nounOneInput.value;
        nounTwoHolder.innerHTML = nounTwoInput.value;
        verbOneHolder.innerHTML = verbOneInput.value;
        verbTwoHolder.innerHTML = verbTwoInput.value;

        switchState[0].classList.remove('active');
        switchState[1].classList.add('active');
    }
})


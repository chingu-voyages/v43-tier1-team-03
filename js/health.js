const switchState = document.querySelectorAll('.switch');
const nameHolders = document.querySelectorAll('.name');
const nounOneHolders = document.querySelectorAll('.noun-one');
const nounTwoHolders = document.querySelectorAll('.noun-two');
const nounThreeHolders = document.querySelectorAll('.noun-three');
const adjectiveOneHolder = document.getElementById('adjective-one');
const adjectiveTwoHolder = document.getElementById('adjective-two');
const adjectiveThreeHolder = document.getElementById('adjective-three');
const verbOneHolder = document.getElementById('verb-one');
const verbTwoHolder = document.getElementById('verb-two');
const verbThreeHolder = document.getElementById('verb-three');
const nameInput = document.getElementById('name-input');
const nounOneInput = document.getElementById('noun1');
const nounTwoInput = document.getElementById('noun2');
const nounThreeInput = document.getElementById('noun3');
const adjectiveOneInput = document.getElementById('adjective1');
const adjectiveTwoInput = document.getElementById('adjective2');
const adjectiveThreeInput = document.getElementById('adjective3');
const verbOneInput = document.getElementById('verb1');
const verbTwoInput = document.getElementById('verb2');
const verbThreeInput = document.getElementById('verb3');
const btnSubmit = document.getElementById('btn-submit');




btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if(nameInput.value != '') {
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
        
        adjectiveOneHolder.innerHTML = adjectiveOneInput.value;
        adjectiveTwoHolder.innerHTML = adjectiveTwoInput.value;
        adjectiveThreeHolder.innerHTML = adjectiveThreeInput.value;
        verbOneHolder.innerHTML = verbOneInput.value;
        verbTwoHolder.innerHTML = verbTwoInput.value;
        verbThreeHolder.innerHTML = verbThreeInput.value;
        switchState[0].classList.remove('active');
        switchState[1].classList.add('active');
    }
})


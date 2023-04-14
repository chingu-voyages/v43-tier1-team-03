const switchState = document.querySelectorAll('.switch');
const nameOneHolders = document.querySelectorAll('.name-one');
const nameTwoHolders = document.querySelectorAll('.name-two');
const nounOneHolders = document.querySelectorAll('.noun-one');
const nounTwoHolders = document.querySelectorAll('.noun-two');
const nounThreeHolders = document.querySelectorAll('.noun-three');
const adjectiveOneHolder = document.getElementById('adjective-one');
const ajectiveTwoHolder = document.getElementById('adjective-two');
const verbOneHolder = document.getElementById('verb-one');
const verbTwoHolder = document.getElementById('verb-two');
const nameOneInput = document.getElementById('name1');
const nameTwoInput = document.getElementById('name2');
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

    if(nameOneInput.value != '') {
        for (let nameOne of nameOneHolders) {
            nameOne.innerHTML = nameOneInput.value;
        }
        for (let nameTwo of nameTwoHolders) {
            nameTwo.innerHTML = nameTwoInput.value;
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
        ajectiveTwoHolder.innerHTML = adjectiveTwoInput.value;
        verbOneHolder.innerHTML = verbOneInput.value;
        verbTwoHolder.innerHTML = verbTwoInput.value;

        switchState[0].classList.remove('active');
        switchState[1].classList.add('active');
    }
})


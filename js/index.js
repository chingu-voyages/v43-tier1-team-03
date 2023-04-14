const closeBtn = document.getElementById('close');
const switchState = document.querySelectorAll('.switch');

closeBtn.addEventListener('click', function() {
    switchState[1].classList.remove('active');
    switchState[0].classList.add('active');
})



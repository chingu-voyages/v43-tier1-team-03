import { jsPDF } from "jspdf";

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

$('#submit').click(function () {
    doc.fromHTML($('#print').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('pdf-version.pdf');
});


const doc = new jsPDF();


doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");


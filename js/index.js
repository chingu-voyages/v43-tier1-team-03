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

var doc = new jsPDF();
var specialElementHandlers = {
    '#print-btn': function (element, renderer) {
        return true;
    }
};

var jsVal = '';
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
function generatePdf(jsVal){
var doc = new jsPDF();

    doc.fromHTML($('#content'+jsVal).html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    var pdfName = $('#content'+jsVal+' .pdfName').html();
   // console.log();
    doc.save(pdfName.replace(/ /g,"_") + '.pdf');
}
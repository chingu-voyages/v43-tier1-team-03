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


$(document).ready(function(){
    //IE 11 Fix
    // Inititalize polyfills
    if(window.Promise === undefined){
      try{
        ES6Promise.polyfill();
      } catch (e) {
         // statements to handle any exceptions
         console.log(e);
      }
    }  
  
    var canvasShiftImage = function(oldCanvas,shiftAmt){
        shiftAmt = parseInt(shiftAmt) || 0;
        if(!shiftAmt){ return oldCanvas; }
        var newCanvas = document.createElement('canvas');
        newCanvas.height = oldCanvas.height - shiftAmt;
        newCanvas.width = oldCanvas.width;
        var ctx = newCanvas.getContext('2d');
        Pixastic.process(oldCanvas, "crop", {
            rect: {
              left: 0,
              top: shiftAmt,
              width: oldCanvas.width,
              height: (oldCanvas.height - shiftAmt)}},
              function (newImg) {
                ctx.drawImage(newImg,0, 0, newImg.width, newImg.height, 0, 0, newImg.width, newImg.height);
              }
        );
        return newCanvas;
    };  
  
    var canvasToImageSuccess = function(canvas) {
        var pdf = new jsPDF('p','pt','a4'),
            pdfInternals = pdf.internal,
            pdfPageSize = pdfInternals.pageSize,
            pdfScaleFactor = pdfInternals.scaleFactor,
            pdfPageWidth = pdfPageSize.width,
            pdfPageHeight = pdfPageSize.height,
            totalPdfHeight = 0,
            htmlPageHeight = canvas.height,
            htmlScaleFactor = canvas.width / (pdfPageWidth * pdfScaleFactor),
            safetyNet = 0;

        while (totalPdfHeight < htmlPageHeight && safetyNet < 15) {
            var newCanvas = canvasShiftImage(canvas, totalPdfHeight);
            pdf.addImage(newCanvas, 'jpeg', 0, 0, pdfPageWidth, 0, undefined, 'NONE');
            totalPdfHeight += (pdfPageHeight * pdfScaleFactor * htmlScaleFactor);
            if (totalPdfHeight < htmlPageHeight) {
                pdf.addPage();
            }
            safetyNet++;
        }
        return pdf;
    };  
  
      var isBrowserIE = function() {
        var M = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
          return true;
        }
        return false;
    };

    var printElement = function (element) {
        if(element){
        var pdf = new jsPDF('p','pt','a4')
        pdf.addHTML(element, 10, 10, {  pagesplit:true }, function() {
            pdf.save('test.pdf');
        });
          
     html2canvas(element, {
         onrendered: function(canvas) {
           var img = canvas.toDataURL('image/jpeg')

           var doc = new jsPDF('p', 'pt', 'a4');
           var options = {
               pagesplit: true
            };
           doc.addImage(img,'JPEG',0,0,1024,0);
           doc.save('webpage-pdf.pdf');
           }
      });       
          /*
          html2canvas(element[0], {
              onrendered: function(canvas){
                  var pdf = canvasToImageSuccess(canvas);
                  if(isBrowserIE()){
                    pdf.save('Rapiid-Export.pdf');
                  }else{
                    pdf.autoPrint();
                    window.open(pdf.output('bloburl'), '_blank');
                  }
              }
          });*/
        }
    };
  
    // Click on Print Button
    $('#printMe').click(function(){
     printElement($('#printItem'));      
    });
});


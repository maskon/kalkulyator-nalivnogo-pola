"use strict";
document.getElementById('resultWindow').style.display='none';

function mainFunc(){
  let result = "";
  let form = document.forms.mixCalculator;
  let factor = form.elements.factor.value;
  let square = form.elements.squareSurface.value;
  let height = form.elements.heightSurface.value;
  let prodName = form.elements.productCategory.value;
  let toSendEmailMessage = '';
  let emailSubject = '';
  if (square > 100000) {
    square = false;
  }
  if (height > 1001) {
    height = false;
  }
  if ( factor && height && square ) {

  let productConsume = factor;
  let totalWeight = calculateTotalWeight(square, height, productConsume);
  emailSubject += 'Расчет расхода: ' + prodName;
  toSendEmailMessage += prodName.toUpperCase() + ': ';
  toSendEmailMessage += 'На ' + square + ' кв.м, при толщине слоя ' + height + ' мм ';
  toSendEmailMessage += 'потребуется ' + totalWeight + ' кг;';

  result = totalWeight;
  setTimeout(function(){
      document.getElementById('prodName').innerHTML = prodName.toUpperCase();
      document.getElementById('totalWeight').innerHTML = totalWeight + ' кг';
      document.getElementById('totalHeight').innerHTML = height + ' мм';
      document.getElementById('totalSquare').innerHTML = square + ' м2';
      document.getElementById('emailSubject').innerHTML = emailSubject;
      document.getElementById('emailMessage').innerHTML = toSendEmailMessage;
      document.getElementById('resultWindow').style.display='block';
    }, 300);
    }
};
  function setNum(str){
    let num = parseInt(str, 10);
    return num;
  }

  function calculateTotalWeight(sqr, h, consume){
    let total = 0;
    total = Math.ceil((setNum(sqr) * setNum(h) * setNum(consume) / 1000));
    return total;
  }


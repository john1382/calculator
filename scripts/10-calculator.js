let calculation = localStorage.getItem('calculation') || '';
displayonpage()
function updateCalculation(value) {
  calculation += value;
  //console.log(calculation);
  displayonpage()
  localStorage.setItem('calculation',calculation)
  
}
function displayonpage(){document.querySelector('.js-calculation').innerHTML=calculation}
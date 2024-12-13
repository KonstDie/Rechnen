function addNumber(number){
     document.getElementById('resultArea').innerHTML += number;
}
function calculate(){
     let result = Math(('resultArea'))
     document.getElementById('resultArea').innerHTML = result;
}
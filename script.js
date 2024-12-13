function addNumber(number){
     document.getElementById('resultArea').innerHTML += number;
}
function calculate(){
     let result = .Math(document.getElementById('resultArea'))
     document.getElementById('resultArea').innerHTML = result;
}
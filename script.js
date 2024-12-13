function addNumber(number){
     document.getElementById('resultArea').innerHTML += number;
}
function calculate(){
     let result = document.getElementById('resultArea');
     result.innerHTML = Math(result)
}
function nothing(){
     document.getElementById('resultArea').innerHTML = 0 ;
}
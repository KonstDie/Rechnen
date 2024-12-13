function addNumber(number){
     document.getElementById('resultArea').innerHTML += number;
}
function calculate(){
     let container = document.getElementById('resultArea');
     let result = eval(container.innerHTML);
     container.innerHTML = result ;
}
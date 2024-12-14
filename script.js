function addNumber(number){
     document.getElementById('resultArea').innerHTML += number;
}
function calculate(){
     let container = document.getElementById('resultArea');
     let result = eval(container.innerHTML);
     container.innerHTML = result ;
}
function deleteAll(){
    let container = document.getElementById('resultArea');
    container.innerHTML = container.innerHTML.slice(0,-999999999999999999999999999999999999);
}

function deleteLast(){
     let container = document.getElementById('resultArea');
     container.innerHTML = container.innerHTML.slice(0,-1);
}

document.addEventListener("keydown", function(event) {
     if (event.key === 1-9) {
          let number = event.key
          document.getElementById('resultArea').innerHTML += number;
     }
 });
 
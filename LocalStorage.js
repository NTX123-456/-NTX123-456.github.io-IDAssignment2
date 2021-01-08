const inpKey = document.getElementById("inpKey");    /*Declare Constants*/
const inpValue = document.getElementById("inpValue");
const btnsubmit = document.getElementById("btnsubmit");
const Output = document.getElementById("Output");
btnsubmit.onclick = function(){          /*Function that detects for user input*/
    const key = inpKey.value;
    const value = inpValue.value;
     if (key && value){
        localStorage.setItem(key,value);
        location.reload();
     }
};
for (let i = 0; i< localStorage.length; i++){   /*Function that prints and displays user input */
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    Output.innerHTML += `${key}: ${value}<br/ >`;
}
function checkInput1(){
if (document.getElementById("inpKey") === '' || document.getElementById("inpKey") === null) {
            alert("Please enter a country");
        }
}
function checkInput2(){
if (document.getElementById("inpValue") === '' || document.getElementById("inpValue") === null) {
            alert("Please enter some information");
        }
}  

   

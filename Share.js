const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnsubmit = document.getElementById("btnsubmit");
const Output = document.getElementById("Output");

localStorage.removeItem("dadadadada")
localStorage.removeItem("dasdasdada")
localStorage.removeItem("adads")
localStorage.removeItem("dadadsadada")
btnsubmit.onclick = function(){
    const key = inpKey.value;
    const value = inpValue.value;

   

    if (key && value){
        localStorage.setItem(key,value);
        location.reload();
    }
};

for (let i = 0; i< localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    Output.innerHTML += `${key}: ${value}<br/ >`;
    
}

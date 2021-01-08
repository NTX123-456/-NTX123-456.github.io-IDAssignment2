const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnsubmit = document.getElementById("btnsubmit");
const Output = document.getElementById("Output");
btnsubmit.onclick = function(){
    const key = inpKey.value;
    const value = inpValue.value;
     if (key && value){
        localStorage.setItem(key,value);
        location.reload();
     if (inpKey === '' || inpKey === null) {
            alert("Please enter a country");
        }
     if (inpValue === '' || inpValue === null) {
            alert("Please enter some information");
        }
    }
};
for (let i = 0; i< localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    Output.innerHTML += `${key}: ${value}<br/ >`;
}
   
   

   

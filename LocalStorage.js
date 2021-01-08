/*jslint browser:true */
var inpKey = document.getElementById("inpKey"),
    inpValue = document.getElementById("inpValue"),
    btnsubmit = document.getElementById("btnsubmit"),
    Output = document.getElementById("Output");
btnsubmit.onclick = function () { 'use strict';
    var key = inpKey.value,
        value = inpValue.value;
     if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
     };
for (var i = 0; i< localStorage.length; i++){ 'use strict';
    var key1 = localStorage.key(i);
    var value1 = localStorage.getItem(key);
    Output.innerHTML += `${key1}: ${value1}<br/ >`;
}

   
   

   

/*jslint browser: true*/
/*global $, jQuery, alert*/
/* Initialize Jquery usage */
/*jslint devel: true */
function myFunction() { 'use strict';
    var request,
        input1 = document.getElementById('continent'),
        api = 'https://corona.lmao.ninja/v2/continents/',
        apikey =
            "?yesterday&stricty",
        sum = api + input1.value + apikey;
    request = new XMLHttpRequest();
    request.open('GET', sum, true);
    request.onload = function () {
        var data = JSON.parse(this.response),
            active = data.active,
            continent = data.continent,
            activePerOneMillion = data.activePerOneMillion,
            cases = data.cases,
            countries = data.countries,
            deaths = data.deaths,
            recovered = data.recovered,
            critical = data.critical;
        $(".active").append(active);
        $(".continent").append(continent);
        $(".activePerOneMillion").append(activePerOneMillion);
        $(".cases").append(cases);
        $(".countries").append(countries);
        $(".deaths").append(deaths);
        $(".recovered").append(recovered);
        $(".critical").append(critical);
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
        } else {
            console.log(input1.value);
        }
        if (input1.value === '' || input1.value === null) {
            alert("Please enter a continent");
        }
    };
    request.send();
     }
function clearBox() { 'use strict';
    document.getElementById("Reset");
    window.location.reload();
     }
function myFunction2() { 'use strict';
    var request,
        input1 = document.getElementById('countries'),
        api = 'https://corona.lmao.ninja/v2/countries/',
        apikey =
            "?yesterday",
        sum = api + input1.value + apikey;
    request = new XMLHttpRequest();
    request.open('GET', sum, true);
    request.onload = function () {
        var data = JSON.parse(this.response),
            country = data[0].country,
            active = data[0].active,
            activePerOneMillion = data[0].activePerOneMillion,
            cases = data[0].cases,
            continent = data[0].continent,
            country2 = data[1].country,
            activePerOneMillion2 = data[1].activePerOneMillion,
            cases2 = data[1].cases,
            active2 = data[1].active,
            continent2 = data[1].continent;
        $(".country1").append(country);
        $(".active1").append(active);
        $(".activePerOneMillion1").append(activePerOneMillion);
        $(".cases1").append(cases);
        $(".continent1").append(continent);
        $(".country2").append(country2);
        $(".active2").append(active2);
        $(".activePerOneMillion2").append(activePerOneMillion2);
        $(".cases2").append(cases2);
        $(".continent2").append(continent2);
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
        } else {
            console.log(input1.value);
        }
        if (input1.value === '' || input1.value === null) {
            alert("Please enter two countries");
        }
    };
    request.send();
     }
function clearBox2() { 'use strict';
    document.getElementById("Reset");
    window.location.reload();
     }
function myFunction3() { 'use strict';
    var request,
        input1 = document.getElementById('Historical'),
        input2 = document.getElementById('days'),
        api = 'https://corona.lmao.ninja/v2/historical/',
        apikey =
            "?lastdays=",
        sum = api + input1.value + apikey + input2.value;
    request = new XMLHttpRequest();
    request.open('GET', sum, true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
        } else {
            console.log(input1.value);
        }
        if (input1.value === '' || input1.value === null) {
            alert("Please enter a country");
        }
    };
    request.send();
    }
function clearBox3() { 'use strict';
    document.getElementById("Reset");
    window.location.reload();
     }


     
        
    
                
                 
            
            
           
           
            
           
      
            
           
           
 
    
       
            
    
   
            


            
            
           
            
   
 
    
       
   
        
           

            
           
       

    
        
    
    

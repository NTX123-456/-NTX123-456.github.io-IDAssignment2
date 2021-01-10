/*jslint browser: true*/
/*global $, jQuery, alert*/
/* Initialize Jquery usage */
/*jslint devel: true */
$.getJSON("https://api.apify.com/v2/key-value-stores/yaPbKe9e5Et61bl7W/records/LATEST?disableRedirect=true",
     function (data) { 'use strict';
        console.log(data);
        var infected = data.infected,
            discharged = data.discharged,
            inCommunityFacilites = data.inCommunityFacilites,
            deceased = data.deceased,
            recovered = data.recovered,
            activeCases = data.activeCases,
            criticalHospitalized = data.criticalHospitalized;
            $(".infected").append(infected);
            $(".discharged").append(discharged);
            $(".Facilities").append(inCommunityFacilites);
            $(".deceased").append(deceased);
            $(".recovered").append(recovered);
            $(".activeCases").append(activeCases);
            $(".criticalHospitalized").append(criticalHospitalized);
         }
     );
$.getJSON("https://corona.lmao.ninja/v2/all?yesterday",
         function (data) { 'use strict';
         console.log(data);
         var affectedCountries = data.affectedCountries,
            cases = data.cases,
            todayCases = data.todayCases,
            deaths = data.deaths,
            todayDeaths = data.todayDeaths,
            recovered = data.recovered;
            $(".affectedCountries").append(affectedCountries);
            $(".cases").append(cases);
            $(".todayCases").append(todayCases);
            $(".deaths").append(deaths);
            $(".todayDeaths").append(todayDeaths);
            $(".recovered2").append(recovered);
        }
     );

var api = "https://corona.lmao.ninja/v2/countries/";
var apiend = "?yesterday'?yesterday=true&strict=true&query";
var input;
function myFunction() { 'use strict';
    var request,
        input1 = document.getElementById('country'),
        api = 'https://corona.lmao.ninja/v2/countries/',
        apikey =
            "?yesterday'?yesterday=true&strict=true&query",
        sum = api + input1.value + apikey;
    request = new XMLHttpRequest();
    request.open('GET', sum, true);
    request.onload = function () {
        var data = JSON.parse(this.response),
            population = data.population,
            active = data.active,
            activePerOneMillion = data.activePerOneMillion,
            totalcasesPerOneMillion = data.casesPerOneMillion,
            totalcases = data.cases,
            critical = data.critical,
            deaths = data.deaths,
            todayCases  = data.todayCases,
            todayDeaths  = data.todayDeaths;
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
            $(".population").append(population);
            $(".active").append(active);
            $(".activePerOneMillion").append(activePerOneMillion);
            $(".totalcases").append(totalcases);
            $(".totalcasesPerOneMillion").append(totalcasesPerOneMillion);
            $(".critical").append(critical);
            $(".deaths2").append(deaths);
            $(".todayCases2").append(todayCases);
            $(".todayDeaths2").append(todayDeaths);
        } else {
            console.log(input1.value);
        }
        if (input1.value === '' || input1.value === null) {
            alert("Please enter a country");
        }
    };
    request.send();
     }
function clearBox() {'use strict';
    document.getElementById("Reset");
    window.location.reload();
    }
     
   
  



  



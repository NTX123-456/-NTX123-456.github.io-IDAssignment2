function myFunction() {

    var request;
    var input1 = document.getElementById('continent');
    var api = 'https://corona.lmao.ninja/v2/continents/';
    var apikey =
        "?yesterday&stricty";
    var sum = api + input1.value + apikey;
 
    request = new XMLHttpRequest();
 
    request.open('GET', sum, true);
    request.onload = function () {
 
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
            var active = data.active
            $(".active").append(active);
            var continent = data.continent
            $(".continent").append(continent);
            var activePerOneMillion = data.activePerOneMillion
            $(".activePerOneMillion").append(activePerOneMillion);
            var cases = data.cases
            $(".cases").append(cases);
            var countries = data.countries
            $(".countries").append(countries);
            var deaths = data.deaths
            $(".deaths").append(deaths);
            var recovered = data.recovered
            $(".recovered").append(recovered);
            var critical = data.critical
            $(".critical").append(critical);
           
           
            
           
        } else {
            console.log(input1.value);
            
 
        }
    }
 
    request.send();
 }
function clearBox()
{
   document.getElementById("Reset");
   window.location.reload();
}

function myFunction2() {

    var request;
    var input1 = document.getElementById('countries');
    var api = 'https://corona.lmao.ninja/v2/countries/';
    var apikey =
        "?yesterday";
    var sum = api + input1.value + apikey;
 
    request = new XMLHttpRequest();
 
    request.open('GET', sum, true);
    request.onload = function () {
 
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
            
            var country = data[0].country
            $(".country1").append(country);
            var active = data[0].active
            $(".active").append(active)
            var activePerOneMillion = data[0].activePerOneMillion
            $(".activePerOneMillion").append(activePerOneMillion)
            var cases = data[0].cases
            $(".cases").append(cases)
            var continent = data[0].continent
            $(".continent").append(continent)
            
            
            
            
            
            
            var country = data[1].country
            $(".country2").append(country);
            var active = data[1].active
            $(".active2").append(active)
            var activePerOneMillion = data[1].activePerOneMillion
            $(".activePerOneMillion2").append(activePerOneMillion)
            var cases = data[1].cases
            $(".cases2").append(cases)
            var continent = data[1].continent
            $(".continent2").append(continent)
           
           
            
           
        } else {
            console.log(input1.value);
            
 
        }
    }
 
    request.send();
 }
function clearBox2()
{
   document.getElementById("Reset");
   window.location.reload();
}


function myFunction3() {

    var request;
    var input1 = document.getElementById('Historical');
    var input2 = document.getElementById('days');
    var api = 'https://corona.lmao.ninja/v2/historical/';
    var apikey =
        "?lastdays=";
    var sum = api + input1.value + apikey + input2.value;
 
    request = new XMLHttpRequest();
 
    request.open('GET', sum, true);
    request.onload = function () {
 
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
            
            
            
           
           
            
           
        } else {
            console.log(input1.value);
            
 
        }
    }
 
    request.send();
 }
function clearBox3()
{
   document.getElementById("Reset");
   window.location.reload();
}
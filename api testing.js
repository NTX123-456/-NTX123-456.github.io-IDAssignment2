$.getJSON("https://api.apify.com/v2/key-value-stores/yaPbKe9e5Et61bl7W/records/LATEST?disableRedirect=true",
   function(data){
   console.log(data);
   
   var infected = data.infected;
   $(".infected").append(infected);
   var discharged = data.discharged;
   $(".discharged").append(discharged);
   var inCommunityFacilites = data.inCommunityFacilites;
   $(".Facilities").append(inCommunityFacilites);
   var deceased = data.deceased
   $(".deceased").append(deceased);
   var recovered = data.recovered
   $(".recovered").append(recovered);
   var activeCases = data.activeCases
   $(".activeCases").append(activeCases);
   var criticalHospitalized = data.criticalHospitalized
   $(".criticalHospitalized").append(criticalHospitalized);
   
   



   }


);
$.getJSON("https://api.covid19api.com/summary",
   function(data){
   console.log(data);
   var updated = data.Global.TotalConfirmed
   $(".updated").append(updated);
   var NewConfirmed = data.Global.NewConfirmed
   $(".NewConfirmed").append(NewConfirmed);
   var NewDeaths = data.Global.NewDeaths
   $(".NewDeaths").append(NewDeaths);
   var criticalHospitalized = data.Global.criticalHospitalized
   $(".criticalHospitalized").append(criticalHospitalized);
   var NewRecovered = data.Global.NewRecovered
   $(".NewRecovered").append(NewRecovered);
   var TotalRecovered = data.Global.TotalRecovered
   $(".TotalRecovered").append(TotalRecovered);
  


   }


);


function changeurl() {
   location.replace("https://www.moh.gov.sg/covid-19")
 }
function changeurl2(){
   location.replace("https://www.worldometers.info/coronavirus/")
}
function changeurl3(){
   location.replace("https://www.who.int/health-topics/coronavirus#tab=tab_1")
}
function changeurl4(){
   location.replace("https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public")
}
function changeurl5(){
   location.replace("https://www.channelnewsasia.com/")
}

var api = "https://corona.lmao.ninja/v2/countries/";
var apiend = "?yesterday'?yesterday=true&strict=true&query";
var input;


function myFunction() {

   var request;
   var input1 = document.getElementById('country');
   var api = 'https://corona.lmao.ninja/v2/countries/';
   var apikey =
       "?yesterday'?yesterday=true&strict=true&query";
   var sum = api + input1.value + apikey;

   request = new XMLHttpRequest();

   request.open('GET', sum, true);
   request.onload = function () {

       var data = JSON.parse(this.response);
       if (request.status >= 200 && request.status < 400) {
           console.log(data);
           var population = data.population
           $(".population").append(population);
           var active = data.active
           $(".active").append(active);
           var activePerOneMillion = data.activePerOneMillion
           $(".activePerOneMillion").append(activePerOneMillion);
           var totalcases = data.cases
           $(".totalcases").append(totalcases);
           var totalcasesPerOneMillion  = data.casesPerOneMillion
           $(".totalcasesPerOneMillion").append(totalcasesPerOneMillion);
           var critical  = data.critical
           $(".critical").append(critical);
           var deaths  = data.deaths
           $(".deaths").append(deaths);
           var todayCases  = data.todayCases
           $(".todayCases").append(todayCases);
           var todayDeaths  = data.todayDeaths
           $(".todayDeaths").append(todayDeaths);
          
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

           





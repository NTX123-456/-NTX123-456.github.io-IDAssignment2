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
$.getJSON("https://corona.lmao.ninja/v2/all?yesterday",
   function(data){
   console.log(data);
   var affectedCountries = data.affectedCountries
   $(".affectedCountries").append(affectedCountries);
   var cases = data.cases
   $(".cases").append(cases);
   var todayCases = data.todayCases
   $(".todayCases").append(todayCases);
   var deaths = data.deaths
   $(".deaths").append(deaths);
   var todayDeaths = data.todayDeaths
   $(".todayDeaths").append(todayDeaths);
   var recovered = data.recovered
   $(".recovered2").append(recovered);
  



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
function changeurl6(){
   location.replace("https://www.tracetogether.gov.sg/")
}
function changeurl7(){
   location.replace("https://www.moh.gov.sg/policies-and-legislation/covid-19-(temporary-measures)-(control-order)-regulations")
}
function changeurl8(){
   location.replace("https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19#:~:text=symptoms")
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
           $(".deaths2").append(deaths);
           var todayCases  = data.todayCases
           $(".todayCases2").append(todayCases);
           var todayDeaths  = data.todayDeaths
           $(".todayDeaths2").append(todayDeaths);
          
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

           





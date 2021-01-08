# NTX123-456.github.io-IDAssignment2
<h1>Webpage on ID assignment 2 (by Ng Tung Xuan)</h1>
<h2>Motive of this website:</h2> 
<p>To allow Users in Singapore to get information regarding Covid-19 and stay updated on the conditions of 
other countries affected by covid-19 as well as Singapore. This is to help users extract more information more easily for example, the
daily cases or total cases of covid-19 cases in Singapore or other countries and how to protect themselves against covid-19 as well.<p>
 
<h2>Useful Links</h2>
<li> Github Repository for this assignment: https://github.com/NTX123-456/NTX123-456.github.io-IDAssignment2 </li>
<li> Github pages that this website is hosted on (Mainpage): https://ntx123-456.github.io/NTX123-456.github.io-IDAssignment2/ </li>
<li> MoreOptions page: https://ntx123-456.github.io/NTX123-456.github.io-IDAssignment2/MoreOptions.html </li>
<li> Sharing page: https://ntx123-456.github.io/NTX123-456.github.io-IDAssignment2/Share.html </li>

<h2>Features of this website:</h2>
<li>1. The first feature of this website allows users to search for covid-19 data for a specific country by entering the specified country in the search bar</li>
<li>2. The Second feature of this website allows users to search for covid-19 data for a specific continent by entering the specified continent in the search bar</li>
<li>3. The Third feature of this website allows users to search for two countries they want and compare the data by entering the two countries seperated by a comma in the search bar</li>
<li>4. The final feature of this website allows users to store any covid-19 data that they want to take note of or record it through a local storage function. Users can input any information or data they want to record in the input bar and it will be stored in the localstorage in the local browser</li>

<h2>Design Process:</h2>
<h4>This Website is made to allow users in Singapore or other users from other countries to be able to access Covid-19 data easily. For example if users want to find out about the total amount of cases around the world, the amount of deaths of a particular country, or a continent, they can do so easily by just entering the country or continent they want in the search bar and the results will be shown. This idea came to me as we are now in this difficult period where covid-19 has affected most of the people around the world, hence I think that it is important for people to be prepared information wise so that they can protect themselves effectively against covid-19. Another motive of this website is also to allow users to find out more about covid-19. For example ways to protect themselves or the measures put in place in Singapore against covid-19. I also decided to add a new feature to the website that allows users to store the data that they want to compare by creating a local storage to store the information about covid-19 data that users want to take note of. Users can also compare the data between countries after storing them in the localstorage</h4>
 

<h2>Test cases</h2>
<li>1. For the Selecting Multiple countries feature, users must select 2 countries, not less, not more or else the results will not be shown</li>
<li>2. Everytime a user has finished searching for a feature, they must reset the page using the reset button provided in order to prevent extra appending of api data to the html container </li>
<li> For the historical data feature, to access results users have to inspect the page and go to the console and access the array to see it as the results may be too many to display properly, for example if a user searches for 30 days, it would be tedious to display all 30 days. </li>

Test | Test step | Expected Result | Actual Result | Pass/Fail |
------------ | ------------- | ------------- | -------------| ------------- |
Test if user input for local storage can be displayed | Key in data in the input box and submit and check for display | Display is shown | Display is shown |Pass|
Test if webpage is responsive when changed to mobile web version |Load webpage using a mobile phone and observe if there are any significant changes| Webpage is resized to suit mobile web users | Most of the webpage is resized properly,with a few images and input boxes that are too big that had to be resized accordingly. However for the main page when it is switched to the mobile version, the navigation bar is blocking some of the content in the carousel slider|Fail|  
|Test if all the hyperlinks can be accessed, ensure that there are no dead links in the website as well|Click on every hyperlink and check if it goes to the specified location|Hyperlinks bring user to intended location|All Hyperlinks are workable and brings user to the correct location|Pass|
Test if there are no errors in html/css codes using W3 html Validator and W3 css jigsaw validator|Paste links to all pages of the website in the W3 Html/Css validator to perform auto checking|No errors are surfaced or all errors are fixed|There are a few errors that came up in the html but were fixed, however for the css codes there was many errors found in the bootstrap css code|Fail|
Test if Javascript code contains no errors|Copy link to Javascript code in the validator to check| Javascript code contain lesser to no errors|Many errors are surfaced within the code,I tried to fix all the errors but in the end my function ends up not working as before hence I left most of the errors unfixed|Fail|

 
<h2>Future features that could be added</h2>
<li>One feature that could be added in the future would be to display the results properly for the historical data feature so that users can access the results without going to the console </li>
 
<h2>Deployment Process: </h2>
<h4>For the website hosted on Github pages and the website that is hosted locally, the differences are the links to the various bootstrap CSS and Js core codes. For the locally hosted website a more specific link will be used to access the css and js core codes.
  
<h2>How to request for api</h2>
<li>1. Find the most suitable api that you want to use for your website/application</li>
<li>2. Test your api on postman to see whether it works or not, if it does not work, find another suitable api to use</li>
<li>3. There are many ways to request for an api, but the way I used is the JSON way, but there are other ways to request for api such as fetch</li>

<h2>How did I do the layout for the website</h2>
Most of the layout of this website was taken from a bootstrap template, the templates and links to them can be found at the credits section.

<h1>Credits</h1>

<h3>Bootstrap used for this assignment</h3>
https://getbootstrap.com/

<h3>For (index.html page)</h3>
Carousel format used: https://getbootstrap.com/docs/5.0/examples/carousel/

<h3>For (MoreOptions and Storing page)</h3>
Starter template used: https://getbootstrap.com/docs/5.0/examples/starter-template/

<h3>Technologies used:</h3>
<li>Jquery</li>
<li>JavaScript</li>
<li>Html</li>
<li>Bootstrap</li>
<li>CSS</li>
<li>JSON</li>

<h3>Api used:</h3>

<h4>Resource pages</h4>
<li>https://covid-19-apis.postman.com/</li>
<li>https://documenter.getpostman.com/view/11144369/Szf6Z9B3?version=latest</li>
<li>https://apify.com/tugkan/covid-sg</li>

<h4>Link for api request</h4>
<li>https://api.apify.com/v2/key-value-stores/yaPbKe9e5Et61bl7W/records/LATEST?disableRedirect=true</li>
<li>https://corona.lmao.ninja/v2/countries/:query?yesterday</li>
<li>https://corona.lmao.ninja/v2/countries/:query?yesterday=true&strict=true&query</li>
<li>https://corona.lmao.ninja/v2/continents/:query?yesterday&strict</li>
<li>https://corona.lmao.ninja/v2/all?yesterday</li>

<h3>Websites used for hyperlinks:</h3>
<li>https://www.moh.gov.sg/covid-19</li>
<li>https://www.worldometers.info/coronavirus/</li>
<li>https://www.who.int/health-topics/coronavirus#tab=tab_1</li>
<li>https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public</li>
<li>https://www.channelnewsasia.com/</li>
<li>https://www.tracetogether.gov.sg/</li>
<li>https://www.moh.gov.sg/policies-and-legislation/covid-19-(temporary-measures)-(control-order)-regulations</li>
<li>https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19#:~:text=symptoms</li>

<h3>Images/Background Images used:</h3>
<li>https://www.access-info.org/wp-content/uploads/Covid19-whistleblower-e1586178863591.png</li>
<li>https://apsic-apac.org/wp-content/uploads/2020/03/Coronavirus-CDC-645x645-statnews.jpg</li>
<li>https://www.orfonline.org/wp-content/uploads/2020/04/Singapores.jpg</li>
<li>https://coolbackgrounds.io/images/backgrounds/index/aqua-d9b59c89.png</li>
<li>https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2020/02/12/16/17/coronovirus-8col.jpg</li>

<h3>Outside Code/ External code used/References Taken from the internet:</h3>
<li>For the code for svg images: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image</li>

<li>For the code for requesting query for api: https://stackoverflow.com/questions/52137425/api-query-with-user-input</li>

<li>Making a localStorage: https://www.youtube.com/watch?v=k8yJCeuP6I8</li>

<li>Learning how to request for a public api: https://www.youtube.com/watch?v=InoAIgBZIEA&t=515s</li>

<h3>Websites/applications that helped me to complete this assignment</h3>
<li>1. Github </li>
<li>2. Postman </li>
<li>3. Youtube </li>
<li>4. Stack Overflow </li>

<h3>Tools used for automated testing process</h3>
<li>W3 HTML Validator: https://validator.w3.org/</li>
<li>W3 CSS Validator: https://jigsaw.w3.org/css-validator/</li>
<li>W3 Link Checker: https://validator.w3.org/checklink</li>
<li>Api Validator: https://www.postman.com/</li>



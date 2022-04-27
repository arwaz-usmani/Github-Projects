const content = document.querySelector('#content');
const list = document.querySelector('#list');
const weather = document.querySelector('#weather');
const cityName = document.querySelector('#cityName');
const weatherContent = document.querySelector('#weatherContent');


const LI1 = document.createElement('li');
const LI2 = document.createElement('li');
const LI3 = document.createElement('li');
const LI4 = document.createElement('li');
LI2.style.marginTop = "15px";
LI3.style.marginTop = "15px";
LI4.style.marginTop = "15px";

const weatherdiv1 = document.createElement('div');
const weatherdiv2 = document.createElement('div');
weatherdiv2.style.marginLeft = "25px";
const weatherdiv3 = document.createElement('div');
const weatherdiv4 = document.createElement('div');


fetch(`https://covid-19-data.p.rapidapi.com/country?name=india&format=json`, {
	    "method": "GET",
	    "headers": {
		        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		        "x-rapidapi-key": "4c4f0257f4msh8310b4cb8fbe7bdp1d8cb9jsn13487c05e95c"
	    }
    })
    .then(data=> data.json())
    .then(res => {

    const confirmed = res[0].confirmed;
    LI1.innerText = `Confirmed cases : ${confirmed}`;
    content.append(LI1);



    const rec = res[0].recovered;
    LI2.innerText = `Recovered cases : ${rec}`;
    LI2.style.backgroundColor = "green";
    LI2.style.lineHeight = "25px";
    LI2.style.width = "310px";
    content.append(LI2);



    const cri = res[0].critical;
    LI3.innerText = `Critical cases : ${cri}`;
    content.append(LI3);



    const dea = res[0].deaths;
    LI4.innerText = `Deaths : ${dea}`;
    LI4.style.backgroundColor = "red";
    LI4.style.width = "180px"
    LI4.style.lineHeight = "25px";
    content.append(LI4);
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=bab281d79e5f1e9755a68d754cc313e7&units=metric')
    .then(data => data.json())
    .then(res => {
        cityName.innerText = res.name;

        weatherdiv1.innerText = `${Math.round(res.main.temp)}°C`;
        weatherContent.append(weatherdiv1);

        weatherdiv2.innerText = res.weather[0].main;
        weatherContent.append(weatherdiv2);

    })







function mainFunc(val){
        fetch(`https://covid-19-data.p.rapidapi.com/country?name=${val}&format=json`, {
	    "method": "GET",
	    "headers": {
		        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		        "x-rapidapi-key": "4c4f0257f4msh8310b4cb8fbe7bdp1d8cb9jsn13487c05e95c"
	    }
    })
    .then(data=> data.json())
    .then(res => {
    
    const confirmed = res[0].confirmed;
    LI1.innerText = `Confirmed cases : ${confirmed}`;



    const rec = res[0].recovered;
    LI2.innerText = `Recovered cases : ${rec}`;




    const cri = res[0].critical;
    LI3.innerText = `Critical cases : ${cri}`;



    const dea = res[0].deaths;
    LI4.innerText = `Deaths : ${dea}`;

    })


}

list.addEventListener('change',function(){
    const country = capital[parseInt(this.value)];
    const val = parseInt(this.value) +1;
    const Capital = capital[val] ;
    mainFunc(country);
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Capital}&appid=bab281d79e5f1e9755a68d754cc313e7&units=metric`)
    .then(data => data.json())
    .then(res => {
        cityName.innerText = res.name;

        weatherdiv1.innerText = `${Math.round(res.main.temp)}°C`;

        weatherdiv2.innerText = res.weather[0].main;

    })

});

const capital = [
    "india","delhi", //0,1
    "USA","washington", //2,3
    "canada","ottawa", //4,5
    "australia","canberra", //6,7
    "germany","berlin", //8,9
    "netherlands","amsterdam", //10,11
    "uk","london", //12,13
    "sweden","stockholm", //14,15
    "norway","oslo", //16,17
    "denmark","copenhagen", //18,19
    "france","paris", //20,21
    "italy","rome", //22,23
    "uae","Abu%20dhabi", //24,25
    "spain","madrid", //26,27
    "portugal","lisbon", //28,29
    "belgium","brussels", //30,31 




]
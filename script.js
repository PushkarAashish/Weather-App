const apiKey ="accdaf0da6a0d8a0aeb265a227a43027" 
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const serachBox = document.querySelector(".search input");
const serachBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "Assets/clouds.png";
    } 
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "Assets/clear.png";
    } 
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "Assets/rain.png";
    } 
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "Assets/drizzle.png";
    } 
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "Assets/mist.png";
    } 

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    
}

serachBtn.addEventListener("click", ()=>{
    checkWeather(serachBox.value);
})


const apiKey = "079387fec2258819ee8610d218270b42";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{

    var data = await response.json(); 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".huminity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "weather-app-img/images/clouds.png"

    }else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "weather-app-img/images/clear.png"
    }else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "weather-app-img/images/rain.png"
    }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "weather-app-img/images/drizzle.png"
    }else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "weather-app-img/images/mist.png"

}
    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
}
}

searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

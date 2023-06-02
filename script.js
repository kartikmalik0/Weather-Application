const apiKey = "bed7927e5edc7f4bc92ed5888d2ec8be"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchValue = document.getElementById("entered-city")
const searchBtn = document.querySelector(".search button")
const weatherImage = document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.err').style.display = "block"
        document.querySelector('.weather').style.display = "none"

    } else {
        var data = await response.json()

        console.log(data)

        // selection of all html elements
        document.querySelector(".city-name").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h"

        if (data.weather[0].main == "Clouds") {
            weatherImage.src = "weather-app-img/images/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weatherImage.src = "weather-app-img/images/clear.png"
        } else if (data.weather[0].main == "Rain") {
            weatherImage.src = "weather-app-img/images/rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherImage.src = "weather-app-img/images/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherImage.src = "weather-app-img/images/mist.png"
        } else if (data.weather[0].main == "Snow") {
            weatherImage.src = "weather-app-img/images/snow.png"
        }

        //displaying the weather div
        document.querySelector(".weather").style.display = 'block'
        document.querySelector('.err').style.display = 'none'

    }


}
searchBtn.addEventListener("click", () => {
    checkweather(searchValue.value)
    searchValue.value = ""
})
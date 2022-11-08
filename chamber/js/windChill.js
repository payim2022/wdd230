// Script for Weather and Wind Chill **I removed the previous codes and added new ones based on what I learned in Week 10 lesson

apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5660340&appid=caa8540702ef690bc84e562267149524&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);

        const iconURL = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;

        let temp = jsonObject.main.temp;
        let speed = jsonObject.wind.speed;

        document.querySelector('.cityName').textContent = jsonObject.name;
        document.querySelector('figcaption').textContent = jsonObject.weather[0].description;
        document.querySelector('#weatherIcon').setAttribute('src', iconURL);
        document.querySelector('#weatherIcon').setAttribute('alt', jsonObject.weather[0].description);
        document.querySelector('.temp').innerHTML = `Temperature: ${temp} &deg;F`;
        document.querySelector('.wind-speed').textContent = `Wind Speed: ${speed} mph`;
        document.querySelector('.humidityDiv').textContent = `Humidity: ${jsonObject.main.humidity}`;

        let windChill = computeWindChill(temp, speed);

        document.querySelector('.wind-chill').textContent = `Wind Chill: ${windChill}`;

        
    });

    function computeWindChill(t, s) {
        windchill = Math.round((35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16) * 100 / 100);

        if (t <= 50 && s > 3) {
            return windchill
        } else {
            return `N/A`
        }
    }

// get the temperature from the html weather div
const tempNumber = parseFloat(document.getElementById("temp").textContent);

//get the wind speed
const speedNumber = parseFloat(document.getElementById("speed").textContent);

//calculate the windchill
let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + 
                (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
windchill = Math.round(windchill);
//check the wind chill
if (tempNumber <=50 && speedNumber > 3 ){
    document.getElementById("chill").textContent = windchill;
}else{
    document.getElementById("chill").textContent = "N/A";
}






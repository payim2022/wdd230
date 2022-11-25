const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');

const url = '//api.openweathermap.org/data/2.5/weather?id=1699896&appid=c3e03e142bc240cc1eac2f7fdabc06c3&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        (windchill);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function displayResults(weatherData) {
    const tempFahrenheit = weatherData.main.temp.toFixed(0);
    currentTemp.innerHTML = `${ Math.round((tempFahrenheit - 32) * 5/9)}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    let capDesc = "";
    for (let i = 0; i < desc.length; i++) {
        if (desc[i-1] == " " || desc[i] == desc[0]) {
            capDesc += desc[i].toUpperCase();
        } else {
            capDesc += desc[i];
        }
    }

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', capDesc);
    captionDesc.textContent = capDesc;
}


// WIND SPEED AND CHILL
const tempNumber =parseFloat(document.getElementById("current-temp").textContent);
const speedNumber = parseFloat(document.getElementById("speed").textContent);

let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + 
                (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
windchill = Math.round(windchill);
if (tempNumber <=50 && speedNumber > 3 ){
    document.getElementById("chill").textContent = windchill;
}else{
    document.getElementById("chill").textContent = " N/A";
}
const API_KEY = "61d5015032bed62f4a716f3c6ba42b2c";
const weatherInfo = document.getElementById('weather');

function onOK(geoinfo) {

    const lat = geoinfo.coords.latitude;
    const lon = geoinfo.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {

        weatherInfo.querySelector('span:first-child').innerText = data.name;
        weatherInfo.querySelector('span:last-child').innerText = data.main.temp + "℃";

    });
}

function onFail(geoinfo) {

    console.log(geoinfo);
}

navigator.geolocation.getCurrentPosition(onOK, onFail);

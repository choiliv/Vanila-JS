
const API_KEY = "8ca8df4a2fc5740b8015ccb2eff01a5f";

function onGeoOK(position) {

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8ca8df4a2fc5740b8015ccb2eff01a5f&units=metric`;
    fetch(url)
    .then((response)=> response.json())
    .then((data)=> {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
}


function onGeoError() {
     alert("Sorry, I can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

const clock = document.querySelector("#clock");
const day = document.querySelector("#day");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}

function getDay() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    day.innerText =`${year}-${month}-${day}`; 
    
}


getClock();
setInterval(getClock, 1000);
getDay();


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
    const month = (date.getMonth()+1);
    const today = date.getDate();
    day.innerText =year+ "/" +month + "/"+today;

}


getClock();
setInterval(getClock, 1000);
getDay();

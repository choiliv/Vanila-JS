



const images = ["3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

document.body.style.backgroundImage =`url(img/${chosenImage})`;










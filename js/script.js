var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

fans.addEventListener("mouseover", function () {
    fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
    fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
    pets.innerText = "20K";
});

var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var headline = document.querySelector("h1");
var body = document.querySelector("body");

toggle.addEventListener("click", function () {
    if (toggle.classList.contains("light")) {
        toggle.classList.remove("light");
        ball.classList.remove("move-right");
        headline.innerText = "Stealth Quincy";
    } else {
        body.classList.add("light");
        ball.classList.add("move-right");
        headline.innerText = "Party Quincy";
    }
})
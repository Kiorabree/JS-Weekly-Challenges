// Part 1: Create a new div of class "planet" and set its background color to the color of your choice. Then, append it to the body in the DOM.
var newPlanet = document.createElement("div");
newPlanet.className = "planet";
newPlanet.style.backgroundColor = "green";
document.body.appendChild(newPlanet);

// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.
var newMoon = document.createElement("div");
newMoon.className = "Moon";
newPlanet.appendChild(newMoon);

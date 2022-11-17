// Variables for images
let lightbulb = document.getElementById("lightbulb");
let circle = document.getElementById("circle");
let linechart = document.getElementById("linechart");
let checklist = document.getElementById("checklist");
let microscope = document.getElementById("microscope");
let money = document.getElementById("money");
let pencil = document.getElementById("pencil");
let head = document.getElementById("head");

// Variables for tear containers
let grey = document.getElementById("grey");
let orange = document.getElementById("orange");
let red = document.getElementById("red");
let purple = document.getElementById("purple");
let navy = document.getElementById("navy");
let lightblue = document.getElementById("lightblue");
let teal = document.getElementById("teal");
let green = document.getElementById("green");

// Event functions
const replace = function (img, inner_HTML, id) {
  let newItem = document.createElement("p");
  newItem.classList.add("tear-label");
  newItem.setAttribute("id", id);
  newItem.innerHTML = inner_HTML;
  img.replaceWith(newItem);
};

const restore = function (img, id) {
  let current = document.getElementById(id);
  current.replaceWith(img);
  img.style.animation = "fadeIn 0.5s";
};

// Event Listeners
grey.addEventListener("mouseover", function () {
  replace(lightbulb, "Research<br>Question", "greyLabel");
});

grey.addEventListener("mouseout", function () {
  restore(lightbulb, "greyLabel");
});

orange.addEventListener("mouseover", function () {
  replace(circle, "Research<br>Team", "orangeLabel");
});

orange.addEventListener("mouseout", function () {
  restore(circle, "orangeLabel");
});

red.addEventListener("mouseover", function () {
  replace(microscope, "Study<br>Design", "redLabel");
});

red.addEventListener("mouseout", function () {
  restore(microscope, "redLabel");
});

purple.addEventListener("mouseover", function () {
  replace(checklist, "Protocols<br>&<br>Compliance", "purpleLabel");
});

purple.addEventListener("mouseout", function () {
  restore(checklist, "purpleLabel");
});

navy.addEventListener("mouseover", function () {
  replace(money, "Funding", "navyLabel");
});

navy.addEventListener("mouseout", function () {
  restore(money, "navyLabel");
});

lightblue.addEventListener("mouseover", function () {
  replace(pencil, "Proposal<br>Development", "lightblueLabel");
});

lightblue.addEventListener("mouseout", function () {
  restore(pencil, "lightblueLabel");
});

teal.addEventListener("mouseover", function () {
  replace(head, "Conducting<br>the Study", "tealLabel");
});

teal.addEventListener("mouseout", function () {
  restore(head, "tealLabel");
});

green.addEventListener("mouseover", function () {
  replace(linechart, "Reporting<br>Results", "greenLabel");
});

green.addEventListener("mouseout", function () {
  restore(linechart, "greenLabel");
});

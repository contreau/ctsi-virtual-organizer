// Variables for images
let lightbulb = document.getElementById("lightbulb");
let circle = document.getElementById("circle");
let linechart = document.getElementById("linechart");
let checklist = document.getElementById("checklist");
let research = document.getElementById("research");
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
  replace(lightbulb, "<b>01</b><br>Research<br>Question", "greyLabel");
});

grey.addEventListener("mouseout", function () {
  restore(lightbulb, "greyLabel");
});

orange.addEventListener("mouseover", function () {
  replace(research, "<b>02</b><br>Research<br>Team", "orangeLabel");
});

orange.addEventListener("mouseout", function () {
  restore(research, "orangeLabel");
});

red.addEventListener("mouseover", function () {
  replace(circle, "<b>03</b><br>Study<br>Design", "redLabel");
});

red.addEventListener("mouseout", function () {
  restore(circle, "redLabel");
});

purple.addEventListener("mouseover", function () {
  replace(checklist, "<b>04</b><br>Protocols &<br>Compliance", "purpleLabel");
});

purple.addEventListener("mouseout", function () {
  restore(checklist, "purpleLabel");
});

navy.addEventListener("mouseover", function () {
  replace(money, "<b>05</b><br>Funding", "navyLabel");
});

navy.addEventListener("mouseout", function () {
  restore(money, "navyLabel");
});

lightblue.addEventListener("mouseover", function () {
  replace(pencil, "<b>06</b><br>Proposal<br>Development", "lightblueLabel");
});

lightblue.addEventListener("mouseout", function () {
  restore(pencil, "lightblueLabel");
});

teal.addEventListener("mouseover", function () {
  replace(head, "<b>07</b><br>Conducting<br>the Study", "tealLabel");
});

teal.addEventListener("mouseout", function () {
  restore(head, "tealLabel");
});

green.addEventListener("mouseover", function () {
  replace(linechart, "<b>08</b><br>Reporting<br>Results", "greenLabel");
});

green.addEventListener("mouseout", function () {
  restore(linechart, "greenLabel");
});

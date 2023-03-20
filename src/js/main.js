// Variables for images
const lightbulb = document.getElementById("lightbulb");
const circle = document.getElementById("circle");
const linechart = document.getElementById("linechart");
const checklist = document.getElementById("checklist");
const microscope = document.getElementById("microscope");
const money = document.getElementById("money");
const pencil = document.getElementById("pencil");
const head = document.getElementById("head");
const calendar = document.getElementById("calendar");

// Variables for tear containers
const grey = document.getElementById("grey");
const orange = document.getElementById("orange");
const red = document.getElementById("red");
const purple = document.getElementById("purple");
const navy = document.getElementById("navy");
const lightblue = document.getElementById("lightblue");
const teal = document.getElementById("teal");
const green = document.getElementById("green");
const centerpiece = document.querySelector(".centerpiece");

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
grey.addEventListener("mouseover", () => {
  replace(lightbulb, "Research<br>Question", "greyLabel");
});

grey.addEventListener("mouseout", () => {
  restore(lightbulb, "greyLabel");
});

orange.addEventListener("mouseover", () => {
  replace(circle, "Research<br>Team", "orangeLabel");
});

orange.addEventListener("mouseout", () => {
  restore(circle, "orangeLabel");
});

red.addEventListener("mouseover", () => {
  replace(microscope, "Study<br>Design", "redLabel");
});

red.addEventListener("mouseout", () => {
  restore(microscope, "redLabel");
});

purple.addEventListener("mouseover", () => {
  replace(checklist, "Protocols<br>&<br>Compliance", "purpleLabel");
});

purple.addEventListener("mouseout", () => {
  restore(checklist, "purpleLabel");
});

navy.addEventListener("mouseover", () => {
  replace(money, "Funding", "navyLabel");
});

navy.addEventListener("mouseout", () => {
  restore(money, "navyLabel");
});

lightblue.addEventListener("mouseover", () => {
  replace(pencil, "Proposal<br>Development", "lightblueLabel");
});

lightblue.addEventListener("mouseout", () => {
  restore(pencil, "lightblueLabel");
});

teal.addEventListener("mouseover", () => {
  replace(head, "Conducting<br>the Study", "tealLabel");
});

teal.addEventListener("mouseout", () => {
  restore(head, "tealLabel");
});

green.addEventListener("mouseover", () => {
  replace(linechart, "Reporting<br>Results", "greenLabel");
});

green.addEventListener("mouseout", () => {
  restore(linechart, "greenLabel");
});

centerpiece.addEventListener("mouseover", () => {
  replace(calendar, "Events", "calendarLabel");
});

centerpiece.addEventListener("mouseout", () => {
  restore(calendar, "calendarLabel");
});

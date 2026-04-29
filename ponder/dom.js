let title = document.querySelector('h1'); // find the first instance of h1

console.log(title);

title.textContent = "Web Page Components"; // Change the text of first h1 element

console.log(title);

// document.querySelector('#topics').style.color = "red"; // find an ID and change its color

let topics = document.querySelector("#topics"); // gets the id so it needs a #

topics.style.color = "purple";

const wrapper = document.getElementById("content"); // using the get-id so it doesn't need a #

wrapper.style.backgroundColor = "lightblue";

let list = document.querySelector('.list'); // selecting a class like this only grabs the 
// first element that matches that list.

list.style.border = "3px solid black"; // only the first element gets the border

let para = document.querySelector('p'); // select the first paragraph element

para.style.fontSize = "3em"; 

para.classList.add("background"); //This adds the previously unused class ".background" to 
// the first paragraph in the page. 
// This can be used to make a kind of "night-mode".

const image = document.querySelector("img");
image.setAttribute("src", "images/u2logo.png"); // change the logo image on the page. setAttribute
// takes two properties instead of one: the attribute you want to change and what you want
// to change it to.

let dropdown = document.querySelector("#webdevlist"); // select the dropdown menu
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");


dropdown.addEventListener("change", function(){
    html.style.color = "purple";
    css.style.color = "purple";
    js.style.color = "purple";


    let codeValue = dropdown.value;
    console.log(codeValue); // log the value of the dropdown menu when it changes
    document.getElementById(codeValue).style.color = "red";
}); // add an event listener to the dropdown menu that listens for a change in the dropdown


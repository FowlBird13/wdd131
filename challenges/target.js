//A couple of challenges to practice with DOM

//target 1: change the first paragraph's background color to yellow
const firstParagraph = document.querySelector("p");
firstParagraph.style.backgroundColor = "#f2c556";

//target 2: target the <em> in the first paragraph and
//assign it the background color #acbfcc
const emphasis = document.querySelector("em");
emphasis.style.backgroundColor = "#acbfcc";

//target 3: Change the text of the <em> to 'USS Voyager Starship'
emphasis.innerText = "USS Voyager Starship";

//target 4: add a new image element dynamically with js under the first 
//paragraph in the existing emphy div with the id of starship
let starship_img = document.createElement("img");
starship_img.src = 'https://bit.ly/3RfG4sY';
document.querySelector("#starship").appendChild(starship_img);

//target 5: ...

//target 6: add a border radius to your new image
starship_img.setAttribute("class", "rounded");

const rounded = document.querySelectorAll(".rounded");
rounded.setAttribute("border-radius", 5);
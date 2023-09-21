const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Nice picture");
document.body.appendChild(newImage);

const newSec = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b";
newSec.appendChild(newH2);
const newP = document.createElement("p");
newH2.innerText = "Welcome to Javascript Language";
newSec.appendChild(newP);

document.body.appendChild(newSec);


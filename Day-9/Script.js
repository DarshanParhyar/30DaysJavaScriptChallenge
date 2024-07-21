// Task 1: Select an HTML element by its ID and change its text content
document.getElementById("name").textContent = "Darshan Kumar Updated";

// Task 2: Select an HTML element by its class and change its background color
let changeColor = document.getElementsByClassName("UniversityName");
for (let element of changeColor) {
    element.style.backgroundColor = "lightblue";
}

// Task 3: Create a new div element with some text content and append it to the body
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div element";
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list
let newLi = document.createElement("li");
newLi.textContent = "This is a new list item";
document.getElementById("item-list").appendChild(newLi);

// Task 5: Select an HTML element and remove it from the DOM
let removeElement = document.getElementById("name");
removeElement.remove();

// Task 6: Remove the last child of a specific HTML element
let list = document.getElementById("item-list");
list.removeChild(list.lastElementChild);

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
let imgElement = document.getElementById("image");
imgElement.src = "image2.jpg";

// Task 8: Add and remove a CSS class to/from an HTML element
let paragraph = document.getElementById("paragraph");
paragraph.classList.add("highlight");
paragraph.classList.remove("highlight");

// Task 9: Add a click event listener to a button that changes the text content of a paragraph
document.getElementById("change-text-btn").addEventListener('click', () => {
    document.getElementById("paragraph").textContent = "Text changed on button click";
});

// Task 10: Add a mouseover event listener to an element that changes its border color
document.getElementById("mouseover-element").addEventListener('mouseover', () => {
    document.getElementById("mouseover-element").classList.add("border-change");
});

// Feature Requests

// Text Content Manipulation Script
document.getElementById("name").textContent = "Text content changed via script";

// Element Creation Script
const newDivElement = document.createElement("div");
newDivElement.textContent = "New div element created and appended";
document.body.appendChild(newDivElement);

// Element Removal Script
const elementToRemove = document.getElementById("paragraph");
elementToRemove.remove();

// Attribute Modification Script
const imageElement = document.getElementById("image");
imageElement.setAttribute("src", "new-image.jpg");

// Event Handling Script
const buttonElement = document.getElementById("change-text-btn");
buttonElement.addEventListener('click', () => {
    const paragraphElement = document.getElementById("paragraph");
    paragraphElement.textContent = "Paragraph text changed";
});

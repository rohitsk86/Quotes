// 1. Select elements from the HTML
const clickButton = document.getElementById('myButton');
const textMessage = document.getElementById('message');

// 2. Define a function to change the text
function changeText() {
    textMessage.textContent = "Button clicked! JavaScript is working.";
    textMessage.style.color = "green";
}

// 3. Listen for a click event on the button
clickButton.addEventListener('click', changeText);

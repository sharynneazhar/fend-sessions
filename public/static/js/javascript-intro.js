// This is a single line comment in JavaScript language

/*
 * This is a
 * multiline
 * comment in
 * JavaScript
 */

// Get the name input field element from the HTML DOM
const nameInputField = document.getElementById('name-input');

// Listen the any text input events that happens in the input field
// on our page. In an event that some text was inputted, retrieve
// the value and update the name display
nameInputField.addEventListener('input', function (event) {
  // Retrieve the value from the event target (aka input field)
  const nameInputValue = event.target.value;

  // Get the name display element from the HTML DOM
  const nameDisplayElement = document.querySelector('.name-display');

  // Show the name that was input by the user in the name-display element
  nameDisplayElement.innerHTML = nameInputValue;
});

// Hmm, something is fishy here...
helloWorld();

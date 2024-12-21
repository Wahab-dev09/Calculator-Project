let currentDisplay = '';
const displayElement = document.querySelector('#display');

// Function to update the display

function updateDisplay(value, resetError = true) {
  currentDisplay = value;
  displayElement.value = currentDisplay;
  if (resetError) displayElement.classList.remove('error');
}

// Function to handle button clicks

function clickHandler(input) {
  if (input === 'clear') {
    // Clear the display
    updateDisplay('');
  } else if (input === '=') {

    // Check the empty expression
    if (!currentDisplay.trim()) {
        updateDisplay('Empty Expression', false);
        displayElement.classList.add('error');
        currentDisplay = '';
        return;
      }

    // Calculate the result
    try {
      currentDisplay = eval(currentDisplay);
      updateDisplay(currentDisplay);
    } catch (error) {
      updateDisplay('Invalid Expression', false);
      displayElement.classList.add('error');
      currentDisplay = '';
    }

  } else {
    // Append the input to the current display
    updateDisplay(currentDisplay + input);
  }
}

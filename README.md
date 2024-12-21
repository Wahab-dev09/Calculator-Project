# Calculator Project

<p align="left">
 <img src="https://github.com/user-attachments/assets/calculator-image.png" alt="Calculator Image" width="50%" />
</p>

## Overview

A simple calculator built using HTML, CSS, and JavaScript. It features a responsive design and includes input validation and error handling, ensuring that users can interact with the calculator without encountering unexpected behavior.

## File Descriptions

### `index.html`
- **Purpose:** Contains the HTML structure of the calculator.
- **Details:**
  - The layout includes a text input field for displaying calculations and a button grid for numeric inputs and operations.
  - Buttons include digits (0-9)B
  - Basic operators (+, -, *, /)
  - A decimal point (.), Clear button, and Equal sign (=).
  - Each button is linked to a `clickHandler` function to process user input.

---

### `styles.css`
- **Purpose:** Provides styling for the calculator layout.
- **Details:**
  - Uses a flexbox layout for the button grid, ensuring the buttons are evenly distributed.
  - The input field is styled to be clear and easy to read, with a specific font and width for better presentation.
  - Responsive design is implemented to ensure the calculator adapts to various screen sizes.

---

### `script.js`
- **Purpose:** JavaScript functionality for the calculator.
- **Details:**
  - **`updateDisplay(value, resetError = true)`**:<br> 
  
  - Updates the calculator's display with the current value, and removes any error styles if needed.
  - **`clickHandler(input)`**: <br>
   - Handles user input, such as numbers, operators, and commands like "clear" and "=". It updates the display and performs calculations if required.
    - If the "=" button is clicked, the code checks for empty expressions or invalid input and displays appropriate error messages.
    - Uses `eval()` to calculate the result of the expression, with error handling for invalid operations.
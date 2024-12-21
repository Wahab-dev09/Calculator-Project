# Calculator Project

<p align="left">
 <img src="https://github.com/user-attachments/assets/calculator-image.png" alt="Calculator Image" width="50%" />
</p>

## Overview

This project is a simple calculator built using HTML, CSS, and JavaScript. It features a responsive design that adapts to different screen sizes and offers basic arithmetic operations like addition, subtraction, multiplication, and division. The application includes input validation and error handling, ensuring that users can interact with the calculator without encountering unexpected behavior.

## File Descriptions

### `index.html`
- **Purpose:** Contains the HTML structure of the calculator.
- **Details:**
  - The layout is composed of a text input field for displaying calculations and a button grid for numeric inputs and operations.
  - Buttons include digits (0-9), basic operators (+, -, *, /), a decimal point (.), clear button, and the equal sign (=) for calculation.
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
  - **`updateDisplay(value, resetError = true)`**: Updates the calculator's display with the current value, and removes any error styles if needed.
  - **`clickHandler(input)`**: Handles user input, such as numbers, operators, and commands like "clear" and "=". It updates the display and performs calculations if required.
    - If the "=" button is clicked, the code checks for empty expressions or invalid input and displays appropriate error messages.
    - Uses `eval()` to calculate the result of the expression, with error handling for invalid operations.

---

### `README.md`
- **Purpose:** Provides a description and instructions for setting up the calculator project.
- **Details:**
  - This file explains the purpose of the project and describes the structure of the codebase.
  - Includes instructions on how to run the project locally by opening `index.html` in a browser.

---

## How to Use

1. **Input Numbers:** Click the number buttons (0-9) to enter numbers into the display.
2. **Perform Operations:** Click on the operators (+, -, *, /) to perform arithmetic operations.
3. **Clear Display:** Press the "Clear All" button to reset the display.
4. **Calculate Result:** Press the "=" button to calculate the result of the entered expression.
5. **Decimal Point:** Use the "." button to enter decimal numbers.
6. **Error Handling:** Invalid expressions (e.g., empty or malformed) will show an error message on the display.

## Features

- **Responsive Layout:** The calculator adjusts to fit different screen sizes, ensuring it's usable on mobile, tablet, and desktop devices.
- **Error Handling:** Displays messages like "Empty Expression" or "Invalid Expression" for invalid input, helping users avoid confusion.
- **Clear Button:** Allows users to reset the calculator display quickly.
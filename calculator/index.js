function handleButtonClick(event) {
  const buttonContent = event.target.textContent
  // Clear button
  if (buttonContent === 'AC') {
    display.textContent = '0'
    num1 = undefined
    num2 = undefined
    operator = undefined
    clearDisplay()
    return
  }
  // Operator button
  if (
    buttonContent === '+' ||
    buttonContent === '-' ||
    buttonContent === '*' ||
    buttonContent === '/'
  ) {
    if (num1 !== undefined && operator !== undefined) {
      // if num1 and operator are defined, we can perform the operation taking num2 from the display
      num2 = parseFloat(display.textContent)
      const result = operate(num1, num2, operator) // perform operation
      display.textContent = result // dispay result
      num1 = result // set num1 to this result
    } else {
      // else if num1 and operator are not defined
      num1 = parseFloat(display.textContent) // define num1
    }
    operator = buttonContent // set operator regardless of the above condition, as long as we get an operator we want to do this
    clearDisplay()
    return // return to exit the function
  }

  // Equals button
  if (buttonContent === '=') {
    if (num1 !== undefined && operator !== undefined) {
      // if num1 and operator are defined, we can perform the operation taking num2 from the display
      num2 = parseFloat(display.textContent)
      const result = operate(num1, num2, operator)
      display.textContent = result
      num1 = undefined
      num2 = undefined
      operator = undefined
    }
    return
  }

  // Number button
  if (display.textContent === '0' || displayClear) {
    display.textContent = buttonContent
    displayClear = false
  } else {
    display.textContent += buttonContent
  }
}

function clearDisplay() {
  displayClear = true
}

// Function to perform the operation
function operate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    default:
      return 0
  }
}

let num1
let num2
let operator
let displayClear = false // Variable to track if the display needs to be cleared

const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')
buttons.forEach((button) => {
  button.addEventListener('click', handleButtonClick)
})

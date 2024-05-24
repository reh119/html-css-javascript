function createGrid(userGridNum) {
  // Create a grid of 16x16
  const container = document.querySelector('#container')
  for (let i = 0; i < userGridNum; i++) {
    let column = document.createElement('div') // Create a new div column
    column.classList.add('column')
    column.textContent = i
    for (let j = 1; j <= userGridNum; j++) {
      let row = document.createElement('div') // create row for each column
      row.classList.add('rows')
      row.textContent = j
      column.appendChild(row) // append row to column
    }
    container.appendChild(column) // append column to container
  }
  // create hover event listeners
  const hover = document.querySelectorAll('.rows') // this will return a node list of all the rows, hover is an array of all the rows so its an array of elements
  // this is an arrpw function that will loop through each row and add an event listener to each row, this event listener will change the background color of the row to red when the mouse hovers over it
  // we use the .forEach method to iterate through each button
  hover.forEach((row) => {
    // hover is an element of the array, row is the current element of the array
    // and for each one we add a 'click' listener
    row.addEventListener('mouseover', () => {
      row.style.backgroundColor = 'red'
      // when the mouse hovers over the row, the background color will change to red. this is done by adding a style attribute to the row element
    })
  })
}

function removeGrid() {
  const rows = document.querySelectorAll('.rows') // select all the rows classes
  const columns = document.querySelectorAll('.column') // select all the columns classes
  rows.forEach((row) => {
    row.remove() // remove each row
  })
  columns.forEach((column) => {
    column.remove() // remove each column
  })
}

function clearGrid() {
  const rows = document.querySelectorAll('.rows') // select all the rows
  rows.forEach((row) => {
    row.style.backgroundColor = 'white' // change the background color of each row to white
  })
}
function resizeGrid() {
  let userGridNum = prompt('Enter the size of the grid')
  while (userGridNum < 1 || userGridNum > 100) {
    userGridNum = prompt('Enter a number between 1 and 100')
  }
  // remove the current grid, then call the createGrid function with the new grid size
  removeGrid()
  createGrid(userGridNum)
}
function getUserSize() {
  let userGridNum = prompt('Enter the size of the grid')
  while (userGridNum < 1 || userGridNum > 100) {
    userGridNum = prompt('Enter a number between 1 and 100')
  }
  createGrid(userGridNum)
}
// make function to get user input before making any grid

getUserSize()

// create a button that will clear the grid.
const clearButton = document.createElement('button')
clearButton.textContent = 'Clear Grid'
document.body.insertBefore(clearButton, container) // insert the button before the container
clearButton.addEventListener('click', clearGrid)
// button for resizing the grid
const reSizeButton = document.createElement('button')
reSizeButton.textContent = 'Resize Grid'
document.body.insertBefore(reSizeButton, container) // insert the button before the container
reSizeButton.addEventListener('click', resizeGrid) // add an event listener to the button
// i changed the logic for hover to be in the createGrid function so that every time a new grid is created, the hover effect will be applied to the new grid.

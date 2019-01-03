// Select color input
const colorSelection = document.querySelector('#colorPicker');
// Adding the grid-color function
function colorSelected(self) {
    const color = colorSelection.value;
    self.target.style.backgroundColor = color;
}
// Select size input
const canvas = document.querySelector('#pixelCanvas');
var canvasHeight = document.querySelector('#inputHeight');
var canvasWidth = document.querySelector('#inputWidth');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // I add this line so everytime I call makeGrid(), the older table disappear
    canvas.innerHTML = '';
    // I saw that using createDocumentFragment makes the process faster
    const grid = document.createDocumentFragment();
    // First, I create the rows...
    for (let y = 0; y < canvasHeight.value; y++) {
        const row = document.createElement('tr');
        //... and then the columns
        for (let x = 0; x < canvasWidth.value; x++) {
            const column = document.createElement('td');
            row.appendChild(column);
        }
        // I take advantage to add the EventListener to every square.
        row.addEventListener('click', colorSelected);
        grid.appendChild(row);
    }

    canvas.appendChild(grid);
};

document.querySelector('form').addEventListener('submit', function(event) {
  // With this line of code, I can prevent the browser to delete my table as soon I click to 'submit'
  event.preventDefault();
  makeGrid();
});

// Select color input
// Select size input
const heightInput = $('#inputHeight');
const widthInput = $('#inputWeight');
const colorInput = $('#colorPicker');
// When size is submitted by the user, call makeGrid()

// Your code goes here!

makeGrid = () => {

  let heightValue = heightInput.val();
  let widthValue = widthInput.val();

  let pixelCanvas = $('#pixelCanvas');
  pixelCanvas.children().remove(); 

//grid is built

  for (let h = 0; h < heightValue; h++) {
    pixelCanvas.append("<tr></tr>");
  }
  for (let w = 0; w < widthValue; w++) {
    $('tr').append("<td></td>");
  }
}

//If any color is chosen, it changes the background color to the user color

$('table').on('click', 'td', function() {
  $(this).css('backgroundColor', colorInput.val() );
});

// When size is submitted by the user, makeGrid() is called

form = $('#sizePicker');
form.submit(function(event) {
    event.preventDefault(); // stops page from refreshing upon submit
    makeGrid();
});

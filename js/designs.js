// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let color = $('#colorPicker').val();
console.log(color);

$('#colorPicker').on('change', function(){
  color = $(this).val();
  console.log(color);
});

let sizeH = $('#inputHeight').val();
let sizeW = $('#inputWeight').val();
console.log(sizeH);
console.log(sizeW);

$('#sizePicker').on('submit', function(evt){
  evt.preventDefault();
  sizeH = $('#inputHeight').val();
  sizeW = $('#inputWeight').val();
  console.log(sizeH);
  console.log(sizeW);
});

function makeGrid() {

// Your code goes here!

}

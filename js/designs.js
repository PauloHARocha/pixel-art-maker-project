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
makeGrid();

$('#sizePicker').on('submit', function(evt){
  evt.preventDefault();
  sizeH = $('#inputHeight').val();
  sizeW = $('#inputWeight').val();
  console.log(sizeH);
  console.log(sizeW);
  makeGrid();
});

// I believe this makeGrid() function is more intuitive, but is very slow
// because of the constant change in the DOM

// function makeGrid() {
//   let before = performance.now();
//   $('#pixelCanvas').children().remove();
//
//   for(let i = 0; i < sizeH; i++)
//     $('#pixelCanvas').append('<tr></tr>');
//
//   $('tr').each(function(){
//     for(let j = 0; j < sizeW; j++)
//       $(this).append('<td></td>');
//   });
//   console.log(performance.now()-before);
// }

let html = [];
function makeGrid() {
  //let before = performance.now();
  $('#pixelCanvas').children().remove();
  html = [];

  for (i = 0; i < sizeH; i++) {
    html.push('<tr>');

    for(let j = 0; j < sizeW; j++)
      html.push('<td></td>');

    html.push('</tr>');
  }

  $("#pixelCanvas").append( html.join('') );

  //console.log(performance.now()-before);
}

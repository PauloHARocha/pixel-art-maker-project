// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let color = $('#colorPicker').val(), colorTd;
console.log(color);

$('#colorPicker').on('change', function(){
  color = $(this).val();
  console.log(color);
});

let sizeH = $('#inputHeight').val();
let sizeW = $('#inputWeight').val();
console.log(sizeH);
console.log(sizeW);
let html = [];
makeGrid();

$('#sizePicker').on('submit', function(evt){
  evt.preventDefault();
  sizeH = $('#inputHeight').val();
  sizeW = $('#inputWeight').val();
  console.log(sizeH);
  console.log(sizeW);
  makeGrid();
});


$('#pixelCanvas').on('click', 'td', function(){
  
  if(rgb2hex($(this).css('background-color')) == color){
    //clean td
    $(this).css('background-color', '#ffffff');
  }
  else {
    //paint td
    $(this).css('background-color', color);
  }

})

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


// * @license WTFPL 2.0 license. (http://wtfjs.com/license)
// * @author Fedot Praslov
// * based on comments in StackOverflow question
// * @link http://stackoverflow.com/questions/638948/background-color-hex-to-javascript-variable-jquery
function hex(x) {
  return ("0" + parseInt(x).toString(16)).slice(-2);
}
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+\.*\d+)?\)$/);
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

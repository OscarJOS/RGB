var correct;
var score = 0;
// Inicializa el juego
game();

// enlaza el click de los circulos a la función guess
$('.option').on('click', guess);

function game() {
  correct = Math.floor(Math.random() * 2);

  $('.option').each(function(index) {
    var color = generateColor();
    $(this).css("background-color", color);

    if (index == correct) {
      $('.question').text(color);
    }
  });
}

function guess() {
    var index = $('.option').index(this);
    if (index == correct) {
      alert("Muy bien!!!");
      score++;
    } else {
      alert("Muy mal!");
      score = 0;
    }
    $('.score span').text(score);
    game();
}

function generateColor() {
  return 'rgb(' + ramdom() + ', ' + ramdom() + ', ' + ramdom() + ')';
}
function ramdom() {
  return Math.floor(Math.random() * 255);
}

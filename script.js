var storeAnswer = [0, 0, 0, 0,
                   0, 1, 1, 0,
                   0, 1, 1, 0,
                   0, 0, 0, 0]

var storePuzzle = [0, 0, 0, 0,
                   0, 0, 0, 0,
                   0, 0, 0, 0,
                   0, 0, 0, 0]


var storePositions = [0, 1, 2, 3, 0,
                      0, 4, 5, 6, 0,
                      0, 7, 8, 9, 0]



var move = "slide1";
var slide1 = 0;




// Add event listener on keydown
document.addEventListener('keydown', (event) => {
  
  if (event.code == "ArrowRight")
  {
     document.getElementById(move).prepend(document.getElementById(move).childNodes[2]);
     document.getElementById(move).prepend(document.getElementById(move).childNodes[2]);
  }
  if (event.code == "ArrowLeft")
  {
      document.getElementById(move).appendChild(document.getElementById(move).childNodes[0]);
      document.getElementById(move).appendChild(document.getElementById(move).childNodes[0]);
  }
  
    if (event.code == "Digit1")
    {
      move = "slide1";
    }
    
});

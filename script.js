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



var moveH = "slide1";
var moveV = "slide5";
var slide1 = 0;




// Add event listener on keydown
document.addEventListener('keydown', (event) => {
  
  if (event.code == "ArrowRight")
  {
     document.getElementById(moveH).prepend(document.getElementById(moveH).childNodes[2]);
     document.getElementById(moveH).prepend(document.getElementById(moveH).childNodes[2]);
  }
  if (event.code == "ArrowLeft")
  {
      document.getElementById(moveH).appendChild(document.getElementById(moveH).childNodes[0]);
      document.getElementById(moveH).appendChild(document.getElementById(moveH).childNodes[0]);
  }
  
  if (event.code == "Digit1")
  {
    moveH = "slide1";
    moveV = "slide5";
    for (var i = 0; i > 4; i++)
    {
        document.getElementById(moveH)
    }
  }
    
});

function oneRight()
{
  document.getElementById(moveH).appendChild(document.getElementById("slider5").childNodes[moveH]);
  document.getElementById(moveH).appendChild(document.getElementById("slider6").childNodes[0]);
  document.getElementById(moveH).appendChild(document.getElementById("slider7").childNodes[0]);
  document.getElementById(moveH).appendChild(document.getElementById("slider8").childNodes[0]);
}

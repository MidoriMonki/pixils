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



var moveH = "1";
var moveV = "5";
var slide1 = 0;




// Add event listener on keydown
document.addEventListener('keydown', (event) => {
  
  if (event.code == "ArrowRight")
  {
    if (document.getElementById("slide" + moveH).children.length == 0)
      {
             oneRight();
      }
     document.getElementById("slide" + moveH).prepend(document.getElementById("slide" + moveH).childNodes[0]);
   document.getElementById("slide" + moveH).insertBefore(document.getElementById("slide" + moveH), eElement.firstChild);
  }
  if (event.code == "ArrowLeft")
  {
      document.getElementById("slide" + moveH).appendChild(document.getElementById("slide" + moveH).childNodes[0]);
  }
  
  if (event.code == "Digit1")
  {
    moveH = "1";
    moveV = "5";
    for (var i = 0; i > 4; i++)
    {
        document.getElementById(moveH)
    }
  }
    
});

function oneRight()
{
  document.getElementById("slide" + moveH).appendChild(document.getElementById("slide5").childNodes[moveH]);
  document.getElementById("slide" + moveH).appendChild(document.getElementById("slide6").childNodes[moveH]);
  document.getElementById("slide" + moveH).appendChild(document.getElementById("slide7").childNodes[moveH]);
  document.getElementById("slide" + moveH).appendChild(document.getElementById("slide8").childNodes[moveH]);
}

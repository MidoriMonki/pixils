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
    document.getElementById("slide1").prependChild(document.getElementById("slide1").childNodes[7]);
      slide1 += 100;
      for (var i = 0; i < 8; i++)
      {
         document.getElementById(move).children[i].style.transform = "translateX(" + slide1 + "px)";
      }
  }
  if (event.code == "ArrowLeft")
  {
      slide1 -= 0;
      document.getElementById("slide1").appendChild(document.getElementById("slide1").childNodes[0]);
      document.getElementById("slide1").appendChild(document.getElementById("slide1").childNodes[0]);
    
      for (var i = 0; i < 8; i++)
      {
         document.getElementById(move).children[i].style.transform = "translateX(" + slide1 + "px)";
      }
  }
  
    if (event.code == "Digit1")
    {
      move = "slide1";
    }
    
});

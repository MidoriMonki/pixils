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



var move = 1;
var slide1 = 0;



function ohYeah()
{
  document.getElementById("nah").appendChild(document.getElementById("yah").childNodes[0]);
}

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
  
  if (event.code == "ArrowRight")
  {
      slide1 += 100;
      for (var i = 0; i < 8; i++)
      {
         document.getElementById(move).children[i].style.transform = "translateX(" + slide1 + "px)";
      }
  }
  if (event.code == "ArrowLeft")
  {
      slide1 -= 100;
      document.getElementById("slide1").appendChild(document.getElementById("slide1").childNodes[0]);
    
      for (var i = 0; i < 8; i++)
      {
         document.getElementById(move).children[i].style.transform = "translateX(" + slide1 + "px)";
      }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (event.code == "Digit1")
  {
    move = "slide1";
    for (var i = 0; i < 0; i++)
    {
        if (storePositions[i] != 0)
        {
            document.getElementById(i).classList.add("test");
          ohYeah();
        }
    }
  }
    
});

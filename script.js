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



var move = 0;

function ohYeah()
{
  document.getElementById("nah").appendChild(document.getElementById("yah").childNodes[0]);
}

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
  
  if (event.code == "ArrowRight")
  {
      for (var i = 0; i < 4; i++)
      {
         document.getElementById(move).children[i].classList.add("test");
         document.getElementById(move).children[i].style.left = 100;
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

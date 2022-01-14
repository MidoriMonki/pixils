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
// Add event listener on keydown
document.addEventListener('keydown', (event) => {
  
  if (event.code == "ArrowRight")
  {
      alert("yo");
  }
  if (event.code == "Digit1")
  {
    move = 1;
    for (var i = 0; i < 5; i++)
    {
        if (storePositions[i] != 0)
        {
            document.getElementById(i).classList.add("test");
        }
    }
  }
    
});

document.getElementById("nah").appendChild(document.getElementById("ya").childNodes[0]);
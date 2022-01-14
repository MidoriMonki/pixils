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
      Horizontal();
      document.getElementById("slide" + moveH).insertBefore(document.getElementById("slide" + moveH).childNodes[3], document.getElementById("slide" + moveH).firstChild);
  }
  
  if (event.code == "ArrowLeft")
  {
      Horizontal();
      document.getElementById("slide" + moveH).appendChild(document.getElementById("slide" + moveH).childNodes[0]);
  }
  
  if (event.code == "Digit1")
  {
    moveH = "1";
    moveV = "5";
    Horizontal();
    for (var i = 0; i < 4; i++)
    {
        document.getElementById("slide" + moveH).children[i].style.transform = "translateY(-20px)";
    }
    Vertical();
    for (var i = 0; i < 4; i++)
    {
        document.getElementById("slide" + moveV).children[i].style.transform = "translateY(-20px)";
    }
  }
    
});

function Horizontal()
{
  if (document.getElementById("slide" + moveH).children.length == 0) {
  document.getElementById("slide" + moveH).appendChild(document.getElementById("slide5").childNodes[moveH]);
  document.getElementById("slide" + moveH).appendChild(document.getElementById("slide6").childNodes[moveH]);
  document.getElementById("slide" + moveH).appendChild(document.getElementById("slide7").childNodes[moveH]);
  document.getElementById("slide" + moveH).appendChild(document.getElementById("slide8").childNodes[moveH]);
  }
}


function Vertical()
{
    if (document.getElementById("slide" + moveH).children.length == 0) {
  document.getElementById("slide" + moveV).appendChild(document.getElementById("slide1").childNodes[moveV - 5]);
  document.getElementById("slide" + moveV).appendChild(document.getElementById("slide2").childNodes[moveV - 5]);
  document.getElementById("slide" + moveV).appendChild(document.getElementById("slide3").childNodes[moveV - 5]);
  document.getElementById("slide" + moveV).appendChild(document.getElementById("slide4").childNodes[moveV - 5]);
}

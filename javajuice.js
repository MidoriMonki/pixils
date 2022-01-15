var slide = document.getElementById('slide1');

slide.addEventListener('touchstart', dragStart);
slide.addEventListener('touchend', dragEnd);
slide.addEventListener('touchmove', dragMove);
slide.mousedown = dragStart;

var uRight = 100;
var uPosX;
var uPosY;
var vPosX;
var vPosY;


var mode;


function dragStart(e)
{
  e = e || window.event;
  e.preventDefault();
  if (e.type == "touchstart")
  {
     uPosX = e.touches[0].clientX;
     uPosY = e.touches[0].clientY;
  }
  else
  {
    uPosX = e.clientX;
    uPosY = e.clientY;
    document.onmouseup = dragEnd;
    document.onmousedown = dragMove;
  }
}
function dragEnd()
{
  uRight = 0;
  mode = 2;
  var holder = slide.children[0].style.right;
  for (var i=0; i < (holder.length - 2); i++)
  {
    if (holder[i] != "-")
    {
       uRight += holder[i];
    }
    else
    {
       var cheese = 1;
    }
  }
  if (cheese == 1)
  {
    uRight *= -1;
    cheese = 0;
  }
}
function dragMove(e)
{
  e = e || window.event;
  e.preventDefault();
  if (e.type == "touchmove")
  {
     vPosX = e.touches[0].clientX;
     vPosY = e.touches[0].clientY;
  }
  else
  {
    document.onmouseup = dragEnd;
    document.onmousedown = dragMove;
  }
  
  // Important to determine which direction we scrolling 
     vPosX = e.touches[0].clientX;
     vPosY = e.touches[0].clientY;
  if (mode == 2){
    setTimeout(checkDirection, 300);
  }
  // let us begin scrolling
  if(mode == 0){
     for (var i=0; i < 4; i++){
       slide.children[i].style.right = uRight - (vPosX - uPosX) + "px";
     }
  } else{
      for (var i=1; i < 16; i+=4){
         slide.children[i].style.top = uRight + (vPosY - uPosY) + "px";
      }
    }
}

function checkDirection()
{
  if ((vPosX - uPosX)^2 > (uPosY - vPosY)^2) {
       mode = 0;
  }else{
      mode = 1;
  }
}
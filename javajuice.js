var slide = document.getElementById('slide1');

slide.addEventListener('touchstart', dragStart);
slide.addEventListener('touchend', dragEnd);
slide.addEventListener('touchmove', dragMove);
slide.mousedown = dragStart;

var uRight = 100;
var uPosX;
var uPosY;
var vPosX;

var p = 0;
if (p == 1)
  {
    document.onmouseup = dragEnd;
    document.onmousedown = dragMove;
  }

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
     uPosY = e.touches[0].clientY;
  }
  else
  {
    document.onmouseup = dragEnd;
    document.onmousedown = dragMove;
  }
  for (var i=0; i < 8; i++)
  {
     slide.children[i].style.right = uRight - (vPosX - uPosX) + "px";
  }
}
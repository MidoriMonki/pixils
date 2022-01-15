var slide = document.getElementById('slide1');

slide.addEventListener('touchstart', dragStart);
slide.addEventListener('touchend', dragEnd);
slide.addEventListener('touchmove', dragMove);
slide.mousedown = dragStart;

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
     var uPosX = e.touches[0].clientX;
     var uPosY = e.touches[0].clientY;
  }
  else
  {
    uPosX = e.clientX;
    uPosY = e.clientY;
    document.onmouseup = dragEnd;
    document.onmousedown = dragMove;
  }
}
function dragEnd(e)
{
   e = e || window.event;
  e.preventDefault();
  if (e.type == "touchmove")
  {
     var uPosX = e.touches[0].clientX;
     var uPosY = e.touches[0].clientY;
  }
  else
  {
    uPosX = e.clientX;
    uPosY = e.clientY;
    document.onmouseup = dragEnd;
    document.onmousedown = dragMove;
  }
  slide.childrem.style.right = 
}
function dragMove()
{
    alert("yah");
}
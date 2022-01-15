var pixils = document.getElementsByClassName('box');

pixils.addEventListener('touchstart', dragStart)
pixils.addEventListener('touchend', dragEnd)
pixils.addEventListener('touchmove', dragMove)

var p = 0;
if (p == 1)
  {
    document.onmouseup = dragEnd;
    document.onmousedown = dragMove;
  }

function dragStart(e)
{
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
  }
}
function dragEnd()
{
  
}
function dragMove()
{
    alert("yah");
}
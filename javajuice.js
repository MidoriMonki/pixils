var slide = document.getElementById('slide1');

slide.addEventListener('touchstart', dragStart);
slide.addEventListener('touchend', dragEnd);
slide.addEventListener('touchmove', dragMove);
slide.mousedown = dragStart;

var uRight = -100;
var uTop = 100;
var uPosX;
var uPosY;
var vPosX;
var vPosY;


var mode = 2;


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
  uTop = 0;
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
  var holder = slide.children[1].style.top;
  for (var i=0; i < (holder.length - 2); i++)
  {
    if (holder[i] != "-")
    {
       uTop += holder[i];
    }
    else
    {
       var cheese = 1;
    }
  }
  if (cheese == 1)
  {
    uTop *= -1;
    cheese = 0;
  }
}
function dragMove(e)
{
  document.getElementById("bruh").innerHTML = slide.children[0].style.right;
  document.getElementById("bruhY").innerHTML = slide.children[1].style.top;
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
  if (mode == 2){
    checkDirection();
  }
  
  
  // let us begin scrolling
  if(mode == 1){
     for (var i=0; i < 4; i++){
       slide.children[i].style.right = uRight - (vPosX - uPosX) + "px";
     }
  } else if (mode == 0){
      for (var i=1; i < 16; i+=4){
         slide.children[i].style.top = uTop - (uPosY - vPosY) + "px";
      }
    }
}

function checkDirection()
{
  if (Math.pow((vPosX - uPosX), 2) > Math.pow((vPosY - uPosY), 2)) {
       mode = 1;
  }else{
      mode = 0;
  }
}
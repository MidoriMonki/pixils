var slide = document.getElementById('slide1');

for (var i=0;i<9;i++)
{
    slide.children[i].addEventListener('touchstart', dragStart);
    slide.children[i].addEventListener('touchend', dragEnd);
    slide.children[i].addEventListener('touchmove', dragMove);
    slide.children[i].mousedown = dragStart;
}

var uRight = -100;
var uTop = 100;
var uPosX;
var uPosY;
var vPosX;
var vPosY;

var storePositions = [0, 0, 0, 0, 0,
                      0, 1, 2, 3, 0,
                      0, 4, 5, 6, 0,
                      0, 7, 8, 9, 0,
                      0, 0, 0, 0, 0]

var mode = 2;
var target;
var selected;
var row;

function dragStart(e)
{
  e = e || window.event;
  e.preventDefault();
  if (e.type == "touchstart")
  {
     uPosX = e.touches[0].clientX;
     uPosY = e.touches[0].clientY;
     target = e.target.id
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
  e = e || window.event;
  e.preventDefault();
  document.getElementById("bruh").innerHTML = slide.children[0].style.right;
  document.getElementById("bruhY").innerHTML = slide.children[1].style.top;
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
    for (var i=((row-1)*5); i < 5+(5*(row-1)); i++)
    {
        slide.children[storePositions[i] - 1].style.right = uRight - (vPosX - uPosX) + "px";
    }
  } else if (mode == 0){
      for (var i=1; i < 16; i+=4){
         slide.children[i].style.top = uTop - (uPosY - vPosY) + "px";
      }
    }
}



//check to see if we are going horizontal or vertical and then select all pixils in that row :)
function checkDirection()
{
  if (Math.pow((vPosX - uPosX), 2) > Math.pow((vPosY - uPosY), 2)) {
       mode = 1;
       for (var i=0;i<16;i++){
         if (storePositions[i] == target){
             if (i <= 4){
             row = 1;   
             }else if (i <= 9){
             row = 2;
             }else if (i <= 14){
             row = 3;  
             }else if (i <= 19){
             row = 4;     
             }else if (i <= 24){
             row = 5;      
           }    
         }
       }
  }else{
      mode = 0;
  }
}
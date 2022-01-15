var slide = document.getElementById('slide1');

for (var i=0;i<9;i++)
{
    slide.children[i].addEventListener('touchstart', dragStart);
    slide.children[i].addEventListener('touchend', dragEnd);
    slide.children[i].addEventListener('touchmove', dragMove);
    slide.children[i].mousedown = dragStart;
}

var uRight = [0, -250, -250, -250, 0];
var uRightMS = [0, -250, -250, -250, 0];
var uTop = [0, 0, 0, 0, 0];
var uTopMS = [0, 0, 0, 0, 0];
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
  if (mode == 1)
  {
          uRight[row-1] = uRight[row-1] - (vPosX - uPosX);
          if (uRight[row-1] > -175){
             uRight[row-1] = -100;
          //oh boy

            
            
            
            
            
          }else if (uRight[row-1] > -325){
             uRight[row-1] = -250;
             //
          }else{
             uRight[row-1] = -400;
          }
          for (var i=((row-1)*5); i < 5+(5*(row-1)); i++)
          {
              if (storePositions[i] - 1 != -1){
                slide.children[storePositions[i] - 1].style.right = uRight[row-1] + "px";
              }
          }
    
  }
  if (mode == 0)
  {
          uTop[row-1] = uTop[row-1] - (uPosY - vPosY);
          if (uTop[row-1] > 75){
             uTop[row-1] = 150;
          }else if (uTop[row-1] > -75){
             uTop[row-1] = 0;
          }else{
             uTop[row-1] = -150;
          }
          for (var i=(row-1); i < (19 + row); i+=5)
            {
              if (storePositions[i] - 1 != -1){
                slide.children[storePositions[i] - 1].style.top = uTop[row-1] + "px";
              }
            }
  }
  mode = 2;
  
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
  if (mode == 2){
    checkDirection();
  }
  
  
  // let us begin scrolling
  if(mode == 1){
    for (var i=((row-1)*5); i < 5+(5*(row-1)); i++)
    {
      if (storePositions[i] - 1 != -1){
        slide.children[storePositions[i] - 1].style.right = uRight[row-1] - (vPosX - uPosX) + "px";
      }
    }
  } else if (mode == 0){
    for (var i=(row-1); i < (19 + row); i+=5)
    {
      if (storePositions[i] - 1 != -1){
        slide.children[storePositions[i] - 1].style.top = uTop[row-1] - (uPosY - vPosY) + "px";
      }
    }
  }
}



//check to see if we are going horizontal or vertical and then select all pixils in that row :)
function checkDirection()
{
  if (Math.pow((vPosX - uPosX), 2) > Math.pow((vPosY - uPosY), 2)) {
       mode = 1;
       for (var i=0;i<25;i++){
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
      for (var i=0;i<25;i++){
         if (storePositions[i] == target){
             var cheese = i.toString()[i.toString().length - 1];
             if (cheese == 0 || cheese == 5){
             row = 1;   
             }else if (cheese == 1 || cheese == 6){
             row = 2;
             }else if (cheese == 2 || cheese == 7){
             row = 3;  
             }else if (cheese == 3 || cheese == 8){
             row = 4;     
             }else if (cheese == 4 || cheese == 9){
             row = 5;
           }    
         }
       }
     }
   }
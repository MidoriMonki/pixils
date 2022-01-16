var row = 0;
var vPosX;
var uPosX;
var vPosY;
var uPosY;
var target;
var mode = 2;
var pixilsInRow;
var slideColour = [1, 2, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1];
var slide = document.getElementById("slide1");
var slideS = document.getElementById("slide2");
var correct;
var whichChild;
var solution = 
[0, 0, 1, 0, 0,
 0, 1, 3, 1, 0,
 0, 1, 1, 1, 0,
 2, 1, 1, 1, 2,
 0, 0, 2, 0, 0];

var storePositions = 
[0, 0, 10, 0, 0,
 0, 1, 2, 3, 0,
 11, 4, 5, 6, 13,
 0, 7, 8, 9, 0,
 0, 0, 12, 0, 0];




//Start by adding event listeners

for (var i=0;i<13;i++)
{
    slide.children[i].addEventListener('touchstart', dragStart);
    slide.children[i].addEventListener('touchend', dragEnd);
    slide.children[i].addEventListener('touchmove', dragMove);
    slide.children[i].mousedown = dragStart;
}


//Mobile Start
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
  // rumble reset
  for(i=0;i<25;i++){
      if (storePositions[i] != 0){
        slide.children[storePositions[i]-1].classList.remove("rumble");
      }
  }
}



//Moving   mode0 = Y, mode1 = X
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
}





//End
function dragEnd()
{
  if (mode == 1){
      if (vPosX < uPosX && storePositions[row*5] == 0){
        //left
        for(var i=(row*5);i<(4+(row*5));i++){
          storePositions[i] = storePositions[i+1];
        }
        storePositions[(row*5)+4] = 0;
      }else if(vPosX > uPosX && storePositions[(row*5)+4] == 0){
        //right
        for(var i=(row*5)+4;i>(row*5);i--){
          storePositions[i] = storePositions[i-1];
        }
        storePositions[(row*5)] = 0;
      }else{
        //add rumble effect if failed
        for(var i=(row*5);i<(5+(row*5));i++){
        if (storePositions[i] != 0){
              if (i==(row*5) && vPosX < uPosX || i==(4+(row*5)) && vPosX > uPosX){
                 slide.children[storePositions[i]-1].classList.add("rumble");
              }
          }
        }
      }
      //Set their right property correctly
      for(var i=(row*5);i<(5+(row*5));i++){
        if (storePositions[i] != 0){
            slide.children[storePositions[i]-1].style.right = (2-(i-(row*5)))*15 + "vw";
        }
      } 
  
  }else if (mode == 0){
      if (vPosY < uPosY && storePositions[row] == 0){
      //up
      for(var i=row;i<(row+20);i+=5){
        storePositions[i] = storePositions[i+5];
      }
      storePositions[row+20] = 0;
      }else if(vPosY > uPosY && storePositions[row+20] == 0){
      //down
      for(var i=row+20;i>row;i-=5){
        storePositions[i] = storePositions[i-5];
      }
      storePositions[row] = 0;
    }else{
        //add rumble effect if failed
        for(var i=0;i<5;i++){
        if (storePositions[row+(i*5)] != 0){
            if (i==0 && vPosY < uPosY || i==4 && vPosY > uPosY){
                slide.children[storePositions[row+(i*5)]-1].classList.add("rumble")
            }
        }
      } 
    }
    //Set their top property correctly
      for(var i=0;i<5;i++){
        if (storePositions[row+(i*5)] != 0){
            slide.children[storePositions[row+(i*5)]-1].style.top = (2-i)*-15 + "vw";
        }
      } 
  }
  
  mode = 2;
  checkSolution();
}





//check to see if we are going horizontal or vertical and then select all pixils in that row :)
function checkDirection()
{
  if (Math.pow((vPosX - uPosX), 2) > Math.pow((vPosY - uPosY), 2)) {
       mode = 1;
       for (var i=0;i<25;i++){
         if (storePositions[i] == target){
             if (i <= 4){
             row = 0;   
             }else if (i <= 9){
             row = 1;
             }else if (i <= 14){
             row = 2;  
             }else if (i <= 19){
             row = 3;     
             }else if (i <= 24){
             row = 4;      
           } 
         }
       }
  }else{
      mode = 0;
      for (var i=0;i<25;i++){
         if (storePositions[i] == target){
             var cheese = i.toString()[i.toString().length - 1];
             if (cheese == 0 || cheese == 5){
             row = 0;   
             }else if (cheese == 1 || cheese == 6){
             row = 1;
             }else if (cheese == 2 || cheese == 7){
             row = 2;  
             }else if (cheese == 3 || cheese == 8){
             row = 3;     
             }else if (cheese == 4 || cheese == 9){
             row = 4;
           }    
         }
       }
    }
}


function checkSolution(){
  correct = true;
  for(i=0;i<25;i++){
      if (storePositions[i] == 0 && solution[i] == 0){}else{
        if (slideColour[storePositions[i]-1] != solution[i]){
            correct = false;
        }
      }
   }
  if (correct){
    alert("You did it!");
  }
}
setUpSolution();

function setUpSolution()
{
   whichChild = -1;
   for(var i=0;i<25;i++){
         //check horizontal row
         if (i <= 4){
         row = 0;   
         }else if (i <= 9){
         row = 1;
         }else if (i <= 14){
         row = 2;  
         }else if (i <= 19){
         row = 3;     
         }else if (i <= 24){
         row = 4;      
       } 
       if (solution[i] != 0){
           whichChild++;
           //apply horizontal
           slideS.children[whichChild].style.right = (2-i+(row*5))*8 + "vw";
           //apply vertical
           slideS.children[whichChild].style.top = (row-2)*8 + "vw";
       }
       if (solution[i] == 1){
            slideS.children[whichChild].classList.add("yes");
            slideS.children[whichChild].classList.remove("turq");
       }else if (solution[i] == 2){
            slideS.children[whichChild].classList.add("turq");
            slideS.children[whichChild].classList.remove("yes");
       }
   } 
}
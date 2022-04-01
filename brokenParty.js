var row = 0;
var originalPositionsY = [];
var originalPositionsX = [];
var vPosX;
var uPosX;
var vPosY;
var uPosY;
var target;
var mode = 2;
var pixilsInRow;
var slideColour = ["1211121121311","1211121121311","1211121121311","1211121121111","1211121121311","1211121121111","1211121121311", "111111111111111", "111111111111111", "112122112212", "3313333313333", "22132121232212"];
var slide = document.getElementById("slide1");
var slideS = document.getElementById("slide2");
var correct;
var whichPuzzle;
var puzzleList = ["001000131001110211120020013Rocket", "002000212000300011100111011Flower", "202000310021110001110001113Sword", "010101212101210001000000011Heart", "200020101000200100010111010Smile", "000000023020102110111101113Castle", "010100111010101022200030012Cat", "011100101001110010100111013Lucky Eight", "011101101111110100001010014YinYang", "000000121012021202020101012Mushroom", "003000333031313030303000313Alien", "003000212212123021220000014Bee"];
var whichChild;
var amountOfBoxes;
var solution = 
[0, 0, 1, 0, 0,
 0, 1, 3, 1, 0,
 0, 1, 1, 1, 0,
 2, 1, 1, 1, 2,
 0, 0, 2, 0, 0];

var storePositions = 
[0, 0, 10, 14, 0,
 0, 1, 2, 3, 15,
 11, 4, 5, 6, 13,
 0, 7, 8, 9, 0,
 0, 0, 12, 0, 0];

var canMoveKeys = false;

target = 5;
var who = 12;
var yeahNah;

for(var i=0;i<15;i++){
  originalPositionsY[i] = slide.children[i].style.top;
  originalPositionsX[i] = slide.children[i].style.right;
}

document.addEventListener('keydown', (keyTest) => {
  
  var name = event.key;
  if(target != 0){
  slide.children[target-1].classList.remove("selected");
  }
  if (name == "ArrowUp"){
    who -= 5;
    target = storePositions[who];
  }else if (name == "ArrowDown"){
    who += 5;
    target = storePositions[who];
  }else if (name == "ArrowLeft"){
    who -= 1;
    target = storePositions[who];
  }else if (name == "ArrowRight"){
    for (var i=1;storePositions[who+i]==0 || storePositions[who+i];i++){yeahNah = i;}
    who += i;
    target = storePositions[who];
  }
  
  for (var i=0;i<who;i++){
    
  }
  
  //yeah
    if (name == "w"){
    uPosX = 0;
    vPosX = 0;
    uPosY = 0;
    vPosY = -10;
    target = storePositions[who];
    if (mode == 2){checkDirection();}
    dragEnd();
    if (canMoveKeys){who -= 5;}
    canMoveKeys = false;
  }else if (name == "s"){
    uPosX = 0;
    vPosX = 0;
    uPosY = 0;
    vPosY = 10;
    target = storePositions[who];
    if (mode == 2){checkDirection();}
    dragEnd();
    if (canMoveKeys){who += 5;}
    canMoveKeys = false;
  }else if (name == "a"){
    uPosX = 0;
    vPosX = -1;
    uPosY = 0;
    vPosY = 0;
    target = storePositions[who];
    if (mode == 2){checkDirection();}
    dragEnd();
    if (canMoveKeys){who -= 1;}
    canMoveKeys = false;
  }else if (name == "d"){
    uPosX = 0;
    vPosX = 1;
    uPosY = 0;
    vPosY = 0;
    target = storePositions[who];
    if (mode == 2){checkDirection();}
    dragEnd();
    if (canMoveKeys){who += 1;}
    canMoveKeys = false;
  }
  if (target != 0){  
    document.getElementById("pp").innerHTML =  "/"+ target + "/"+  who + "/"+  storePositions[who] + "/";
  }
  
  if(target != 0){
    slide.children[target-1].classList.add("selected");
  }
  
});


//Start by adding event listeners
for (var i=0;i<15;i++)
{
    slide.children[i].addEventListener('touchstart', dragStart);
    slide.children[i].addEventListener('touchend', dragEnd);
    slide.children[i].addEventListener('touchmove', dragMove);
    slide.children[i].addEventListener('mousedown', dragStart);
    //slide.children[i].addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
}


//Mobile Start
function dragStart(e)
{
  //document.getElementById("test").innerHTML = storePositions;
  e = e || window.event;
  e.preventDefault();
  if (e.type == "touchstart")
  {
     uPosX = e.touches[0].clientX;
     uPosY = e.touches[0].clientY;
     target = e.target.id;
  }
  else
  {
    uPosX = e.clientX;
    uPosY = e.clientY;
    target = e.target.id;
    document.getElementById("pp").innerHTML = target + mode;

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
  //document.getElementById("test").innerHTML = storePositions;
  e = e || window.event;
  e.preventDefault();
  if (e.type == "touchmove")
  {
     vPosX = e.touches[0].clientX;
     vPosY = e.touches[0].clientY;
  }
  else
  {
     target = e.target.id;
     vPosX = e.clientX;
     vPosY = e.clientY;
     document.getElementById("pp").innerHTML = target + mode;
  }
  
  // Important to determine which direction we scrolling 
  if (mode == 2){
    checkDirection();
  }
}





//End
function dragEnd()
{
   canMoveKeys = true;
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
                 canMoveKeys = false;
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
                canMoveKeys = false;
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
        if ((slideColour[whichPuzzle])[storePositions[i]-1] != solution[i]){
            correct = false;
        }
      }
   }
  if (correct){
    alert("Well done!");
    setUpSolution();
  }
}




//set it up obviously
setUpSolution();





function setUpSolution()
{
  var colourAlt = Math.floor(Math.random() * 3);
  storePositions = 
  [0, 0, 10, 14, 0,
   0, 1, 2, 3, 15,
   11, 4, 5, 6, 13,
   0, 7, 8, 9, 0,
   0, 0, 12, 0, 0];

   //Setting puzzle up
   document.getElementById("nameHolder").innerHTML = "";
   whichPuzzle = Math.floor(Math.random() * 12);
   let why = (puzzleList[whichPuzzle]);
   for(var i=27;i<why.length;i++){
      document.getElementById("nameHolder").innerHTML += why[i];
   }
   for(var i=0;i<25;i++){
     let why = (puzzleList[whichPuzzle]);
     solution[i] = why[i];
   }
   amountOfBoxes = "" + why[25] + why[26];
   //Set up solution display
   whichChild = -1;
   for(var i=0;i<15;i++){
     if (i<amountOfBoxes){
        slideS.children[i].classList.add("box");
        slide.children[i].classList.add("box");
        slideS.children[i].classList.remove("byebye");
        slide.children[i].classList.remove("byebye");
     }else{
        for (var f=0;f<25;f++){
          if (storePositions[f] == i+1){
            storePositions[f] = 0;
          }
        }
        slideS.children[i].classList.remove("box");
        slide.children[i].classList.remove("box");
        slideS.children[i].classList.add("byebye");
        slide.children[i].classList.add("byebye");
     }
   }
  

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
           slideS.children[whichChild].style.right = (2-i+(row*5))*6 + "vw";
           //apply vertical
           slideS.children[whichChild].style.top = (row-2)*6 + "vw";
           slideS.children[whichChild].classList.remove("turq");
           slideS.children[whichChild].classList.remove("yes");
           slideS.children[whichChild].classList.remove("purple");
           slideS.children[whichChild].classList.remove("orange");
           slideS.children[whichChild].classList.remove("blue");
           slideS.children[whichChild].classList.remove("green");
       }
       if (solution[i] == 2){
            slideS.children[whichChild].classList.add("yes");
               if (colourAlt == 1){
                   slideS.children[whichChild].classList.add("purple");
               }else if (colourAlt == 2){
                   slideS.children[whichChild].classList.add("orange");
               }
       }else if (solution[i] == 3){
            slideS.children[whichChild].classList.add("turq");
               if (colourAlt == 1){
                   slideS.children[whichChild].classList.add("green");
               }else if (colourAlt == 2){
                   slideS.children[whichChild].classList.add("blue");
               }
       }
   } 
   //put everything back to normal
   for(var i=0;i<25;i++){
     if(storePositions[i] != 0){
       slide.children[storePositions[i]-1].classList.remove("yes");
       slide.children[storePositions[i]-1].classList.remove("turq");
       slide.children[storePositions[i]-1].classList.remove("purple");
       slide.children[storePositions[i]-1].classList.remove("orange");
       slide.children[storePositions[i]-1].classList.remove("blue");
       slide.children[storePositions[i]-1].classList.remove("green");
       
       
       let yep = slideColour[whichPuzzle];
       if(yep[storePositions[i]-1] == 2){
         slide.children[storePositions[i]-1].classList.add("yes");
       }
       else if(yep[storePositions[i]-1] == 3){
         slide.children[storePositions[i]-1].classList.add("turq");
       }
       
       if(slide.children[storePositions[i]-1].classList.contains("yes")){
         if (colourAlt == 1){
             slide.children[storePositions[i]-1].classList.add("purple");
         }else if (colourAlt == 2){
             slide.children[storePositions[i]-1].classList.add("orange");
         }
       }else if(slide.children[storePositions[i]-1].classList.contains("turq")){
         if (colourAlt == 1){i
             slide.children[storePositions[i]-1].classList.add("green");
         }else if (colourAlt == 2){
             slide.children[storePositions[i]-1].classList.add("blue");
         }
       }
       slide.children[storePositions[i]-1].style.right = originalPositionsX[storePositions[i]-1];
       slide.children[storePositions[i]-1].style.top = originalPositionsY[storePositions[i]-1];
     }
   }
}

var mode;
var row;
var slide;
var storePositions;
var vPosX;
var uPosX;
var vPosY;
var uPosY;
var uRight;
var target;

if(mode == 1){
     for (var i=0; i < 4; i++){
       for (var i=(row*5); i < 5+(5*row); i++)
         {
            slide.children[storePositions[i] - 1].style.right = uRight - (vPosX - uPosX) + "px";
         }
     }
  }


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
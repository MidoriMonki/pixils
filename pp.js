var uPosX;
var uPosY;
var target;
var storePositions;
var slide;
var mode;




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
  for(var i=0;i<25;i++){
      if (storePositions[i] != 0){
        slide.children[storePositions[i]-1].classList.remove("rumble");
      }
  }
}


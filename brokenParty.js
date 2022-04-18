//    {"shuffle": "1", "solution":"1"}
   // The chaos begins
    var desktop = true;

    var leaderboard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var times = [9999999, 9999999, 9999999, 9999999, 9999999, 9999999, 9999999, 9999999, 9999999, 9999999];
    var player = "";
    var whom = 0;
    var test = false;
    var time = 200;
    var day = 0;
    var slideColour = [0];
    var puzzleList = [0];
    var pp = 0;
    var boardDay;
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      var firebaseConfig = {
        apiKey: "AIzaSyDH_nuwVGfMk6pOMJEiDOWm93f-WWivbbw",
        authDomain: "didgeridooo-abb4e.firebaseapp.com",
        databaseURL: "https://didgeridooo-abb4e.firebaseio.com",
        projectId: "didgeridooo-abb4e",
        storageBucket: "didgeridooo-abb4e.appspot.com",
        messagingSenderId: "195317769364",
        appId: "1:195317769364:web:4e65206eac143f62894081",
        measurementId: "G-DZJY7M6G97"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();




        
    function send(){
     let b = day;
     checkDay();
     if (b != day){
       
       alert("It's a new day, so the puzzle has reset!");
       setUpSolution();
       
       
     }else{
       
     player = prompt("Please enter your name", "Name"); 
     if (player != "0" || player != null || player != "test"){
     var newPos = null;
      
       if (desktop){
         
     for(var i=0;i<5;i++){
         if (time<times[i]){var newPos = i; break;}
          }
       }else{
         
              for(var i=5;i<10;i++){
             if (time<times[i]){var newPos = i; break;}
               }

       }
      
    
     if (newPos!=null){ 
     
     if (desktop){
     if (leaderboard.includes(player))
     { 
       for(var i=0;i<5;i++){
       if (leaderboard[i] == player){break;}
       }
           leaderboard.splice(i, 1);
           leaderboard.splice(newPos, 0, player);
           times.splice(i, 1);
           times.splice(newPos, 0, time);
       
       }else{

           leaderboard.splice(4, 1);
           leaderboard.splice(newPos, 0, player);
           times.splice(4, 1);
           times.splice(newPos, 0, time);
     }
     }else if (leaderboard.includes(player)){
       
       
       for(var i=5;i<10;i++){
       if (leaderboard[i] == player){break;}
       }
           leaderboard.splice(i, 1);
           leaderboard.splice(newPos, 0, player);
           times.splice(i, 1);
           times.splice(newPos, 0, time);
       
       }else{

           leaderboard.splice(9, 1);
           leaderboard.splice(newPos, 0, player);
           times.splice(9, 1);
           times.splice(newPos, 0, time);
       }
       
       
       
       
      
       
          firebase
          .database()
          .ref("leaderboard")
          .child("Top5")
          .set({
             day: day,
             name1: leaderboard[0],
             time1: times[0],
             name2: leaderboard[1],
             time2: times[1],
             name3: leaderboard[2],
             time3: times[2],
             name4: leaderboard[3],
             time4: times[3],
             name5: leaderboard[4],
             time5: times[4],
             name6: leaderboard[5],
             time6: times[5],
             name7: leaderboard[6],
             time7: times[6],
             name8: leaderboard[7],
             time8: times[7],
             name9: leaderboard[8],
             time9: times[8],
             name10: leaderboard[9],
             time10: times[9],
          });
       }
       
        if (newPos != null){
        document.getElementById("bottomBit").innerHTML = document.getElementById("bottomBit").innerHTML = "Your time is " + time + "." + "<br>You placed #" + (newPos + 1) + " on the leaderboard!";
    }
      }else{
        alert("username not allowed");
        send();
      }
    }
}
     
    
    var rootRef = firebase.database().ref("leaderboard").orderByChild("time");
    var key = rootRef.key;  
    var ref = firebase.database().ref("leaderboard");
    
    
    
ref.on("child_added", function(snapshot) {
    document.getElementById("leaderboard").innerHTML = "<h3 class='bold-title'>Mobile Leaderboard</h3>"; 
  
    
    if (desktop){
          boardDay = snapshot.child("day").val();
          document.getElementById("leaderboard").innerHTML = "<h3 class='bold-title'>Desktop Leaderboard</h3>"; 
              for(var i=1;i<6;i++){
              var nameGrabber = snapshot.child("name" + i);
              var timeGrabber = snapshot.child("time" + i);
              leaderboard[i - 1] = nameGrabber.val();  
              times[i - 1] = timeGrabber.val();
              if (nameGrabber.val() != 0){
                  document.getElementById("leaderboard").innerHTML += "<p class='bold-title' style='margin-bottom: -5px; font-size: " + (22 - i) + "px'>#" + i + " | " + leaderboard[i - 1] + " | " + times[i - 1] + "</p>";
              }
              }
    }else{
            boardDay = snapshot.child("day").val();
            for(var i=6;i<11;i++){
            var nameGrabber = snapshot.child("name" + i);
            var timeGrabber = snapshot.child("time" + i);
            leaderboard[i - 1] = nameGrabber.val();  
            times[i - 1] = timeGrabber.val();
            if (nameGrabber.val() != 0){
                document.getElementById("leaderboard").innerHTML += "<p class='bold-title' style='margin-bottom: -5px; font-size: " + (22 - i + 5) + "px'>#" + (i - 5) + " | " + leaderboard[i - 1] + " | " + times[i - 1] + "</p>";
            }
            }
      }
  
});

    
ref.on("child_changed", function(snapshot) {  
     
    document.getElementById("leaderboard").innerHTML = "<h3 class='bold-title'>Mobile Leaderboard</h3>"; 
     
    if (desktop){  
          document.getElementById("leaderboard").innerHTML = "<h3 class='bold-title'>Desktop Leaderboard</h3>";
    boardDay = snapshot.child("day").val();
    for(var i=1;i<6;i++){
    var nameGrabber = snapshot.child("name" + i);
    var timeGrabber = snapshot.child("time" + i);
    leaderboard[i - 1] = nameGrabber.val();  
    times[i - 1] = timeGrabber.val();  
    if (nameGrabber.val() != 0){
    document.getElementById("leaderboard").innerHTML += "<p class='bold-title' style='margin-bottom: -5px; font-size: " + (22 - i) + "px'>#" + i + " | " + leaderboard[i - 1] + " | " + times[i - 1] + "</p>";
    }
    }
    }else{
          boardDay = snapshot.child("day").val();
          for(var i=6;i<10;i++){
            var nameGrabber = snapshot.child("name" + i);
            var timeGrabber = snapshot.child("time" + i);
            leaderboard[i - 1] = nameGrabber.val();  
            times[i - 1] = timeGrabber.val();  
            if (nameGrabber.val() != 0){
            document.getElementById("leaderboard").innerHTML += "<p class='bold-title' style='margin-bottom: -5px; font-size: " + (22 - i + 5) + "px'>#" + (i - 5) + " | " + leaderboard[i - 1] + " | " + times[i - 1] + "</p>";
            }
    }
    }
  
});


var testD = "4/18/2022";
checkDay();

function checkDay(){
  
  const today = new Date();
  const date = new Date(testD);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = today.getTime() - date.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.trunc(diffInTime / oneDay);

    day = diffInDays;
  
  let h = date.getHours();
  let z = date.getTimezoneOffset();
  
  
  if (((z/60) + h) >= 0){
    day++;
  }
  
  whichPuzzle = day;
}
  




rootRef = firebase.database().ref("puzzles");
key = rootRef.key;  

    
rootRef.on("child_added", function(snapshot) {
  
    puzzleList[snapshot.key] = snapshot.child("solution").val();
    slideColour[snapshot.key] = snapshot.child("shuffle").val();
    if (snapshot.key == day){
      setUpSolution();
    }
  
});

  


    
var type = "px";
var width = 110;
var screenMobile = false;


function checkSize(){
if (screen.width <= 1000 && screenMobile == false){
   screenMobile = true;
   type = "vw";
   width = 17.5;
   for (var i=1;i<16;i++){
     let temp = document.getElementById(i).style.right;
     document.getElementById(i).style.right = (temp.slice(0, temp.length - 2) / 6.28571428) + "vw";
     temp = document.getElementById(i).style.top;
     document.getElementById(i).style.top = (temp.slice(0, temp.length - 2) / 6.28571428) + "vw";
   }
}
}





//More puzzle focused stuff

function resetBoard(){
  
          firebase
          .database()
          .ref("leaderboard")
          .child("Top5")
          .set({
             day: day,
             name1: 0,
             time1: 9999999999,
             name2: 0,
             time2: 9999999999,
             name3: 0,
             time3: 9999999999,
             name4: 0,
             time4: 9999999999,
             name5: 0,
             time5: 9999999999,
             name6: 0,
             time6: 9999999999,
             name7: 0,
             time7: 9999999999,
             name8: 0,
             time8: 9999999999,
             name9: 0,
             time9: 9999999999,
             name10: 0,
             time10: 9999999999,
          });
}









var row = 0;
var originalPositionsY = [];
var originalPositionsX = [];
var vPosX;
var uPosX;
var vPosY;
var uPosY;
var target;
var mode = 2;
var timer = 0;
var start;
var player;
var pixilsInRow;
var slide = document.getElementById("slide1");
var slideS = document.getElementById("slide2");
var correct;
var whichPuzzle;
var whichChild;
var beforeWho;
var time;
var amountOfBoxes;
var mummy = false;
var daddy = false;
var solution = 
[0, 0, 1, 0, 0,
 0, 1, 3, 1, 0,
 0, 1, 1, 1, 0,
 2, 1, 1, 1, 2,
 0, 0, 2, 0, 0];

var storePositions = 
[0, 0, 10, 14, 0,
 16, 1, 2, 3, 0,
 11, 4, 5, 6, 13,
 0, 7, 8, 9, 15,
 0, 0, 12, 0, 0];

var canMoveKeys = false;
var canDoShit;

target = 5;
var who = 12;


for(var i=0;i<16;i++){
  originalPositionsY[i] = slide.children[i].style.top;
  originalPositionsX[i] = slide.children[i].style.right;
}

document.addEventListener('keydown', (keyTest) => {
  keyTest.preventDefault();
  if (canDoShit){
  if (start != true){
    letsDoThis();
  }
  // rumble reset
  for(i=0;i<25;i++){
      if (storePositions[i] != 0){
        slide.children[storePositions[i]-1].classList.remove("rumble");
      }
  }
  var name = event.key;
  if(target != 0){
  slide.children[target-1].classList.remove("selected");
  }
  if (name == "w"){
    //
    for (var i=5;storePositions[who-i]==0;i+=5){}
    beforeWho = who - i;
    if (storePositions[beforeWho] == undefined || storePositions[beforeWho] == 0){beforeWho = who;}
    who = beforeWho;
    target = storePositions[who];
    //
  }else if (name == "s"){
    //
    for (var i=5;storePositions[who+i]==0;i+=5){}
    beforeWho = who + i;
    if (storePositions[beforeWho] == undefined || storePositions[beforeWho] == 0){beforeWho = who;}
    who = beforeWho;
    target = storePositions[who];
    //
    target = storePositions[who];
  }else if (name == "a"){
    //
    for (var i=1;storePositions[who-i]==0;i++){}
    beforeWho = who - i;
    if (storePositions[beforeWho] == undefined || storePositions[beforeWho] == 0){beforeWho = who;}
    who = beforeWho;
    target = storePositions[who];
    //
    target = storePositions[who];
  }else if (name == "d"){
    //
    for (var i=1;storePositions[who+i]==0;i++){}
    beforeWho = who + i;
    if (storePositions[beforeWho] == undefined || storePositions[beforeWho] == 0){beforeWho = who;}
    who = beforeWho;
    target = storePositions[who];
    //
  }
  
  for (var i=0;i<who;i++){
    
  }
  
  //yeah
    if (name == "ArrowUp"){
    uPosX = 0;
    vPosX = 0;
    uPosY = 0;
    vPosY = -10;
    target = storePositions[who];
    if (mode == 2){checkDirection();}
    dragEnd();
    if (canMoveKeys){who -= 5;}
    canMoveKeys = false;
  }else if (name == "ArrowDown"){
    uPosX = 0;
    vPosX = 0;
    uPosY = 0;
    vPosY = 10;
    target = storePositions[who];
    if (mode == 2){checkDirection();}
    dragEnd();
    if (canMoveKeys){who += 5;}
    canMoveKeys = false;
  }else if (name == "ArrowLeft"){
    uPosX = 0;
    vPosX = -1;
    uPosY = 0;
    vPosY = 0;
    target = storePositions[who];
    if (mode == 2){checkDirection();}
    dragEnd();
    if (canMoveKeys){who -= 1;}
    canMoveKeys = false;
  }else if (name == "ArrowRight"){
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
  }
  
  if(target != 0){
    slide.children[target-1].classList.add("selected");
  }
  }
  
});


//Start by adding event listeners
for (var i=0;i<16;i++)
{
    slide.children[i].addEventListener('touchstart', dragStart);
    slide.children[i].addEventListener('touchend', dragEnd);
    slide.children[i].addEventListener('touchmove', dragMove);
    //slide.children[i].addEventListener('mousedown', dragStart);
    //slide.children[i].addEventListener('mousemove', dragMove);
    //document.addEventListener('mouseup', dragEnd);
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

  }
  // rumble reset
  for(var i=0;i<25;i++){
      if (storePositions[i] != 0){
        slide.children[storePositions[i]-1].classList.remove("rumble");
      }
  }
}


//Moving   mode0 = Y, mode1 = X
function dragMove(e)
{
   desktop = false;

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

//Timer shit
var Interval;
var verySpecialVariable = 0;
var timey = document.getElementById("timer");
function letsDoThis(){
clearInterval(Interval);
Interval = setInterval(startTimer, 10);
}

function startTimer(){
  timer++;
  if (timer < 100){
     verySpecialVariable = 0;
     timey.innerHTML = "0:00:" + timer;
  }else if(timer < 1000){
     timey.innerHTML = "0:0" + timer.toString()[0] + ":" + timer.toString()[1] + timer.toString()[2];
  }else if(timer < 10000000){
     if ((timer.toString()[0] - (6*verySpecialVariable)) == "6"){verySpecialVariable++;}
     if (timer.toString()[0] == 0){verySpecialVariable=0;}
     timey.innerHTML = verySpecialVariable + ":" + (timer.toString()[0] - 6*verySpecialVariable) + timer.toString()[1] + ":" + timer.toString()[2] + timer.toString()[3];
  }else{
    timey.innerHTML = "You've taken your time haven't you?";
  } 
}




//End
function dragEnd(e)
{
  e = e || window.event;
  e.preventDefault();
  canMoveKeys = true;
  letsDoThis();
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
            slide.children[storePositions[i]-1].style.right = (2-(i-(row*5)))*width + type;

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
            slide.children[storePositions[row+(i*5)]-1].style.top = (2-i)*-width + type;
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
  if(mummy){
  for(i=0;i<25;i++){
      if (storePositions[i] == 0 && solution[i] == 0){}else{
        if ((slideColour[whichPuzzle])[storePositions[i]-1] != solution[i]){
            correct = false;
        }
      }
   }
  if (correct){
    mummy = false;
    time = timer;
    clearInterval(Interval);
    confetti();
    document.getElementById("topBit").innerHTML = "Congratulations!";
    document.getElementById("bottomBit").innerHTML = "Your time is " + time + ".";
    setTimeout(function(){
      document.getElementById("background2").style.background = "rgba(40, 40, 40, 0.4)";
      setTimeout(function(){ send(); document.getElementById("continue").style.display = "block"; }, 700);
                         }, 400);

  }
  }
}





function setUpSolution()
{
  mummy = false;
  if (boardDay != day){
    resetBoard();
  }
  if(daddy){
  document.getElementById("background2").style.background = "rgba(40, 40, 40, 0)";
  }
  document.getElementById("yay").style.display = "none";
  var colourAlt = Math.floor(Math.random() * 3);
  storePositions = 
  [0, 0, 10, 14, 0,
   16, 1, 2, 3, 0,
   11, 4, 5, 6, 13,
   0, 7, 8, 9, 15,
   0, 0, 12, 0, 0];

   //Setting puzzle up
   document.getElementById("nameHolder").innerHTML = "";
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
   for(var i=0;i<16;i++){
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
           slideS.children[whichChild].style.right = (2-i+(row*5))*40 + "px";
           //apply vertical
           slideS.children[whichChild].style.top = (row-2)*40 + "px";
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
   setTimeout(function(){mummy=true;}, 2000);
  checkSize();
}



function confetti(){
           try {
              var count = 400;
              var defaults = {
                origin: { y: 1 },
              };

              function fire(particleRatio, opts) {
                confetti(
                  Object.assign({}, defaults, opts, {
                    particleCount: Math.floor(count * particleRatio),
                  })
                );
              }

              fire(0.25, {
                spread: 26,
                startVelocity: 55,
              });
              fire(0.2, {
                spread: 60,
              });
              fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8,
              });
              fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2,
              });
              fire(0.1, {
                spread: 120,
                startVelocity: 45,
              });
            } catch (e) {
              console.error(e);
            }
}
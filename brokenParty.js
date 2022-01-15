var row = 1;

var storePositions = [0, 0, 0, 0, 0,
                      0, 1, 2, 3, 0,
                      0, 4, 5, 6, 0,
                      0, 7, 8, 9, 0,
                      0, 0, 0, 0, 0]




for(var i=(row*5)+5;i>(row*5);i--){
  storePositions[i] = storePositions[i-1];
}
for(var i=(row*5)+5;i>(row*5);i++){
  storePositions[i] = storePositions[i+1];
}

document.getElementById("bruh").innerHTML = storePositions;
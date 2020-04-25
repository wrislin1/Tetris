var y = -1;
var x = 0;

function gameBoard() {
  var i;
  var j = -1;
  var k = 0;
  var temp="";
for (i = 0; i < 200; i++) {
  if((k % 10) == 0)
  {
    k=0;
    j++;
  }
temp += ("<div class='item' id='v"+(j)+"_"+(k++) +"'"+" >" + j+"," +(k-1)+ "</div>");
}
document.getElementById('board').innerHTML=temp;
}


setInterval(gameMode,100);


function gameMode() {

y++;
var curr = ("v"+y+"_"+x);
var prev = ("v"+(y-1)+"_"+x);
document.getElementById(curr).style.backgroundColor="black";
document.getElementById(prev).style.backgroundColor="white";
setInterval(  document.addEventListener('keydown', move),100);
}



function move() {

  x++;
}

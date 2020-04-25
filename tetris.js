function gameBoard() {
  window.alert("hello");
  var i;
  var temp="";
for (i = 0; i < 200; i++) {
temp += ("<div class='item'>" + " " +i + "</div>");
}
document.getElementById('board').innerHTML=temp;
}

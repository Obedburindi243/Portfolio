function startTime() {
  var today = new Date();
  var h = today.getFullYear();
  document.getElementById('time').innerHTML = "copyright @  " +h  ;
  var t = setTimeout(startTime, 500)  ;
  
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
 
startTime()   ;
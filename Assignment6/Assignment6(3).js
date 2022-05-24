function updateBackground() {
    var 
      hr = (new Date()).getHours(),
      body = document.body,
      bstyle = body.style,    
      hello = document.querySelector(".hello");    
    if (hr < 10) {
      bstyle.backgroundColor = "white";
      bstyle.color = "#565332";
      hello.innerText = "Good morning";
    } else if (hr < 20) {
      bstyle.backgroundColor = "#F0F8FF";
      bstyle.color = "#797446";
      hello.innerText ="Have a good day!";
    } else {
      bstyle.backgroundColor = "black";
      bstyle.color = "white";
      hello.innerText = "Good night!";
      hello.style.color = "#F0E68C";
      hello.style.animation ="glow 10s ease-in-out infinite alternate"
    } 
  }
  
  setInterval(updateBackground, 1000 * 60);
  updateBackground();


  var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
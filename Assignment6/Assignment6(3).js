function updateBackground() {
    var 
      hr = (new Date()).getHours(),
      body = document.body,
      bstyle = body.style,    
      hello = document.querySelector(".hello");    
    if (hr < 10) {
      bstyle.backgroundColor = "yellow";
      bstyle.color = "black";
      hello.innerText = "Have a good morning";
    } else if (hr < 20) {
      bstyle.backgroundColor = "green";
      bstyle.color = "white";
      hello.innerText ="Have a good day!";
    } else {
      bstyle.backgroundColor = "black";
      bstyle.color = "white";
      hello.innerText = "Have a good night!";
      hello.style.color = "#F0E68C";
      hello.style.animation ="glow 10s ease-in-out infinite alternate"
    } 
  }
  
  setInterval(updateBackground, 1000 * 60);
  updateBackground();
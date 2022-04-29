const formSubmitEventElement = document.querySelector('#form')
const formInputElement = document.querySelector('#form input')
const formSubmitEventFeedbackElement = document.querySelector('#feedback')

formSubmitEventElement.addEventListener('submit', (event) => {
    console.log('submit event', event)
    event.preventDefault() 
    const value = formInputElement.value
    const feedbackElement = document.createElement('ul')
    feedbackElement.innerHTML = "⊛" + value

    formSubmitEventFeedbackElement.appendChild(feedbackElement)
    formInputElement.value = ""
})


var feedback = document.getElementById("feedback");
var words = feedback.innerText.split(" "); 
var colors = ["#a7b8c9","#728a2a", "#d74d24", "#dca880", "#57342f", "#002dd2","#7295e0","white","#ebf298","#836aa5","black"];
var ul = [];

for(var x = 0; x < words.length; x++){
    var color = colors[Math.floor(Math.random()*colors.length)] // geting random color from array;
    var ul = "<ul style='color: " + color + ";'>" + words[x] + "</ul>"
    
    ul.push(ul);
}

feedback.innerHTML = ul.join(" ");
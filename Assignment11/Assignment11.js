const formSubmitEventElement = document.querySelector('#form')
const formInputElement = document.querySelector('#form input')
const formSubmitEventFeedbackElement = document.querySelector('#feedback')
const keyboardEventElement =document.querySelector('body')

formSubmitEventElement.addEventListener('submit', (event) => {
    console.log('submit event', event)
    event.preventDefault() 
    const value = formInputElement.value
    const feedbackElement = document.createElement('ul')
    feedbackElement.innerHTML = "⊛" + value
    // get random color
    var color = colors[Math.floor(Math.random()*colors.length)] // geting random color from array;
    // set color on new list item
    feedbackElement.style.color = color
    formSubmitEventFeedbackElement.appendChild(feedbackElement)
    formInputElement.value = ""
})


var feedback = document.getElementById("feedback");
var words = feedback.innerText.split(" "); 
var colors = ["#728a2a", "#d74d24", "#57342f", "#282f3d","#493960","black"];

keyboardEventElement.addEventListener('keydown',(event)=>{
    const feedbackElement = document.createElement('img')
    feedbackElement.innerHTML = "Key Pressed:" + event .key
    
    if(event.key === "a") {
        const bKeyElement = document.querySelector("#a")
        document.body.style.backgroundColor = "#FFF8DC";
    }
    if(event.key === "b") {
        const bKeyElement = document.querySelector("#b")
        document.body.style.backgroundColor = "#F8F8FF";
    }
    if(event.key === "c") {
        const bKeyElement = document.querySelector("#c")
        document.body.style.backgroundColor = "#F0FFF0";
    }
    if(event.key === "d") {
        const bKeyElement = document.querySelector("#d")
        document.body.style.backgroundColor = "#e0ebeb";
    }
    if(event.key === "e") {
        const bKeyElement = document.querySelector("#e")
        document.body.style.backgroundColor = "#FFF0F5";
    }
    if(event.key === "f") {
        const bKeyElement = document.querySelector("#f")
        document.body.style.backgroundColor = "#9ACD32";
    }
    if(event.key === "g") {
        const bKeyElement = document.querySelector("#g")
        document.body.style.backgroundColor = "#FFF5EE";
    }
     if(event.key === "h") {
        const bKeyElement = document.querySelector("#h")
        document.body.style.backgroundColor = "#fff5e6";
    }
    if(event.key === "i") {
        const bKeyElement = document.querySelector("#i")
        document.body.style.backgroundColor = "#ebfaeb";
    }
                                                                  
    keyboardFeedbackEventElement.appendChild(feedbackElement)

    keyboardFeedbackEventElement.appendChild(feedbackElement)

    })



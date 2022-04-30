const formSubmitEventElement = document.querySelector('#form')
const formInputElement = document.querySelector('#form input')
const formSubmitEventFeedbackElement = document.querySelector('#feedback')

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
// var ul = [];
// const updateColors = () => {
//     for(var x = 0; x < words.length; x++){
//         var color = colors[Math.floor(Math.random()*colors.length)] // geting random color from array;
//         console.log(color)
//         var ul = "<ul style='color: " + color + ";'>" + words[x] + "</ul>"
        
//         // ul.push(ul);
//     }
// }


// feedback.innerHTML = ul.join(" ");
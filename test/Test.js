document.getElementById("colored-element").style.color = "#9fbfbf";

const parentElement = document.querySelector('#parent-element')
const divElement=document.createElement('div')
divElement.innerHTML="New HTML div Element"
parentElement.appendChild(divElement)

const forLoopArray=["Item One", "Item Two","Item Three","Item Four"]
for(let index=0; index<forLoopArray.length; index++){
    const item=forLoopArray[index];
    console.log(item);
}

const clickEventElement = document.querySelector('#event-listener-button')
const clickEventFeedbackElement = document.querySelector('#click-feedback')

clickEventElement.addEventListener('click', (event) => {
    console.log('click event', event)
    // Create Feedback Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Clicked"
    // Add Feedback Element to Page
    clickEventFeedbackElement.appendChild(feedbackElement)
})
const clickEventElement = document.querySelector('#click')
const clickEventFeedbackElement = document.querySelector('#click-feedback')
const hoverEventElement=document.querySelector('#hover')
const hoverEventFeedbackElement =document.querySelector('#hover-feedback')
const mousemoveEventElement =document.querySelector('#mousemove')
const mousemoveFeedbackEventElement =document.querySelector('#mousemove-feedback')
const keyboardEventElement =document.querySelector('body')
const keyboardFeedbackEventElement=document.querySelector('#keyborad-feedback')
const formSubmitEventElement = document.querySelector('#form')
const formInputElement = document.querySelector('#form input')
const formSubmitEventFeedbackElement = document.querySelector('#form-feedback')



clickEventElement.addEventListener('click', (event) => {
    const feedbackElement=document.createElement('p')
    feedbackElement.innerHTML="Button Clicked"
    clickEventFeedbackElement.appendChild(feedbackElement)
})

clickEventElement.addEventListener('doubleclick',()=>{
    const feedbackElement=document.createElement('p')
    feedbackElement.innterHTML="Button Double-Clicked"

    clickEventFeedbackElement.appendChild(feedbackElement)

})

//Mouse enter element
hoverEventElement.addEventListener('mouseenter', () => {
    // Create Feedback Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Mouse Enter"
    // Add Feedback Element to Page
    hoverEventFeedbackElement.appendChild(feedbackElement)
})


hoverEventElement.addEventListener('mouseout',()=>{
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Mouse Out"
    // Add Feedback Element to Page
    hoverEventFeedbackElement.appendChild(feedbackElement)
})


hoverEventElement.addEventListener('mouseover',()=>{
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Mouse Over"
    // Add Feedback Element to Page
    hoverEventFeedbackElement.appendChild(feedbackElement)
})


mousemoveEventElement.addEventListener('mousemove',()=>{
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = 'pageX: ' + event.pageX + ", pageY:"+event.pageY
    // Add Feedback Element to Page
    mousemoveFeedbackEventElement.innerHTML=""
    mousemoveFeedbackEventElement.appendChild(feedbackElement)


})

keyboardEventElement.addEventListener('keydown',(event)=>{
   console.log(event)
   if(event.key === "b") {
       console.log('b has been pressed')
       // add image that occurs when b is pressed bere    
   }
   
})


formSubmitEventElement.addEventListener('submit', (event) => {
    console.log('submit event', event)
    event.preventDefault() 
    const value = formInputElement.value
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Submit Event: " + value

    formSubmitEventFeedbackElement.appendChild(feedbackElement)
    formInputElement.value = ""
})


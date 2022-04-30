const airtableApiKey = "keyiZWjtuTerXEF6H";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/appd1MrWh0JCE5kFc/Bubbles";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;




const keyboardEventElement =document.querySelector('body')
const keyboardFeedbackEventElement=document.querySelector('#keyborad-feedback')
const keybaordEventContainerElement =document.querySelector('container')

keyboardEventElement.addEventListener('keydown',(event)=>{
    const feedbackElement = document.createElement('img')
    feedbackElement.innerHTML = "Key Pressed:" + event .key
    
    if(event.key === "b") {
        const bKeyElement = document.querySelector("#b")
        bKeyElement.innerHTML = "<img src=\"./Image/squeeze.png\">";

    }
    if(event.key === "3") {
        const bKeyElement = document.querySelector("#three")
        bKeyElement.innerHTML = "<img src=\"./Image/squeeze3.png\">";

    }
    keyboardFeedbackEventElement.appendChild(feedbackElement)

    keyboardFeedbackEventElement.appendChild(feedbackElement)

    if(event.key === "4") {
        const bKeyElement = document.querySelector("#four")
        bKeyElement.innerHTML = "<img src=\"./Image/squeeze4.png\">";

    }
    keyboardFeedbackEventElement.appendChild(feedbackElement)

    keyboardFeedbackEventElement.appendChild(feedbackElement)
    })



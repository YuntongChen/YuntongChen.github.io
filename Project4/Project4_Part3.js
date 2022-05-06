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
    
    if(event.key === "v") {
        const bKeyElement = document.querySelector("#v")
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
    if(event.key === "5") {
        const bKeyElement = document.querySelector("#five")
        bKeyElement.innerHTML = "<img src=\"./Image/squeeze5.png\">";

    }
    keyboardFeedbackEventElement.appendChild(feedbackElement)

    keyboardFeedbackEventElement.appendChild(feedbackElement)
    if(event.key === "6") {
        const bKeyElement = document.querySelector("#six")
        bKeyElement.innerHTML = "<img src=\"./Image/squeeze6.png\">";

    }
    keyboardFeedbackEventElement.appendChild(feedbackElement)

    keyboardFeedbackEventElement.appendChild(feedbackElement)
    if(event.key === "7") {
        const bKeyElement = document.querySelector("#seven")
        bKeyElement.innerHTML = "<img src=\"./Image/squeeze7.png\">";

    }
    keyboardFeedbackEventElement.appendChild(feedbackElement)

    keyboardFeedbackEventElement.appendChild(feedbackElement)
    if(event.key === "8") {
        const bKeyElement = document.querySelector("#eight")
        bKeyElement.innerHTML = "<img src=\"./Image/squeeze8.png\">";

    }
    keyboardFeedbackEventElement.appendChild(feedbackElement)

    keyboardFeedbackEventElement.appendChild(feedbackElement)
    if(event.key === "e") {
        const bKeyElement = document.querySelector("#e")
        bKeyElement.innerHTML = "<img src=\"./Image/squeezee.png\">";

    }
    keyboardFeedbackEventElement.appendChild(feedbackElement)

    keyboardFeedbackEventElement.appendChild(feedbackElement)
    if(event.key === "r") {
        const bKeyElement = document.querySelector("#r")
        bKeyElement.innerHTML = "<img src=\"./Image/squeezer.png\">";
        }
        if(event.key === "t") {
            const bKeyElement = document.querySelector("#t")
            bKeyElement.innerHTML = "<img src=\"./Image/squeezet.png\">";
            }
        if(event.key === "t") {
                const bKeyElement = document.querySelector("#t")
                bKeyElement.innerHTML = "<img src=\"./Image/squeezet.png\">";
                }
    if(event.key === "y") {
                    const bKeyElement = document.querySelector("#y")
                    bKeyElement.innerHTML = "<img src=\"./Image/squeezey.png\">";
                    }
       if(event.key === "u") {
      const bKeyElement = document.querySelector("#u")
      bKeyElement.innerHTML = "<img src=\"./Image/squeezeu.png\">";
                        }  
       if(event.key === "i") {
const bKeyElement = document.querySelector("#i")
bKeyElement.innerHTML = "<img src=\"./Image/squeezei.png\">";
                            }  
      if(event.key === "s") {
       const bKeyElement = document.querySelector("#s")
       bKeyElement.innerHTML = "<img src=\"./Image/squeezes.png\">";
                            }        
       if(event.key === "d") {
        const bKeyElement = document.querySelector("#d")
        bKeyElement.innerHTML = "<img src=\"./Image/squeezed.png\">";
                             }     
        if(event.key === "f") {
           const bKeyElement = document.querySelector("#f")
           bKeyElement.innerHTML = "<img src=\"./Image/squeezef.png\">";
                              }
        if(event.key === "g") {
            const bKeyElement = document.querySelector("#g")
            bKeyElement.innerHTML = "<img src=\"./Image/squeezeg.png\">";
                               }
        if(event.key === "h") {
           const bKeyElement = document.querySelector("#h")
           bKeyElement.innerHTML = "<img src=\"./Image/squeezeh.png\">";
                                }
        if(event.key === "j") {
            const bKeyElement = document.querySelector("#j")
            bKeyElement.innerHTML = "<img src=\"./Image/squeezej.png\">";
                                } 
        if(event.key === "x") {
            const bKeyElement = document.querySelector("#x")
            bKeyElement.innerHTML = "<img src=\"./Image/squeezex.png\">";
                                }
        if(event.key === "c") {
            const bKeyElement = document.querySelector("#c")
            bKeyElement.innerHTML = "<img src=\"./Image/squeezec.png\">";
                                }
        if(event.key === "b") {
            const bKeyElement = document.querySelector("#b")
            bKeyElement.innerHTML = "<img src=\"./Image/squeezeb.png\">";
                                }
        if(event.key === "b") {
            const bKeyElement = document.querySelector("#ba")
            bKeyElement.innerHTML = "<audio controls src=\"./Audio/sound effect2.wav\" autoplay>";
                                }                       
        if(event.key === "n") {
            const bKeyElement = document.querySelector("#n")
            bKeyElement.innerHTML = "<img src=\"./Image/squeezen.png\">";
                                }
        if(event.key === "n") {
            const bKeyElement = document.querySelector("#na")
            bKeyElement.innerHTML = "<audio controls src=\"./Audio/sound effect.wav\" autoplay>";
            }
                               
         
          
                                                                  
    keyboardFeedbackEventElement.appendChild(feedbackElement)

    keyboardFeedbackEventElement.appendChild(feedbackElement)

    })


    const keysPressed = []

    function handleKeyDown(evt){
        if (!evt.repeat) {
            console.log(evt)
            keysPressed.push(evt.key)
            console.log('keysPressed', keysPressed)
            if(keysPressed.includes('e') && keysPressed.includes('r') && keysPressed.includes('t')) {
                location.reload();
            }
        } else {
            console.log('repeat')
        }
    }  

    function handleKeyUp(evt){
        console.log(evt)
        const index = keysPressed.indexOf(evt.key);
        if (index > -1) {
            keysPressed.splice(index, 1); // 2nd parameter means remove one item only
        
        }

        console.log('keysPressed', keysPressed)
    }      
document.addEventListener('keydown', handleKeyDown)
document.addEventListener('keyup', handleKeyUp)






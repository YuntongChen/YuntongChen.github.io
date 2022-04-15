const airtableApiKey = "keyiZWjtuTerXEF6H";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/appdX6TGwTTcHDg7D/Text";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

// STEP 1: VARIABLES
const mapContainerElement = document.querySelector("#map")
fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    const records = data.records
    for (let index = 0; index < records.length; index++) {
        console.log(records[index])
        const Text = records[index].fields.Text
        console.log(records[index].fields)
        const TextUrl = records[index].fields.TextUrl

        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        const textElement =document.createElement('div')
        textElement.classList.add('Text')
        textElement.setAttribute('src', TextUrl)

        const titleElement = document.createElement('p')    
        titleElement.classList.add('text')
        titleElement.innerHTML = Text

        mapContainerElement.appendChild(containerElement)

        containerElement.appendChild(textElement)

        containerElement.appendChild(titleElement)

 }
  })

  for (let index = 0; index < map.length; index++) {
      const element = array[index];
      console.log(map[index])
      const mapContainerElement =document.createElement('div')
      const typeContainerElement= document.createElement('div')
  }



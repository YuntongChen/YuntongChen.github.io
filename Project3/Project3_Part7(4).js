const airtableApiKey = "keyiZWjtuTerXEF6H";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/appdX6TGwTTcHDg7D/Stairs";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

const bodyElement = document.querySelector("main#app");
const CrystalContainerElement = document.querySelector("#Crystal")
fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    const records = data.records
    for (let index = 0; index < records.length; index++) {
        console.log(records[index])
        const title = records[index].fields.Title
        console.log(records[index].fields)
        const imageUrl = records[index].fields.Images[0].url

        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        const imageElement =document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)

        const titleElement = document.createElement('p')    
        titleElement.classList.add('title')
        titleElement.innerHTML = title

        CrystalContainerElement.appendChild(containerElement)

        containerElement.appendChild(imageElement)

        containerElement.appendChild(titleElement)

 }
  })
  .catch((error) => {
    console.log(error);
  });
const airtableApiKey = "keyiZWjtuTerXEF6H";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/appdX6TGwTTcHDg7D/Crystal";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;
const MountainTwoContainerElement =document.querySelector('#MountainTwo')
const MountainThreeContainerElement =document.querySelector('#MountainThree')
const bodyElement = document.querySelector("main#app");
const CrystalContainerElement = document.querySelector("#Crystal")
fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    const records = data.records
    for (let index = 0; index < records.length; index++) {
        const title = records[index].fields.Title
        const imageUrl = records[index].fields.Images[0].url
        const Genre = records[index].fields.Genre;

        const usercontainerElement = document.createElement('span')
        usercontainerElement.classList.add('container')

        const imageElement =document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)
 
 if(Genre.includes("rock")){
  CrystalContainerElement.appendChild(usercontainerElement)
  usercontainerElement.appendChild(imageElement)}

else if(Genre.includes("Mountain2")){
  MountainTwoContainerElement.appendChild(usercontainerElement)
  usercontainerElement.appendChild(imageElement)}

else if(Genre.includes("Mountain3")){
    MountainThreeContainerElement.appendChild(usercontainerElement)
    usercontainerElement.appendChild(imageElement)}
  }})
 

console.log(MountainTwoContainerElement)

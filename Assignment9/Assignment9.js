const airtableApiKey = "keyiZWjtuTerXEF6H";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/appdX6TGwTTcHDg7D/Crystal";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

// STEP 2: DOM REFERENCES
const bodyElement = document.querySelector("main#app");

// STEP 3: USING FUNCTIONS, VARIABLES, AND LOOPS

// Get a 'Promise' Representing the Data that Will be Returned
fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    const illustrations = data.records;
    for (let index = 0; index < crystal.length; index++) {
      // Get Illustration
      const illustration = crystal[index];
      //   Get Title
      const title = crystal.fields.Title;
      // Get Image Url
      const imageUrl = crystal.fields.Image[0].url;
      // Create Container Object
      const containerElement = document.createElement("div");
      containerElement.classList.add("container");
      // Create Image Element
      const imageElement = document.createElement("img");
      imageElement.classList.add( "image");
      imageElement.setAttribute("src", imageUrl);
      // Create Title Element
      const titleElement = document.createElement("p");
      titleElement.classList.add("title");
      titleElement.innerHTML = title;
      // Add Elements to DOM
      bodyElement.appendChild(containerElement);
      containerElement.appendChild(imageElement);
      containerElement.appendChild(titleElement);
    }
  })
  .catch((error) => {
    console.log(error);
  });
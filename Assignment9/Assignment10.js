const airtableApiKey = "keyiZWjtuTerXEF6H";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/appdX6TGwTTcHDg7D/Text";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;


// SECTION 2: DOM References 
const adjectiveElement = document.querySelector('#adjective')
const nameElement = document.querySelector('#name')
const verbElement = document.querySelector('#verb')
const nounElement =document.querySelector('#noun')




fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    const words = data.records;
    const adjectives = words.filter((word) => {
        return word.fields.Type === 'adjective'
    })
    // Filter for Word Types 
    const names = words.filter((word) => {
        return word.fields.Type === 'name'
    })
    const verbs = words.filter((word) => {
        return word.fields.Type === 'verb'
    })
    const noun = words.filter((word) => {
        return word.fields.Type === 'noun'
    })
    // Set Values onto HTML Elements 
    adjectiveElement.innerHTML = adjectives[Math.floor(Math.random()*adjectives.length)].fields.Text
    console.log('names', names)
    nameElement.innerHTML = names[Math.floor(Math.random()*names.length)].fields.Text
    verbElement.innerHTML = verbs[Math.floor(Math.random()*verbs.length)].fields.Text
    nounElement.innerHTML= noun[Math.floor(Math.random()*noun.length)].fields.Text
  })
  .catch((error) => {
    console.log(error);
  });


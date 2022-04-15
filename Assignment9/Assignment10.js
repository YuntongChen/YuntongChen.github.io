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


// STEP 2: DOM REFERENCES
const usersContainerElement = document.querySelector('#map')
const shownegativeUsersButtonElement = document.querySelector('button#negative')
const showpositiveButtonElement = document.querySelector('button#positive')
const showneutralButtonElement = document.querySelector('button#neutral')
// STEP 3: FUNCTIONS
const createUserElement = (user) => {
    // Create Container Element
    const containerElement = document.createElement('div')
    containerElement.classList.add('user')
    // Create Positive Element
    const positiveElement = document.createElement('p')
    positiveElement.innerHTML = 'positive ' + user.positive
    // Create Negative Element
    const negativeElement = document.createElement('p')
    negativeElement.innerHTML = 'negative' + user.negative
    // Create Neutral Element
    const neutralElement = document.createElement('p')
    neutralElement.innerHTML = 'neutral ' + user.neutral
    containerElement.appendChild(positiveElement)
    containerElement.appendChild(negativeElement)
    containerElement.appendChild(neutralElement)
    return containerElement
}

const removeUsers = () => {
    usersContainerElement.innerHTML = ""
}

const addUsers = () => {
    map.forEach(user => {
        const userElement = createUserElement(user)
        usersContainerElement.appendChild(userElement)
    });
}

// STEP 4: APPLICATION
// MAP
const usersWithType = users.map((user) => {
    const userWithCreditInDollars = {
        Type: user.negative, 
        Type: user.positive, 
        Type: user.neutral
    }
    const creditInDollars = userWithCreditInDollars.credit / 100 
    userWithCreditInDollars.credit = '$' + creditInDollars
    return userWithCreditInDollars
})

// FILTER
const negativeUsers = users.filter((user) => {
    return user.negative
})

const positiveUsers = users.filter((user) => {
    return user.positive
})

const neutralUsers = users.filter((user) => {
    return user.neutral
})

// SORT 
const usersSortedByType = users.sort((negative, positive) => {
    if (negative.name < positive.name) {
        return -1;
      }
      if (negative.name > positive.name) {
        return 1;
      }
    
      // names must be equal
      return 0;
})

usersSortedByType = usersSortedByType.slice().reverse() 

// SET EVENT LISTENERS
shownegativeUsersButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(negativeUsers)
})

showpositiveButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(positiveUsers)
})

showneutralButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(neutralUsers)
})

// START APP
addUsers(users)
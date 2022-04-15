const airtableApiKey = "keyiZWjtuTerXEF6H";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/appdX6TGwTTcHDg7D/Crystal";

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
// STEP 1: VARIABLES


const users = [{
    name: "Mountain1", 
    authenticated: true,
    credit: -123
}, {
    name: "Mountain2", 
    authenticated: false,
    credit: 145
},   
{
    name: "Mountain3", 
    authenticated: false,
    credit: 14
},
]

for (let index = 0; index < users.length; index++) {
    const usersContainerElement =document.createElement ('div')
    const nameElement=document.createElement('p')
    nameElement.innerHTML= users[index].name
    const authenticatedElement=document. createElement('p')
    authenticatedElement.innerHTML=users[index].authenticated
    const creditElement=document. createElement('p')
    creditElement.innerHTML=users[index].credit
    usersContainerElement.appendChild(nameElement)
    usersContainerElement.appendChild(authenticatedElement)
    usersContainerElement.appendChild(creditElement)
}


// STEP 2: DOM REFERENCES
const usersContainerElement = document.querySelector('#users')
const showUsersWithCreditInDollarsButtonElement = document.querySelector("button#map")
const showAuthenticatedUsersButtonElement = document.querySelector('button#authenticated')
const showUsersSortedByNameAscendingButtonElement = document.querySelector('button#sort-ascending')
const showUsersSortedByNameDescendingButtonElement = document.querySelector('button#sort-descending')

// STEP 3: FUNCTIONS
const createUserElement = (user) => {
    // Create Container Element
    const containerElement = document.createElement('div')
    containerElement.classList.add('user')
    // Create Name Element
    const nameElement = document.createElement('p')
    nameElement.innerHTML = 'Name: ' + user.name
    // Create Authenticated Element
    const authenticatedElement = document.createElement('p')
    authenticatedElement.innerHTML = 'Authenticated: ' + user.authenticated
    // Create Credit Element
    const creditElement = document.createElement('p')
    creditElement.innerHTML = 'Credit:' + user.credit
    containerElement.appendChild(nameElement)
    containerElement.appendChild(authenticatedElement)
    containerElement.appendChild(creditElement)
    return containerElement
}

const removeUsers = () => {
    usersContainerElement.innerHTML = ""
}

const addUsers = (users) => {
    users.forEach(user => {
        const userElement = createUserElement(user)
        usersContainerElement.appendChild(userElement)
    });
}

// STEP 4: APPLICATION
// MAP
const usersWithCreditInDollars = users.map((user) => {
    const userWithCreditInDollars = {
        name: user.name, 
        credit: user.credit, 
        authenticated: user.authenticated
    }
    const creditInDollars = userWithCreditInDollars.credit / 100 
    userWithCreditInDollars.credit = '$' + creditInDollars
    return userWithCreditInDollars
})

// FILTER
const authenticatedUsers = users.filter((user) => {
    return user.authenticated
})

// SORT 
const usersSortedByNameAscending = users.sort((userA, userB) => {
    if (userA.name < userB.name) {
        return -1;
      }
      if (userA.name > userB.name) {
        return 1;
      }
    
      // names must be equal
      return 0;
})

usersSortedByNameDescending = usersSortedByNameAscending.slice().reverse() 

// SET EVENT LISTENERS
showUsersWithCreditInDollarsButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersWithCreditInDollars)
})

showAuthenticatedUsersButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(authenticatedUsers)
})

showUsersSortedByNameAscendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByNameAscending)
})

showUsersSortedByNameDescendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByNameDescending)
})

// START APP
addUsers(users)
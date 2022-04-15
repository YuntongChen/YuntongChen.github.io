// STEP 1: VARIABLES
const users=[{
    name: "Ruins Greatsword", 
    description: "Originally rubble from a ruin which fell from the sky, this surviving fragment was honed into a weapon.",
    attack: 124
},
{
    name: "Eclipse Shotel", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 77, 
},
{
    name: "Grafted Blade Greatsword", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 157, 
},]

const bigContainerElement = document.querySelector('#users')
const showNameDescendingButtonElement = document.querySelector('button#name')
const showDescriptionUsersButtonElement = document.querySelector('button#description')
const showAttackButtonElement = document.querySelector('button#attack')
// STEP 2: DOM REFERENCES


for (let index = 0; index < users.length; index++) {
    
    const userContainerElement = document. createElement('div');

    const nameElement = document. createElement('p') 
    nameElement.innerHTML= users [index].name 

    const descriptionElement = document. createElement('p')
    descriptionElement.innerHTML=users [index].description

    const attackElement = document. createElement('p')
    attackElement.innerHTML=users [index].attack

    userContainerElement.appendChild(nameElement)
    userContainerElement.appendChild(descriptionElement)
    userContainerElement.appendChild(attackElement)
    bigContainerElement.appendChild(userContainerElement)   
    }
//FUNCTIONS

const usersWithAttack = users.map((user)=>{
    const newUser ={
        name: user.name,
        description: user.description,
        attack:user.attack,
        attack: "$" + user.attack /10
    }
    return newUser
})
//Map
const usersWithName = users.map((user)=>{
    return user.name
    })

//Filter
const descriptionUsers = users. filter((user)=>{return user.description})

const valuableUsers = users.filter((user)=>{
    return user.attack > 80
})
console. log(valuableUsers)

//Sort
const usersSortedByAttack = users.sort((userA, userB)=>{
    if (userA.attack > userB.attack){
        return 1}
    if (userA.attack < userB.attack){
            return -1}
    if (userA.attack === userB.attack){
                return 0}
})
console.log(usersSortedByAttack)





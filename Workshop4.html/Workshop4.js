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
const showNameDescendingButtonElement = document.querySelector('button#namedescending')
const showDescriptionUsersButtonElement = document.querySelector('button#descriptionascending')
const showAttackButtonElement = document.querySelector('button#attackbigger')
const showAttackasDollarsButtonElement =document.querySelector('button#attackdollars')
const showAttackAscendingButtonElement =document.querySelector('button#attackascending')
// STEP 2: DOM REFERENCES


for (let index = 0; index < users.length; index++) {
    
    const userContainerElement = document. createElement('div');
    userContainerElement.classList.add('user')

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


//Sort
const usersSortedByAttack = users.sort((userA, userB)=>{
    if (userA.attack > userB.attack){
        return 1}
    if (userA.attack < userB.attack){
            return -1}
    if (userA.attack === userB.attack){
                return 0}
})


const usersSortedByName = users.sort((userA, userB)=>{
    if (userA.name < userB.name){
        return 1}
    if (userA.name > userB.name){
            return -1}
    if (userA.name === userB.name){
                return 0}
})

console.log(usersSortedByName)

const usersSortedByDescription = users.sort((userA, userB)=>{
    if (userA.description > userB.description){
        return 1}
    if (userA.description < userB.description){
            return -1}
    if (userA.description === userB.description){
            return 0}
})

const usersSortedByDescriptionAscending = usersSortedByDescription. reverse ()
//Application code


showAttackasDollarsButtonElement.addEventListener('click',()=>{
    bigContainerElement.innerHTML =""
    for (let index = 0; index < usersWithAttack.length; index++) {
    
        const userContainerElement = document. createElement('div');
        userContainerElement.classList.add('user')
    
        const nameElement = document. createElement('p') 
        nameElement.innerHTML= usersWithAttack [index].name 
    
        const descriptionElement = document. createElement('p')
        descriptionElement.innerHTML=usersWithAttack [index].description
    
        const attackElement = document. createElement('p')
        attackElement.innerHTML=usersWithAttack [index].attack
    
        userContainerElement.appendChild(nameElement)
        userContainerElement.appendChild(descriptionElement)
        userContainerElement.appendChild(attackElement)
        bigContainerElement.appendChild(userContainerElement)   
        }
})


showAttackButtonElement.addEventListener('click',()=>{
    bigContainerElement.innerHTML =""
    for (let index = 0; index < valuableUsers.length; index++) {
    
        const userContainerElement = document. createElement('div');
        userContainerElement.classList.add('user')
    
        const nameElement = document. createElement('p') 
        nameElement.innerHTML= valuableUsers [index].name 
    
        const descriptionElement = document. createElement('p')
        descriptionElement.innerHTML=valuableUsers [index].description
    
        const attackElement = document. createElement('p')
        attackElement.innerHTML=valuableUsers [index].attack
    
        userContainerElement.appendChild(nameElement)
        userContainerElement.appendChild(descriptionElement)
        userContainerElement.appendChild(attackElement)
        bigContainerElement.appendChild(userContainerElement)   
        }
})


showAttackAscendingButtonElement.addEventListener('click',()=>{
    bigContainerElement.innerHTML =""
    for (let index = 0; index < usersSortedByAttack.length; index++) {
    
        const userContainerElement = document. createElement('div');
        userContainerElement.classList.add('user')
    
        const nameElement = document. createElement('p') 
        nameElement.innerHTML= usersSortedByAttack [index].name 
    
        const descriptionElement = document. createElement('p')
        descriptionElement.innerHTML=usersSortedByAttack [index].description
    
        const attackElement = document. createElement('p')
        attackElement.innerHTML=usersSortedByAttack [index].attack
    
        userContainerElement.appendChild(nameElement)
        userContainerElement.appendChild(descriptionElement)
        userContainerElement.appendChild(attackElement)
        bigContainerElement.appendChild(userContainerElement)   
        }
})

showDescriptionUsersButtonElement.addEventListener('click',()=>{
    bigContainerElement.innerHTML =""
    for (let index = 0; index < usersSortedByDescriptionAscending.length; index++) {
    
        const userContainerElement = document. createElement('div');
        userContainerElement.classList.add('user')
    
        const nameElement = document. createElement('p') 
        nameElement.innerHTML= usersSortedByDescriptionAscending [index].name 
    
        const descriptionElement = document. createElement('p')
        descriptionElement.innerHTML=usersSortedByDescriptionAscending [index].description
    
        const attackElement = document. createElement('p')
        attackElement.innerHTML=usersSortedByDescriptionAscending [index].attack
    
        userContainerElement.appendChild(nameElement)
        userContainerElement.appendChild(descriptionElement)
        userContainerElement.appendChild(attackElement)
        bigContainerElement.appendChild(userContainerElement)   
        }
})


showNameDescendingButtonElement.addEventListener('click',()=>{
    bigContainerElement.innerHTML =""
    for (let index = 0; index < usersSortedByName.length; index++) {
    
        const userContainerElement = document. createElement('div');
        userContainerElement.classList.add('user')
    
        const nameElement = document. createElement('p') 
        nameElement.innerHTML= usersSortedByName [index].name 
    
        const descriptionElement = document. createElement('p')
        descriptionElement.innerHTML=usersSortedByName [index].description
    
        const attackElement = document. createElement('p')
        attackElement.innerHTML=usersSortedByName[index].attack
    
        userContainerElement.appendChild(nameElement)
        userContainerElement.appendChild(descriptionElement)
        userContainerElement.appendChild(attackElement)
        bigContainerElement.appendChild(userContainerElement)   
        }
})







// OBJECT LITERAL

// const user = {
//     username: "sami",
//     logIncount: 8,
//     signedIn: true,

//     getUserDetails: function () {
//         // console.log('Got user detail form database')
//         // console.log(`username = ${this.username}`)

//         console.log(this)
//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


//NOW if we want to make another user so we will make another user2 and write their properties 
// agian which make it so lengthy or messy so to avoid this messiness so we use oop or constructor





// new:
//Every new creates a fresh new empty object 

// function User (username,loginCount, isLoggedIn ) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;

//     this.greeting = function () {
//         console.log(`Welcome ${this.username}`)
//         }

//     return this
// }
// const userOne =new User("sami", 5, true)
// const userTwo =new User('Anis', 4, false)

// console.log(userOne)
// console.log(userTwo)  
// userOne.greeting()



const arr = [1,2,3]
console.log(arr.__proto__)
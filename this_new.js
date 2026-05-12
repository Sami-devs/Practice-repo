// function setUserName(username){
//     //complex DB calls
//     this.username = username
     
// }

// function createUser(username, email, password ) {

//     setUserName.call(this, username)

//     this.email = email
//     this.passsword = password   
// }

// const code = new createUser("code", "sami@gmail.com", "12345")
// console.log(code)




//example from chatgpt

// function setAge(age) {
//     this.age = age
// }

// function createPerson(name, age) {
//     this.name = name

//     setAge.call(this, age)
// }

// const sami = new createPerson("sami", 22)
// console.log(sami)







// // REMEMBER 
// //THE LOWER PORTION IS JUST FOR UNDERSTANDING NOT TO RUN

// // with new → need this
// function createPerson(name, age) {
//     this.name = name    // 👈 this needed!
//     this.age = age      // 👈 this needed!
// }
// const sami = new createPerson("sami", 22)



// // with return → no this needed!
// function createPerson(name, age) {
//     return {
//         name: name,    // 👈 no this!
//         age: age      // 👈 no this!
//     }
// }
// const sami = createPerson("sami", 22)



// Why?
// with new
// →  new creates empty object
// →  this points to that empty object
// →  we use this to fill it!

// with return
// →  we manually create object { }
// →  we fill it ourselves
// →  no need for this!

// Simple rule
// new keyword   →  needs this   to fill the object
// return {}     →  no this needed, you fill it yourself!




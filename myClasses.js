// ES6

// ES6 stands for
// ES   →  ECMAScript (official name of JavaScript)
// 6    →  version 6
// 2015 →  released in 2015

// Also called ES2015





// class User {
//     constructor(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
//     }


//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const code = new User("sami","sami@gmail.com","123")
// console.log(code.encryptPassword())
// console.log(code.changeUserName())




// behind the scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`
}

const code = new User("sami","sami@gmail.com","123")
console.log(code.encryptPassword())
console.log(code.changeUserName())


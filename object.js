// function multiplyBy5(num) {
//     return num * 5
// }
// console.log(multiplyBy5(6)) 
// console.log(multiplyBy5.power = 2) 
// console.log(multiplyBy5.prototype)
// console.log(multiplyBy5.length) 

// the all method we use with function is all the method of 
//object so we can say that function is also object in js


function createUser(username, score) {
    this.username = username
    this.score = score
}
createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`)
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()
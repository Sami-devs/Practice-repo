// let myName = "sami    "
// let myChannel = 'code'

// // console.log(myName.trim().length)
// console.log(myName.trueLength)





// When you add something(function) to a prototype — ALL objects(everything in js)
//  of that type get it automatically! means when you add a
// funtion to an object prototype so  all objects(all things
// in javascript) get it automatically but when you add a 
// funtion to array prototype so it wil get by arrrays only 
// not an object bcz object is the grand parent of 
// everything like(strings, arrays , functions) so methods 
// inherit form father to child , not from child to father

// let myHeros = ["Tariq pathan", "Aleem shah khilji"]

// let heroPower = {
//     tariq_pathan: "knowledge",
//     khilji: "Improvement",

//     getKhiljiPower: function () {
//         console.log(`Aleem shah khilji has power of ${this.khilji}`)
//     }
// }

// Object.prototype.sami = function () {
//     console.log(`sami is present everywhere`)
// }

// Array.prototype.heySami = function () {
//     console.log(`hello sami Afridi `)
// }

// heroPower.sami()
// myHeros.sami()
// myHeros.heySami()
// heroPower.heySami() // it will give an error





// INHERITANCE

// const user = {
//     name: "sami",
//     email: "sami@google.com"
// }

// const Teacher = {
//     makeVideo : true
// }

// const teachingSupport = {
//     isAvailable = false
// }

// const TASupport = {
//     makeAssignment : 'JS assignment',
//     fullTime : true
// }

// Object.setPrototypeOf(teachingSupport, Teacher)





let userName = "samiAfridi"

String.prototype.trueLength = function () {
    console.log(this)
    console.log(`true length is : ${this.trim().length}`)
}

userName.trueLength()
"sami".trueLength()
"sami    ".trueLength()
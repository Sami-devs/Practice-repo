
// console.log(Math.PI)
// Math.PI = 6
// console.log(Math.PI) //not change still Math.Pi = 3.1415 it means that it is constant and never change


// getOwnPropertyDescriptor():

// It tells you the hidden details/settings of any property in an object!
//It is like an X-ray of a property — shows what is hidden inside! 

// const user = { name: "Sami" }

// console.log(Object.getOwnPropertyDescriptor(user, "name"))
// // Output
// // js{
// //     value: "Sami",      // 👈 the actual value
// //     writable: true,     // 👈 can we change it?
// //     enumerable: true,   // 👈 does it show in loops? if false, loop will not applied on it
// //     configurable: true  // 👈 can we delete/modify it?
// // }






// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter)


// const bat = {
//     name: "Adidas",
//     price: 7000,
//     isAvailable: true

    
// }
// console.log(bat)
// console.log(Object.getOwnPropertyDescriptor(bat, "name"))
// Object.defineProperty(bat, "name",{
//     writable: false,
//     configurable: false   // it means no loop will be appied on the property name only on name property
// })
// console.log(Object.getOwnPropertyDescriptor(bat, "name"))
// bat.name = "hardy"
// console.log(bat.name)
// console.log(bat.price = 5999)







// const user = {
//     name : "sami",
//     age : 23,
//     isLoggedIn : true ,

//     orderChai : function () {
//         console.log('Chai is ready')
//     }
// }

// for (const [key, value] of Object.entries(user)) {
//     if (typeof value !== 'function') {
//         console.log(key + ':' + value)
//     }
// }








// // HOW TO CONVERT OBJECT INTO ARRAY
// Method	                       Purpose
// Object.keys()	        object keys array
// Object.values()	        object values array
// Object.entries()	    object key-value array

// // so when it converted into array then you can apply mehtods of array like foreach , filter, map

// // example:
// const bat = {
//     name: "Adidas",
//     price: 7000,
//     isAvailable: true
// }
// const entries = Object.entries(bat)

// console.log(entries)
// //now you can apply the array method like
// Object.entries(bat).forEach(([key, value]) => {

//     console.log(`${key}: ${value}`)

// })




// HOW TO CONVERT STRING INTO ARRAY
// Array.from()	        converts iterable things like string or array like things into array









// NOTE EXTRA:
// Destructuring means:
// 👉 “Taking values out of arrays or objects and storing them into variables QUICKLY AND EASILY.”
// Instead of accessing values one by one manually, JavaScript can unpack them automatically.

// NOTE: DONT NEED TO RUN JUST LEARN IT

// 1. Array Destructuring

// Without destructuring:
// const arr = [10, 20, 30]

// const first = arr[0]
// const second = arr[1]

// console.log(first)
// console.log(second)


// With Destructuring ✅
// const arr = [10, 20, 30]

// const [first, second] = arr

// console.log(first)
// console.log(second)

// Output:
// 10
// 20


// What Happened?
// [first, second]

// automatically takes values from array.

// Internally:

// first = arr[0]
// second = arr[1]



// 2. Object Destructuring

// Without destructuring:
// const user = {
//    name: "sami",
//    age: 23
// }

// const name = user.name
// const age = user.age


// With Destructuring ✅
// const user = {
//    name: "sami",
//    age: 23
// }

// const {name, age} = user

// console.log(name)
// console.log(age)

// Output:

// sami
// 23



// Difference Between Array & Object Destructuring
// Type	Syntax
// Array	[]
// Object	{}



// Rename Variables in Object Destructuring
// const user = {
//    name: "sami"
// }

// const {name: username} = user

// console.log(username)

// Output: sami
 // *********** TASK 1  ************************
 
 
 const car = {
    name: " civic",
    price: 5000000,
    brand: "Honda",

    startEngine:function () {
        console.log("engine are started")
    }
 }

//  TASK1 :Print all properties except functions using loop.

// loop are not use directly so first i convert it into array then i apply the loop
const obj = Object.entries(car)
obj.forEach(([key, value]) => {          // [key, value] => Array destructuring
    if (typeof value !== 'function') {
        console.log(key, value)
    }
});


// TASK2 : use Object.getOwnPropertyDescriptor()  to check descriptor of price.

const descriptor = Object.getOwnPropertyDescriptor(car, "price")
console.log(descriptor)


// TASK3 :make price no writable

Object.defineProperty(car, 'price',{
    writable: false
})
car.price = 7000000
console.log(car.price)  // show old price , means price not changed 


// TASK 5 : CONVERT OBJECT INTO ARRAY

const changeToArray = Object.entries(car)
console.log(changeToArray)


console.log(Array.from("javascript"))










//****************TASK 2 **************************/


const phone = {
   brand: "Samsung",
   model: "S24",
   price: 250000
}

// Tasks:

// Make brand non-enumerable
// Apply loop
// Check if brand appears
// Print descriptor of brand

Object.defineProperty(phone, 'brand', {
    enumerable:false  // now loop will not be applied on brand property only
})

const descripter = Object.getOwnPropertyDescriptor(phone, 'brand')


for (let key in phone) {                  
    console.log(`${key} : ${phone[key]}`)
}

console.log(descripter)


// NOTE: only forin() loop are directly applied on object and for remaining loop first 
// we convert the object into array and then applied


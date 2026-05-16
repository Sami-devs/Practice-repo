function createCounter(initialCount) {
    let count = initialCount

    function increment(value) {
        count += value
        console.log(`increment value ${value}, now count is ${count} `)
    }
    function decrement(value) {
        count -= value
        console.log(`decrement value ${value}, now count is ${count} `)

    }
    function reset() {
        count = 0
        console.log(`count is reset, so count is ${count} `)

    }
    function currentCount() {
       console.log(`the current count is ${count}`)
    }

    return {increment, decrement, reset, currentCount}
}
const Counter = createCounter(0)

Counter.increment(1)
Counter.increment(1)
Counter.decrement(1)
Counter.reset()
Counter.currentCount()
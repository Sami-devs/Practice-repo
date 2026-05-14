for (const [key, value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        console.log(key + ':' + value)
    }
}

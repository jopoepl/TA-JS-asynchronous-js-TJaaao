let first = new Promise((res, rej)=> {
    res(`John`)
}).then((val) => {
    return Promise.resolve(`Arya`)
}).then(val => {
    console.log(val)
    return new Promise((res) => {
        setTimeout(() => res(`Bran`), 2000)
    })
}).then(console.log)

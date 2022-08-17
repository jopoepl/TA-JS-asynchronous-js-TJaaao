let promise = new Promise((res, rej) => rej(`Rejected Promise`))
.catch((value) => console.log(value)).finally((val) => console.log(`Promise Setlled`))
console.log(promise)
1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js
let promise = new Promise((res, rej)=> {
    setTimeout(() => res(`promise resolved`), 1000)
}).then((value) => console.log(value))
```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
let promise = new Promise((res, rej) => rej(`promise rejected`))
console.log(promise)
promise..catch((value) => console.log(value))
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

```js
let promise = new Promise((res, rej) => rej(`Rejected Promise`))
promise.catch((value) => console.log(value)).finally((val) => console.log(`Promise Setlled`))
```


4. What will be the output of the code below.

```js
console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');

A
D
C
B
```

5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

```js
function wait(ms){
    return new Promise((res,rej) => {
        setTimeout(()=> res(`resolved`), ms)
    })
}
wait(1000).then(console.log)
```

6. Do the following:

- Create a new promise
- Resolve with 21
- Use `.then` and return adding `10` to the value you will get as parameter
- Use `.then` and return adding `100` to the value you will get as parameter
- Use `.then` and check if the value you get is greater than `100` throw new error with any message
- Catch the error using `.catch`

```js
let promise = new Promise((res, rej)=> {
    res(21)
})

promise.then((val)=> val + 10).then((val) => val + 100)
.then(val => {
    if(val > 100){
        throw new Error(`something went wrong`)
    }
})
.catch(console.log)
```

7. Do the following:

- Create a new promise
- Resolve the promise with `['A']`
- Use `.then` and concat `B` into the parameter and return
- Use `.then` and return and object like `{0: 'A', 1: 'B'}`
- Use `.then` and log the value

```js
let promise = new Promise((res, rej)=> {
    res([`A`])
}).then(arr => arr.concat(`B`))
.then((arr)=> Object.assign({}, arr))
.then(console.log)

```

8. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Chain `.then` on above and return `3` also check the value you get access to by logging
- Chain `.then` on above and return `4` also check the value you get access to by logging

```js
let first = new Promise((res, rej)=> {
    res(1)
})

first.then((val) => {
    console.log(val)
    return 2
})
.then((val) => {
    console.log(val)
    return 3
})
.then((val) => {
    console.log(val)
    return 4
})
```

9. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Use `.then` on `first` and return `3` also check the value you get access to by logging
- Use `.then` on `first` and return `4` also check the value you get access to by logging

```js
// Your code
```

10. Try to understand the difference between the problem 8 and 9. Write your observation.

In Q 8 were were chaining then on the first Promise and returning a new promise using the using of the previous resolved promise. 
In Q 9 we are just using multiple then on a single promise.


11. Do the following

- Create a promise and resolve it with `John`
- Use `.then` and return another promise that resolves with `Arya`
- Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
- Use `.then` to log the value

```js
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
```

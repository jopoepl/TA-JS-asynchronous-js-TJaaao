- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.
```JS
let promise1 = new Promise((res, rej) => {
  return setTimeout(() => res("One"), 1000)
})

let promise2 = new Promise((res, rej) => {
  return setTimeout(() => res("Two"), 2000)
})
let promise3 = new Promise((res, rej) => {
  return setTimeout(() => res("Three"), 3000)
})
let promise4 = new Promise((res, rej) => {
  return setTimeout(() => res("Four"), 4000)
})


Promise.all([promise1, promise2, promise3, promise4]).then(console.log)


```

- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.


```JS

let users = [`nnnkit`, `jopoepl`, `RahulMandyal1`, `prank7`, `octocat`];
let userData = Promise.all(users.map((user) => fetch(`https://api.github.com/users/${user}`).then(res => res.json())))

userData.then(info => info.map(user => console.log(`${user.name} : ${user.followers}`) ))


```



- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow
```JS
Promise.race([fetch(`https://aws.random.cat/meow`), fetch(`https://random.dog/woof.json`)]).then(console.log) //whichever is first is resolved first

```

- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

Promise.allSettled([one, two, three]).then(info => info.forEach(val => console.log(val.value)))

Promise.all([one, two, three]).then(info => console.log(info)) //it only takes resolved promises so it will throw an error

```

- What will be the output of the following code snippet? How much time will it take for the promise to resolve?

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log); //[Arya, Sam, Obj] 
//Because - If the iterable contains non-promise values, they will be ignored, but still counted in the returned promise array value!!!
```


// day 18 Promises

//Callback
const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback(false, skills)
    }, 1000)
}

const callback = (err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
}

//doSomething(callback)

// Promise constructor

const promise = new Promise((resolve, reject) => {
    const fruits = ['apple', 'orange', 'kiwi', 'grape']
    if (fruits.length > 0) {
        resolve(fruits)
    }
    else {
        reject('Something wrong has happened')
    }
})

promise
    .then(result => {
        console.log(result);
    }).catch(err => console.log(err))

// OUTPUT
// [ 'apple', 'orange', 'kiwi', 'grape' ]

const dopromise = new Promise((resolve, reject) => {
    const skills = ['CSS', 'HTML', 'JS']
    if (skills.includes('Node')) {
        resolve('FullStack Developer')
    }
    else {
        reject('Something went wrong has happened')
    }
})

dopromise
    .then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    });

//OUTPUT
// Something went wrong has happened


// Fetch API

// const url = 'https://restcountries.com/v2/all'

// fetch(url)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// }).catch(err => console.log(err))


// Async and Await

const square = async function (n) {
    return n * n
}

console.log(square(4));

// output :: Promise { 16 }

const cube = async function (n) {
    return n ** 3
}

// const value = await square(6)
// console.log(value);

// 36

const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.error(err)
    }
}
console.log('===== async and await')
fetchData()
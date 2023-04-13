// day-19 Closure

/**
JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.
 */
function outerFunction() {
    let count =0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}

const innerFunc = outerFunction();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

//OUTPUT
/**
1
2
3
 */

function outerFun() {
    let count =0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}


const innerFun = outerFun() 

console.log(innerFun.plusOne);
console.log(innerFun.minusOne);

//OUTPUT
/**
0
1
*/

//day-20 Writing clean codes

//variable
let firstName = 'Sharifa'
let lastName = 'shaikh'
let country = 'India'
let city = 'arcot'

const PI = Math.PI
const gravity = 9.81

//Arrays
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']

//Functions
const printFullName = (firstName, lastName) => firstName + ' ' + lastName

const square = (n) => n * n

const hexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = '#'
  let index
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return hexa
}

const showDateTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  const dateMonthYear = date + '.' + month + '.' + year
  const time = hours + ':' + minutes
  const fullTime = dateMonthYear + ' ' + time
  return fullTime
}

//Loops
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
let len = names.length;
for(let i = 0; i < len; i++){
    console.log(names[i].toUpperCase())
}
names.forEach((name) => name.toUpperCase())


//Objects
const person = {
  firstName: 'Sharifa',
  lastName: 'Shaikh',
  age: 21,
  country: 'India',
  city: 'Arcot',
  skills: ['HTML','CSS','JavaScript','Node','MongoDB','Python'],
  isMarried: true
}
for(const key in person) {
    console.log(key, person[key])
}

//Conditions
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}


let a = 5
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

//Classes
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const per = new Person('Sharifa','Shaikh');

console.log(per);
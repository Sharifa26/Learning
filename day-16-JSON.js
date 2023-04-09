//JSON- Javascript Object Notation

//Converting JSON to JavaScript Object
//parse()
//JSON.parse();

const FruitsText = `{
    "fruits":[
        {
            "name":"apple",
            "price":250,
            "quantity":"2Kg"
        },
        {
            "name":"Mango",
            "price":100,
            "quantity":"1Kg"
        },
        {
            "name":"Kiwi",
            "price":300,
            "quantity":"1Kg"
        }
    ]
}`
//PARSE -- will change the json to object
const fruitsObj = JSON.parse(FruitsText, undefined, 4)

console.log(fruitsObj);

/**OUTPUT
 {
  fruits: [
    { name: 'apple', price: 250, quantity: '2Kg' },
    { name: 'Mango', price: 100, quantity: '1Kg' },
    { name: 'Kiwi', price: 300, quantity: '1Kg' }
  ]
}
 */


//Using a reviver function with JSON.parse()
const format = JSON.parse(FruitsText, (key, value) => {

    let newValue =
        typeof value == 'string' && key != 'price' ?
            value.toUpperCase() : value
    return newValue
})

console.log(format);

/**OUTPUT
 {
  fruits: [
    { name: 'APPLE', price: 250, quantity: '2KG' },
    { name: 'MANGO', price: 100, quantity: '1KG' },
    { name: 'KIWI', price: 300, quantity: '1KG' }
  ]
}
 */


//Converting Object to JSON
/**
JSON.stringify(obj, replacer, space)
// json or text , the data
// reviver is an optional callback function
 */

const fruit = {
    Apple: {
        isAvailable: true,
        price: 250,
        quantity: '1kg'
    },
    Mango: {
        isAvailable: true,
        price: 300,
        quantity: '2kg'
    },
    Kiwi: {
        isAvailable: false,
        price: 400,
        quantity: '2kg'
    }
}

//STRINGIFY -- will change the object to json
const text = JSON.stringify(fruit, undefined, 1)
console.log(text);

/**OUTPUT
{
    "Apple": {
        "isAvailable": true,
        "price": 250,
        "quantity": "1kg"
    },
    "Mango": {
        "isAvailable": true,
        "price": 300,
        "quantity": "2kg"
    },
    "Kiwi": {
        "isAvailable": false,
        "price": 400,
        "quantity": "2kg"
    }
}
*/

//Using a Filter Array with JSON.stringify
const User = {
    firstName: 'Sharifa',
    lastName: 'Shaikh',
    country: 'India',
    city: 'Arcot',
    email: 'sharifa@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 21,
    isLoggedIn: true,
    points: 30
}

const user = JSON.stringify(User,['firstName','lastName','country','city','points'],5)
console.log(user);

/**OUTPUT
{
     "firstName": "Sharifa",
     "lastName": "Shaikh",
     "country": "India",
     "city": "Arcot",
     "points": 30
}
*/

//Exercises: Level 1
//1. Change skills array to JSON using JSON.stringify()
let gamesTxt = ['hockey','football','volleyball','criket','tennis','throwball']
const game = JSON.stringify(gamesTxt,undefined,4)
console.log(game);

//1. Stringify the age variable
let age = 250;
console.log(JSON.stringify(age));

//1. Stringify the isMarried variable
let isMarried = false
console.log(JSON.stringify(isMarried));

//1. Stringify the student object
//Exercises Level 2
//1. Stringify the students object with only firstName, lastName and skills properties

const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const stu = JSON.stringify(student,['firstName','lastName','skills'],4)
console.log(stu);


//Exercises Level 3
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`

// 1. Parse the *txt* JSON to object.

const text1 = JSON.parse(txt);
console.log(text1);

//2. Find the user who has many skills from the variable stored in *txt*.

let parsedSkill = JSON.parse(txt, ["skills"])
console.log(parsedSkill)
const { lightFormat } = require("date-fns");

let me = {
    name: 'sharifa',
    age: 21,
    gender: 'Female',
    languages: [
        'tamil',
        'urdu',
        'hindi',
        'english'
    ],
    isStudent: true,
    address: {
        street: 'jamalipura street',
        city: 'Arcot'
    }
};


console.log(me);

const copy = Object.assign({}, me);

console.log(copy);

const key = Object.keys(copy);
console.log(key);

const a = Object.keys(copy.address);
console.log(a);

const b = Object.entries(copy.address);
console.log(b);

console.log(copy.hasOwnProperty('age'));
console.log(copy.hasOwnProperty('Full'));


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

let max = 0;
let newPerson ;

for( const user of Object.keys(users)){
    if( users[user].skills.length > max){
        max = users[user].skills.length;
        newPerson = Object.assign({},users[user]);
    }
}

console.log(newPerson);

let logInCount =0;

for(const user of Object.keys(users)){
    if(users[user].points >= 50){
        logInCount++;
    }
}
console.log(logInCount);


let mern ;

for(const user of Object.values(users)){
    if(users[user].skills == 'MongoDB' && users[user].skills == 'Express' && users[user].skills == 'React' && users[user].skills == 'Node'){
        mern = users[user];
    }
}
console.log(mern);
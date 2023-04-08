//  Day 15 Classes 

class Fruits {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}
const fruits1 = new Fruits('apple', 180);
const fruits2 = new Fruits('banana', 40);
const fruits3 = new Fruits('mango', 120);
console.log(fruits1);
console.log(fruits2);
console.log(fruits3);

/** Fruits { name: undefined, price: undefined } */

// class Fruit{
//     constructor (name,price){
//         this.name=name
//         this.price=price
//     }
// }
// const fruit = new Fruit('apple',120);
// console.log(fruit);

/** Fruit { name: 'apple', price: 120 } */

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.score = 0
        this.skills = []
    }
    fullNamefun() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName;
    }
    getScore() {
        return this.score
    }
    getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
}

const person = new Person('sharifa', 'shaikh', 21)
console.log(person);
console.log(person.fullNamefun());
console.log(person.score);
console.log(person.skills);
console.log(person.getScore());
console.log(person.getSkills());

person.setScore = 3
person.setSkill = 'javascript'
person.setSkill = 'html'
person.setScore = 5

console.log(person.skills);
console.log(person.score);

//Inheritance
class Student extends Person {
    constructor(firstName, lastName, age, gender) {
        super(firstName, lastName, age)
        this.gender = gender
    }
    say() {
        console.log('I m a Child of the person');
    }
}

const student = new Student('sharifa', 'shaikh', 21, 'Female')
console.log(student.say());
console.log(student.fullNamefun());
console.log(student.gender);
student.setSkill = 'Css'
student.setSkill = 'Python'
student.setScore = 10
console.log(student);


//Exercise : level-1
class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
}

const animal = new Animal('cat', 1, 'white', 4)
console.log(animal);

class Cat extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs)
        this.gender = gender
    }
}

const cat = new Cat()
console.log(cat);

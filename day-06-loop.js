//console.log(countries)
//alert('Open the console and check if the countries has been loaded')

const countr = require('../data/countries');
let array = [1,2,3,4,5];
let newArr = [];

for(let i = 0; i<array.length ; i++){
    newArr.push(array[i] ** 2);
}
console.log(newArr);
let j = 0;

while( j < array.length){
    array.pop();
    console.log(array);
}

let number = ['sharifa','Rabiya','ghouse'];

/**Exercise --1**/
// for(let i=0;i<=10;i++){
//     console.log(i);
// }
// let k = 0;
// while(k <= 10){
//     console.log(k);
//     k++;
// }
// do{
//     console.log(k);
//     k++;
// }while(k < 5);

for(let i = 10; i>=0 ;i--){
    console.log(i);
}
let k=10
// while(k >=0){
//     console.log(k);
//     k--
// }

// do{
//     console.log(k);
//     k--;
// }while(k >=-1)

let n = 40;
for( let i=0;i<n;i++){
    console.log('@',i);
}

for(let i=0;i<8;i++){
    console.log('#'.repeat(i));
}

for(let i=0;i<=10;i++){
    console.log(i,'x',i,'=',(i*i));
}

for(let i=0;i<=10;i++){
    console.log(`${i}\t${i**2}\t${i**3}`);
}

let even =[];
let odd=[];
for(let i=0;i<=100;i++){
    if(i % 2 == 0){
        even.push(i);
    }
    if(i % 2 != 0){
        odd.push(i);
    }
}
console.log(even , odd);

// let prime =[];
// for(let i=0;i<=100;i++){
//     if()
// }
let sum =0;
for(let i=0;i<=100;i++){
    sum +=i;
}
console.log(sum);

let oddsum=0;
let evensum=0;

for(let i=0;i<=100;i++){
    if(i % 2 == 0){
        evensum +=i;
    }
    if(i % 2 != 0){
        oddsum +=i;
    }
}

console.log([evensum,oddsum]);

let ram =[];
for(let i=0;i<5;i++){
    ram.push(Math.floor(Math.random()*100));
}
console.log(ram);

let alpha = 'abcdefghigklmnopgrstuvwxyz';
let rom =[];
for(let i=0;i<9;i++){
    if( i % 2 == 0){
        rom.push(i);
    }
    else{
        rom.push(alpha[parseInt(Math.random() * 25)]);
    }
}

console.log(rom.join(''));

let words = '123456789abcdefghigklmnopgrstuvwxyz123456789';
let Ram =[];
let m = parseInt(Math.random() * words.length) % 16;

for(let i=0;i<n;i++){
    Ram.push((words[Math.floor(Math.random() * words.length)-1]));
}
console.log(Ram.join(''));

let rgb =[];
for(const color of '123'){
    var red = parseInt(Math.random() * 255);
    var green = parseInt(Math.random() * 255);
    var blue = parseInt(Math.random() * 255);
    rgb.push(red,green,blue);
}
console.log(`rgb(${red},${green},${blue})`);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Germany',
    'Hungary',
    'Japan',
    'Kenya'
  ]

let Cap =[];
for(const con of countries){
    Cap.push(con.toUpperCase());
}
console.log(Cap);

let len =[];
for(const con of countries){
    len.push(con.length);
}
console.log(len);

let three =[];
for(const con of Cap){
    three.push(con.slice(0,3))
}
console.log(three);

let All=[];
for(const al of Cap){
    let len = al.length;
    let the = al.slice(0,3);
    All.push([al,the,len])
}

console.log(All);

/** Q2*/
let Land =[];
for(const la of countries){
    if(la.includes('land')){
        Land.push(la);
    }
}
if(Land.length > 0){
    console.log(Land);
}
else{
    console.log(countries);
}

/** Q3*/
let IA =[];
for(const la of countries){
    if(la.endsWith('ia')){
        IA.push(la);
    }
}
if(IA.length > 0){
    console.log(IA);
}
else{
    console.log(countries);
}



/** Q4*/
let MAX = [];
for( const max of countries){
   MAX.push(max.length);
}
let max =  MAX.indexOf(Math.max(...MAX));
console.log(countries[max]);

/** Q5*/
let fiveArr = [];
for(const five of countries){
    if(five.length == 5){
        fiveArr.push(five)
    }
}
console.log(fiveArr);


/** Q6*/
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

let maximun =[];
for(const web of webTechs){
    maximun.push(web.length);
}
console.log(maximun);
let indexofweb = maximun.indexOf(Math.max(...maximun));

console.log(webTechs[indexofweb]);


/** Q7*/
let double=[];
for(const web of webTechs){
    double.push([web,web.length]);
}

console.log(double);


/** Q8*/
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

let mernArr =[];
for(const mern of mernStack){
    mernArr.push(mern.slice(0,1));
}
console.log(mernArr.join(''));

/** Q9*/

for(const tech of webTechs ){
    console.log(tech);
}

/** Q10*/
let fruits =['banana', 'orange', 'mango', 'lemon'];
let fruArr =[];

for(let i= fruits.length-1;i>=0;i--){
    fruArr.push(fruits[i]);
}
console.log(fruArr);


/*Exercises: Level 3*/

let newCount =[];
let arC = countr.countriess;
for(const con of arC){
    newCount.push(con);
}
console.log(newCount);

let sortCount = newCount.sort();

console.log(sortCount);

let sortTech = webTechs.sort();
let sortMern = mernStack.sort();

console.log(sortTech);
console.log(sortMern);

let landcountries = [];
for(const con of arC){
    if(con.includes('land')){
        landcountries.push(con)
    }
}

console.log(landcountries);

let maxCount =[];
for(const con of arC){
    maxCount.push(con.length);
}

let indexOfCountries = maxCount.indexOf(Math.max(...maxCount));

console.log(arC[indexOfCountries]);

let fourArr = [];
for(const con of arC){
    if(con.length == 4){
        fourArr.push(con)
    }
}

console.log(fourArr);
let twoArr = [];
for(const con of arC){
    if(con.length ==2 || con.length ==3){
        twoArr.push(con)
    }
}

console.log(twoArr);
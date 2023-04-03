// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

function sum(){
    let s = 0
    for(let i=0;i<arguments.length;i++){
        s +=arguments[i];
    }
    return s;
}

console.log(sum(10,23,45));

const arrow = (...args) =>{
    console.log(args);
}
let arr = [2,4,5,0]
console.log(arrow(arr));


const ano = function(){
    console.log('kndgsyusdghcsdvyvshhsvdsu');
}
console.log(ano());

const sq = function(n){
    return n * 100;
}
console.log(sq(2));


let sharifa = (function(n){
    return n*n
})(3)

console.log(sharifa);

let r = n =>{
  return n*n*n;
}

console.log(r(2)); 

const fruits =['apple','orange','grapes','kiwi','guava']


const change = arr =>{
    let newFru =[];
    for(const fru of arr){
        newFru.push(fru.toUpperCase());
    }
    return newFru;
}

console.log(change(fruits));

function nonrepeatingCharacter(s)
    {
        let arr = s.split('');
        let newArr = [...new Set(arr)];
       console.log(newArr);
        
    }

console.log(nonrepeatingCharacter('hello'));


var cal = (birthY , currentY) =>
    currentY - birthY;

console.log(cal(2001,2020));

var circle = (r)=>{
    var ans = (Math.PI * r * r).toFixed(2);
    return `Area Of Circle : ${ans} `
}
console.log(circle(5));

function showDateTime(){
    let now  = new Date ();

    var date = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();
    var hr = now.getHours();
    var min = now.getMinutes();
     
    return `${date}/${month+1}/${year} ${hr}:${month}`
}
console.log(showDateTime());

let removeItem = (arr, index) => {
    arr.splice(index, 1);
    return arr;
  }
console.log(removeItem([2,7,8,9],3));


function addUpto(num) {
    if(num == 0) return 0;
    else return num + addUpto(num-1);
  }

console.log(addUpto(5));


function generateIP () {
    let a = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    let c = parseInt(Math.random() * 255);
    let d = parseInt(Math.random() * 255);
    
    
    return `${a}.${b}.${c}.${d}`;
  }

  console.log(generateIP ());


  function macAddGenerator () {
    let arr = [];
    let alphanums = '0123456789ABCDEF';
    
    for(let i = 1; i <= 6; i++) {
      let id1 = Math.ceil(Math.random() * 15);
      let id2 = Math.ceil(Math.random() * 15);
      console.log(id1 , id2);
      console.log(alphanums[id1]);
      
      arr.push(alphanums[id1] + alphanums[id2]);
    }
    
    return arr.join(':');
  }

  console.log(macAddGenerator ());

  var number = prompt(('enter no.of Characters'));
  var ids = prompt(('enter no.of ids'));

  function generate(number,ids){
    let Char = '1234567890abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let iArr =[];
    for(let i = 0; i <ids; i++) {
        let cArr =[];
        for(let j = 0; j <number; j++) {
            let id1 = Math.ceil(Math.random() * Char.length) -1;
            cArr.push(Char[id1]);
        }
        iArr.push(cArr.join(''));
    }
    return iArr;
  }

  console.log(generate(number,ids));
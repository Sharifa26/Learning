
let web = ['css','html','java','react','php','javascript'];

//console.log(web);
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];

const backEnd = ['Node','Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);


ages.sort();
console.log(ages);
let min = Math.min(...ages);
let max = Math.max(...ages);
let min1 = ages[0];
let max1 = ages[ages.length-1];
console.log('Minimum =' , min , 'Maximum =' , max);
console.log('Minimum =' , min1 , 'Maximum =' , max1);

const avg = ages.reduce((a,b)=>{
    return a+b;
});

console.log('Average =',avg / ages.length);

let rang = (max - min);
console.log(rang);

Math.abs(min - avg) > Math.abs( max - avg) ? console.log(' left is position is changed') : console.log(' rigth is position is changed');

console.log(countries);
console.log(countries.length);
console.log(countries.slice(0,10));
let center = Math.floor((countries.length/2)-1);
console.log(countries.slice(center,center+1));
console.log(countries.indexOf('Lebanon'));

let even = [];
let odd = [];

function coun(countries){
    for(let i = 0 ; i < countries.length ;i++ ){

        if( countries[i] % 2 === 0){
            even.push(countries[i]);
        }
        if(countries[i] % 2 != 0){
            odd.push(countries[i]); 
        }
    }
    return even,odd;
}

console.log(coun(countries));


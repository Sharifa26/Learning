
let country = ['india' ,'china','nepal','america','korea','europe','thailand'];
console.log(country);

let msg = 'I Love to coding but sometimes i stuck at a point like in HTML, CSS, FUNCTIONS';

console.log(msg);
console.log(msg.length);

let msgArr = msg.split(/[,\s]+|[\s]/);
console.log(msgArr);

const shop = ['Egg','Milk','Cheese','Bread','Juice','Honey','Tea'];
console.log(shop);
shop.unshift('Meat')
console.log(shop);

if(!shop.includes('Sugar')){
    shop.push('Sugar');
    console.log(shop);
}
let allergy = true
let index = shop.indexOf('Honey')
console.log(index);

if(allergy){
    if(index > -1){
    shop.slice(shop.lastIndexOf('Honey'), 1);
    console.log(shop);
    }
}

shop[shop.indexOf('Tea')] = 'Green Tea';

console.log(shop);
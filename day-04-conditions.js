// this is your main.js script

//alert('Open the browser console whenever you work on JavaScript')


console.log('sharifa');
let numb = prompt('Enter a number');
let letter = /^[A-Za-z]+$/;
let symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

if(numb == ''){
    console.log(numb = prompt('please Enter a number' ));
}
else if(typeof numb != 'number'){
    console.log(prompt('Please enter a number not string or symbols'));
}
// if(numb.match(symbols)){
//     console.log(numb = prompt('please Enter a number Not Symbols' ));
//     if(numb == ''){
//         console.log(numb = prompt('please Enter a number' ));
//     }
//     if(numb.match(letter)){
//         console.log(numb = prompt('please Enter a number Not Alphabets' ));
//     }
// }
// if(numb.match(letter)){
//     console.log(numb = prompt('please Enter a number Not Alphabets' ));
//     if(numb == ''){
//         console.log(numb = prompt('please Enter a number' ));
//     }
//     if(numb.match(symbols)){
//         console.log(numb = prompt('please Enter a number Not Symbols' ));
//     }
// }
if(numb == 0){
    console.log(alert(`${numb}  is neither positive nor negative.`));
}
if(numb < 0 ) {
    console.log(alert(`${numb} is Negative`));
}
if(numb > 0){
    console.log(alert(`${numb}  is Positive`));
}

let weather = prompt('Enter the weather');

weather = weather.toLowerCase();
if(weather == 'sunny'){
     console.log(alert('Go out freely.'));
}
else if(weather == 'winter' || weather == 'cloudy' ){
    console.log(alert('It might be cold, you need a jacket.'));
}
else if(weather == 'rainy' || weather == 'heavy rain' ){
    console.log(alert('You need a rain coat.'));
}
else{
    console.log(alert('No need a rain coat.'));
}


let age = prompt('Enter your age');

if(age > 18){
    alert('You are old enough to drive.');
}
if(age < 18 ){
    alert( `You are left with ${18 - age} years to drive.`)
}
else {
    alert(' Please Enter your age')
}


//let month = prompt('Enter a month');
month = month.toLowerCase();

if( month == 'january' || month == 'march' || month == 'may' || month == 'july' || month == 'august' || month == 'october' || month == 'December'){
    alert(`${month} has 31 days.`)
}
else if (month == 'september' || month == 'april' || month == 'june' || month == 'november' ){
    alert(`${month}  has 30 days.`)
}
else if( month == 'february'){
    alert(`${month} has 28 days.`)
}
else{
    alert(`${month} this is not a month`)
}

let month = prompt('Enter month and year','2002/february');

let string = month.split('/');
// let year = month.slice(0,4)
// let mon = month.slice(5)

let year = Number(string[0]);
let mon =string[1].toLowerCase();

if(((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) && mon == 'february'){
   alert(`${mon} has 29 days.`)
}
else if( mon == 'february'){
    alert(`${mon} has 28 days.`)
}
else if( mon == 'january' || mon == 'march' || mon == 'may' || mon == 'july' || mon == 'august' || mon == 'october' || mon == 'December'){
    alert(`${mon} has 31 days.`)
}
else if (mon == 'september' || mon == 'april' || mon == 'june' || mon == 'november' ){
    alert(`${mon}  has 30 days.`)
}
else{
    alert(`${month} this is not in format`)
}


// Day 12
//Regular Expression

//without Flag
let pattern ='code'
let regExp = new RegExp(pattern);

//with Flag
let Flag = 'gi'
let regExp1 = new RegExp(pattern,Flag);
let regExp3 = new RegExp('code','gi');
let regExp2 = /code/gi;

const s = 'I love Code'
const p = /code/gi/**case sentetive**/
//test()
const res = p.test(s)

//match()
const result = s.match(p)

//search()
const res1 = s.search(p)
console.log(res);
console.log(res1);
console.log(result);

//replace()
const str = ' I love Javascript'
const matRep = str.replace(/javascript/g,'Python')
console.log(matRep);

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

const match = txt.replace(/%/g,'')
//console.log(match);

//Digits
const text = 'my birthday is on 26th may 2001'
const pat = /\d+/g

const mat = text.match(pat)
console.log(mat);//['26','2001']

//between Words{}
const t = 'my name is sharifa and i love coding ,i like your smile i m in 2023'
const pattern1 = /\b\w{4}\b/g
const ans = t.match(pattern1)
console.log(ans);//[ 'name', 'love', 'like', 'your', '2023' ]

/**
 const t = 'my name is sharifa and i love coding ,i like your smile i m in 2023'
const pattern1 = /\b[A-Za-z]{4}\b/g
const pattern = /\d{1,4}/g   // 1 to 4
const ans = t.match(pattern1)
console.log(ans);//[ 'name', 'love', 'like', 'your' ]
 */


//Exercise:1
/**
 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
 */

 let text1 = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
 const pat1 = /\d+/g
 const arr = text1.match(pat1);
 let sum =0
 for(let i =0;i<arr.length;i++){
    sum+=Number(arr[i]);
 }

 console.log('the total annual income:',sum,arr);

 /**
  1. Write a pattern which identify if a string is a valid JavaScript variable

    ```sh
    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True
    ```
  */

var text3='firstName'

function is_valid_variable(text3){
    let pat =/[fF]irst-[Nn]ame|[fF]irst_[Nn]ame|[fF]irst[Nn]ame/
    const ans = pat.test(text3)
    return ans
}
console.log(is_valid_variable(text3));


//Excersice:2

/**
 1. Write a function called *tenMostFrequentWords* which get the ten most frequent word from a string?

    ```js
        paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
        console.log(tenMostFrequentWords(paragraph))
    ```

    ```sh
        [
        {word:'love', count:6},
        {word:'you', count:5},
        {word:'can', count:3},
        {word:'what', count:2},
        {word:'teaching', count:2},
        {word:'not', count:2},
        {word:'else', count:2},
        {word:'do', count:2},
        {word:'I', count:2},
        {word:'which', count:1},
        {word:'to', count:1},
        {word:'the', count:1},
        {word:'something', count:1},
        {word:'if', count:1},
        {word:'give', count:1},
        {word:'develop',count:1},
        {word:'capabilities',count:1},
        {word:'application', count:1},
        {word:'an',count:1},
        {word:'all',count:1},
        {word:'Python',count:1},
        {word:'If',count:1}]
    ```

 */

var paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

words=[]
total=[]

function tenMostFrequentWords(paragraph){
    var replaced=paragraph.replace(/\./g,'');
    var arrOfPara = replaced.toString().split(' ');

    for(let i=0;i<arrOfPara.length;i++){
        if(!words.includes(arrOfPara[i])){
            words.push(arrOfPara[i]);
            let regExp = new RegExp(arrOfPara[i],'g')
            let match = paragraph.match(regExp);
            total.push({word:arrOfPara[i],count:match.length})
        }
    }
    return total;
}

console.log(tenMostFrequentWords(paragraph));

//Exercise:3
/**
 1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
  
  ```js
    1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
  
  ```js
    sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    console.log(cleanText(sentence))
   ```
   ```
 */

   sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;


cleanWords=[]
totalcount=[]
function cleanText(sentence){

var cleantxt = sentence.replace(/[@%;!&#$?]/g,'');
let replace = cleantxt.replace(/[\.,]/g,'');
let arrOfRep = replace.toString().split(' ');

for(let i=0;i<arrOfRep.length;i++){
    if(!cleanWords.includes(arrOfRep[i])){
        cleanWords.push(arrOfRep[i]);
        let pattern = new RegExp(arrOfRep[i],'g');
        let match = replace.match(pattern);
        totalcount.push([{word:arrOfRep[i],count:match.length}]);
    }
}
return totalcount;
}

console.log(cleanText(sentence));
   
//Day-13-console-object-methods

/** 
console.log()
console.warn()]
console.error()
console.table()
console.time()
console.info()
console.assert()
console.group()
console.count()
console.clear()
 */


// console.log();

console.log('30 days of learning');
console.log('%d %s of learning', 20, 'DAYS');

//css
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
)// log output green red and yellow text


//warn()(warning)
console.warn('This is a warning')

//error()
console.error('this is an error message');

//table()
const names = ['sharifa', 'shaikh', 'mohini', 'sachin', 'dhanraj']
console.table(names);

/**OUTPUT
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │ 'sharifa' │
│    1    │ 'shaikh'  │
│    2    │ 'mohini'  │
│    3    │ 'sachin'  │
│    4    │ 'dhanraj' │
└─────────┴───────────┘
 */

const people = {
  name: 'Sharifa',
  title: 'programmer',
  age: 21,
  country: 'India',
  city: 'Arcot'
}
console.table(people);

/**OUTPUT
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│  name   │  'Sharifa'   │
│  title  │ 'programmer' │
│   age   │      21      │
│ country │   'India'    │
│  city   │   'Arcot'    │
└─────────┴──────────────┘
 */

const countries = [
  ['asia', ['Finland', 'Helsinki']],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.table(countries)

/**
┌─────────┬──────────┬───────────────────────────┐
│ (index) │    0     │             1             │
├─────────┼──────────┼───────────────────────────┤
│    0    │  'asia'  │ [ 'Finland', 'Helsinki' ] │
│    1    │ 'Sweden' │        'Stockholm'        │
│    2    │ 'Norway' │          'Oslo'           │
└─────────┴──────────┴───────────────────────────┘
 */

const users = [
  {
    name: 'sharifa',
    age: 21,
    title: 'programmer'
  },
  {
    name: 'Deepali',
    age: 24,
    title: 'programmer'
  },
  {
    name: 'mohini',
    age: 27
  }
]

console.table(users);

/**
┌─────────┬───────────┬─────┬──────────────┐
│ (index) │   name    │ age │    title     │
├─────────┼───────────┼─────┼──────────────┤
│    0    │ 'sharifa' │ 21  │ 'programmer' │
│    1    │ 'Deepali' │ 24  │ 'programmer' │
│    2    │ 'mohini'  │ 27  │              │
└─────────┴───────────┴─────┴──────────────┘
 */

//time()
//timeEnd()
const countrie = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

console.time('Regular for loop')
for (let i = 0; i < countrie.length; i++) {
  console.log(countrie[i][0], countrie[i][1])
}
console.timeEnd('Regular for loop')

console.time('forEach loop')
countrie.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')


//info()
console.info('sharifa');

//assert()
console.assert(5 < 10, '5 is less than 10');
//no result

console.assert(5 > 10, '5 is less than 10');
//Assertion failed: 5 is less than 10

for (let i = 0; i <= 5; i++) {
  let msg = `${i} is not odd`
  console.log('this # is ' + i);
  console.assert(i % 2 != 0, msg)
}


//group()
console.group('People')
console.log(people);
console.log(users);
console.groupEnd()

/**
People
  [
    { name: 'sharifa', age: 21, title: 'programmer' },
    { name: 'Deepali', age: 24, title: 'programmer' },
    { name: 'mohini', age: 27 }
  ]
 */

//count()
const fun = () => {
  console.count('this function is called')
}

fun()
fun()
fun()
fun()
fun()
fun()
fun()
fun()

/**
this function is called: 1
this function is called: 2
this function is called: 3
this function is called: 4
this function is called: 5
this function is called: 6
this function is called: 7
this function is called: 8
 */


//clear()

console.clear();
//The console.clear() cleans the browser console.


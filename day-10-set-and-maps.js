const long = new Set();
console.log(long);

long.add('choco');
long.add('cookie');
long.add('apple');
long.add('candy');

console.log(long);

console.log(long.delete('cookie'));
console.log(long);

console.log(long.has('aaa'));
console.log(long.has('apple'));

long.clear();
console.log(long);


const count = new Map();

console.log(count);

count.set('apple', '160');
count.set('grape', '100');
count.set('banana', '40');

console.log(count);

console.log(count.get('apple'));

console.log(count.has('banana'));
console.log(count.has('kiwi'));


for (const c of count) {
    console.log(c);
}
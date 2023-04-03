

//console.log(countries)

let arr = [2,4,5,6,7,1,3,6,0]; 
let first = arr[0];
let middle = arr[Math.round((arr.length -1) / 2)];
let last = arr[arr.length-1];

console.log(first , middle , last);

let mixedDataType = ['sfdy',3,8,'gscsf',fruits =['apple'],4];
console.log(mixedDataType.length-1);

let IT = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM','Oracle','Amazon' ];

let upper = IT.map(x =>(x.toUpperCase()));
let lower = IT.map(x =>(x.toLowerCase()));
console.log(IT);
console.log(upper);
console.log(lower);


let Adding = IT.reduce((a,b)=>{
    return a+b;
});
console.log(Adding);

IT = IT.map(x =>(x.toLowerCase()));
let mat = 'facebook';
mat = mat.toLowerCase();
if (IT.includes(mat)){
    console.log(`${mat} is exists in  IT array`);
}
else{
    console.log(`${mat} is not exists in  IT array`);
}

function Double(IT){
    let array =[]; 
    for(let i = 0; i<IT.length;i++){
        if(IT[i].includes('oo')){
            array.push(IT[i]);
        }
    }
    return array;
}

console.log(Double(IT));
let sorting = IT.sort();
console.log(sorting);
console.log(sorting.reverse());
console.log(IT.slice(0,3));
console.log(IT.slice(IT.length-3));
let mid = Math.floor((IT.length)/2);
console.log(mid);

console.log(IT.slice(mid,mid+1));

console.log(IT.shift());
console.log(IT.pop());
console.log(IT);
while(IT.length > 0){
    IT.pop();
    console.log(IT);
}
console.log(IT);


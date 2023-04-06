let callback = (n) => {
    return n + 1;
   }
   
   function call(callback, n){
       return callback(n) * n;
   }
   
   console.log(call(callback, 6));
   
   const higherOrder = n => {
       const doSomething = m => {
         const doWhatEver = t => {
           return 2 * n + 3 * m + t
         }
         return doWhatEver
       }
       return doSomething
     }
     console.log(higherOrder(2)(3)(10))
   
   const numbers = [1, 2, 3, 4, 5]
   const sumArray = arr => {
     let sum = 0
     const callback = function(element) {
       sum += element
     }
     arr.forEach(callback)
     return sum
   
   }
   console.log(sumArray(numbers));
   
   
   function sayHi(){
       console.log('Hi!!!');
   }
   
   //console.log(setInterval(sayHi, 5000));
   
   
   const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook','djhdsuigfgdhcgydgvhc','sbhsgjdhdhgcjhchbsh'];
   
   let ans = names.find((name) => name.length > 8)
   console.log(ans);
   
   
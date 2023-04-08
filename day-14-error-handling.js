// Day-14 Error Handling

//try-catch-finally

try {
    // code that may throw an error
    } catch (err) {
    // code to be executed if an error occurs
    } finally {
    // code to be executed regardless of an error occurs or not
    }
    
    try {
    let lastName = 'Shaikh'
    let fullName = fistName + ' ' + lastName
    } catch (err) {
    console.log(err)
    }
    
    try {
    let lastName = 'Shaikh'
    let fullName = fistName + ' ' + lastName
    } catch (err) {
    console.log(err)
    } finally{
    console.log('It will run at any Case');
    }
    
    try {
    let lastName = 'Shaikh'
    let fullName = fistName + ' ' + lastName
    } catch (err) {
    console.log('Name of the error ::', err.name)
    console.log('Error message ::', err.message)
    } finally {
    console.log('In any case I will be executed')
    }
    
    //throw
    const throwErrorExample = () => {
        let message
        let x = prompt('Enter a number: ')
        try {
          if (x == '') throw 'empty'
          if (isNaN(x)) throw 'not a number'
          x = Number(x)
          if (x < 5) throw 'too low'
          if (x > 10) throw 'too high'
        } catch (err) {
          console.log(err)
        }
      }
      throwErrorExample();
    
      /** Types of Error */
      ReferenceError
      SyntaxError
      TypeError
    
// Fizzbuzz problem 
// Let's say we have 10 as _parameter_ for the fizzBuzz _function_

// Print all the numbers with the following rules:
// if the number is multiple of 3, print Fizz instead
// if the number is multiple of 5, print Buzz instead

// 1 to 10 we have:

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz


// Modulus example 6 % 3 == 0

function FizzBuzz(fbNum) {
    let count = 0;
    
    for (count = 0; count < fbNum;  ++count) {
        if (count % 3 == 0) {
            console.log("FIZZ")
        }
        else if
            (count % 5 == 0) {
            console.log("Buzz")
        } else {
            // what does this mean?
            // what is count here?
            console.log(count);
        } 

    }
}
return FizzBuzz(26);


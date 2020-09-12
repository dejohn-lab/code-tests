// fibonacci(position) -> value
// fibonacci(1) = 1
// fibonacci(2) = 1
// fibonacci(3) = fibonacci(2) + fibonacci(1)

// 1st position = 1
// 2nd position = 1
// n-th position = n-1 + n-2, example if position 3, position 2 + position 1, 1 + 1=2
// position 4 = position 3 + position 2, 2 + 1 = 3

// fibonacci(3) + fibonacci(2)

// fibonacci(3) = fibonacci(2) + fibonacci(1)
// fibonacci(4) = fibonacci(3) + fibonacci(2) = fibonacci(2) + fibonacci(1) + fibonacci(2) 

// results = [0]
// for p starting at 1, while it's less than position, ++p

// if p == 1
// then I add 1 to results
// if p == 2
// then I add 1 to results
// if p > 2
// results[p-1] + results[p-2] // p = 3 then p-1 = 2 and p-2 = 1 -> p by 3, 3-1=2, 3-2=1
//                                      results[p-1] = results[3-1] = results[2] = 1

function fibonacci(position) {
    let p1 = 1
    let p2 = 1
    let results = [0];
    for (p1 = 1; p1 < position + 1; ++p1) {
        if (p1 == 1)
            results.push(1)
        if (p1 == 2)
            results.push(1)
        if (p1 > 2) {
            results.push(results[p1 - 1] + results[p1 - 2])
        }
    }
    return results[position]

}

function fibonacci2(position) {
    // position 1 -> 1
    // position 2 -> 1
    // position 3 = fibonacci(2) + fibonacci2(1)

    if (position == 1 || position == 2) {
        return 1;
    }

    return fibonacci2(position-1) + fibonacci2(position-2)

}

console.log("got", fibonacci(1), "expected", 1);
console.log("got", fibonacci(2), "expected", 1);

console.log("got", fibonacci(3), "expected", 2);

console.log("got", fibonacci(100), "expected", 55);
console.log(fibonacci2(10))
// if (p1 > 2) {
//     // first i get the p1-1 value from the results
//     // then  i get the p1-2 value from the results
//     // then i add them up
//     // then ij add to results
    
//     let value = results[p1-1];
//     let secondValue = result[p2-1];

//     let calculation = results[p1 - 1] + results[p1 - 2];
//     results.push(calculation)
// }
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

// function FizzBuzz(fbNum) {
//     let count = 0;
    
//     for (count = 0; count < fbNum;  ++count) {
//         if (count % 3 == 0) {
//             console.log("FIZZ")
//         }
//         else if
//             (count % 5 == 0) {
//             console.log("Buzz")
//         }
//         if (count % 3 !== 0 && count % 5 !== 0) {
//             console.log(count)
//         }
//     }
// }
// return FizzBuzz(26);


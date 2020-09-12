
// First function is positiveOnly
// Argument is an array of numbers like [1, -1, -5, 10, 20]
// returns [1, 10, 20]

function positiveOnly(posti) {
    result = []
    for (count = 0; count < posti.length; ++count) {

        if (posti[count] > 0) {
            result.push(posti[count])
        }

    }
    return result
}

// Second function is squared
// Argument is an array of numbers like [1, -2, 10, 20]
// To square a number, say, squared of x =  x * x
// return [1, 4, 100, 400]
function squared(sqNUm) {
    result = []
    for (count = 0; count < sqNUm.length; ++count) {
        // if (sqNUm[count] > 0 ){ dont create undo problems by not reading specs

        result.push(sqNUm[count] * sqNUm[count])
        // }
    }
    return result
}

// Third function is positiveAndSquared
// Argument is an array of numbers like [1, -2, 10, 20]
// result [1, 100, 400]

function positiveAndSquared(number) {
    result = []
    console.log("number", number)
    result = positiveOnly(number)
    console.log("number", number, "result", result)
    result = squared(result)
    return result
}

console.log(positiveOnly([1, -2, -5, 10, 20]), [1, 10, 20])
console.log(squared([1, -2, 10, 20]), [1, 4, 100, 400])
console.log(positiveAndSquared([1, -2, 10, 20]), [1, 100, 400]) 
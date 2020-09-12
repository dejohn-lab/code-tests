function calStatement(CreditAndDebit){
    result = []
    BankAccount = 0;
    for (count = 0; count < CreditAndDebit.length; ++count){
        BankAccount = CreditAndDebit[count] + BankAccount
        result.push(BankAccount)
    }

    return result
}

console.log(calStatement([30, -10, 300]))
console.log(calStatement([500, 300, -300, 100, 20]))
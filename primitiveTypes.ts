console.log("Welcome to TS!!");

function add(n1: number, n2: number, resultPhrase: string, printResult:boolean){
    //java script way of validation which can be avoided by using ts
    /* if(typeof n1 !== "number" || typeof n2 !== "number"){
        throw new Error("Incorrect Input!");
    }  */
    const result = n1 + n2;

    if (printResult){
        console.log(resultPhrase + result);
    }else{
        return result;
    }
}

//const number1 = "5";
const num1: number = 5; //optional and redundant
let num2: number;
num2 = 6;

const number1 = 5;
const number2 = 2.6;
const resultPhrase = "Result is: ";
const printResult = true;

const result = add(number1, number2, resultPhrase, printResult);
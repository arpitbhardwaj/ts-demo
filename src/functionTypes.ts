function add1(n1: number, n2: number): number{
    return n1 + n2;
}

function printResult1(n: number): void{
    console.log("Result is :" + n);
}

function printResult2(n: number): undefined{
    console.log("Result is :" + n);
    return;
}

function add(n1: number, n2: number){
    return n1 + n2;
}

function addAndHandle(n1: number, n2: number, cb: (num1: number) => void){
    const result = n1 + n2;
    cb(result);
}

function printResult(n: number){
    console.log("Result is :" + n);
}

let combineValues1: Function;
let combineValues: (a: number, b:number) => number;

combineValues = add;
//combineValues = printResult;

printResult(add(2,3));
console.log(combineValues(8,8))
addAndHandle(10,20, (result) => {
    console.log(result);
})
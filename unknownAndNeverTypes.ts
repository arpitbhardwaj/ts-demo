let userInput1: unknown;
let userInput2: any;
let userName:string;

userInput2 = 5;

if(typeof userInput1 == "string"){
    userName = userInput1;
}

function generateError(message:string, code:number): never{
    throw{message:message, errorCode:code};
}

generateError("Ann Error Occurred", 50);
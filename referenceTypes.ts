/* const ADMIN = 0;
const READ_ONLY = 1;
const WRITE_ONLY = 2; */

enum Access {ADMIN, READ_ONLY, WRITE_ONLY};

enum Role {DEV = "Developer", ADV = "Advocate", DOC=100};

//Type inference
const person1 = {
    name: "Arpit",
    age: 32,
    hobbies: ["Sports", "Dev"],
    role: [2, "author"],
    access: Access.ADMIN
}

const person2:object = {
    name: "Arpit",
    age: 32,
}

//explicit type
const person:{
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "Arpit",
    age: 32,
    hobbies: ["Sports", "Dev"],
    role: [2, "author"]
}


console.log(person1.name);
console.log(person1.hobbies);
console.log(person1.role);

let actvities: string[];
actvities = ["Sports", "Dev"];

for (const activity of actvities){
    console.log(activity);
    console.log(activity.toUpperCase());
}

if(person1.access === Access.ADMIN){
    console.log("is admin");
}

let anyType: any;
anyType = "anyType";
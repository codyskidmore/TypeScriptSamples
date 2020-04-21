const isAdmin: boolean = true; // "true" causes type check warning
const age: number = 33;
const hexadecimal: number = 0xa00f;
const binary: number = 0b1100;
const myString: string = "my string"; // or 'my string'

// arrays
const numbers: number[] = [0,1,2]; // numbers.push("test"); type check error
numbers.push(3);

const strings: string[] = ["test", "test1"];

const numbers2: Array<number> = [0,1];

// Union type array
//const mixed: (number,string)[] =  [1,"test",2,"test2"]; This appears to not be valid syntax.
const mixed : Array<string|number> = [1,"test",3,"test2"];
mixed.push(2); // mixed.push(true) -- type check error.

// Tuple
let mix: [string, number] = ["test1", 0];
mix[0] = "test";
mix[1] = 1;
mix[1].toFixed()

// enum
enum UserType {SuperUser, Admin, Manager, User};

let userType: UserType = UserType.Admin;
console.log(UserType[userType]);
console.log(userType);

// any data type. Works but dangerous.
const data: any = "4";
const mix2: any[] = [1,'test', false];
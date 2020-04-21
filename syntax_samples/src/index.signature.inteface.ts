interface IUser {
    age: number;
    readonly name: string;
    address?: string; // makes property optional
    [property: string]: any;
}

let myUser: IUser = {
    name: "Bob",
    age: 33,
    test: 1, // -->> [property: string]..
    xyz: "asdlfjk" // -->> [property: string]..
}

console.log(myUser.test);
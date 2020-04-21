interface IUser {
    age: number,
    readonly name: string
    address?: string; // makes property optional
}

let myUser: IUser = {
    name: "Bob",
    age: 33
}

//myUser.name = "Name" read-only validation error


interface IGreet {
    (name: string, language: string) : string
}

let hello: IGreet = function(name: string, lang: string){
    if (lang === 'en')
    {
        return `Hello ${name}.`;
    }
    return `Hola ${name}.`;
}

console.log(hello('Bob', 'en'));
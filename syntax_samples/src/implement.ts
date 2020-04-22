interface IName {
    name: string;
}

class Person implements IName {
    public name: string;
    constructor(name: string){
        this.name = name;
    }

    greet(): string {
        return `Hello from ${this.name}`;
    }
}

let bob = new Person('Bob');
console.log(bob.name);
console.log(bob.greet());

class Person {
    private _name: string;
    constructor(name: string){
        this._name = name;
    }
    greet(): string {
        return `Hello from ${this._name}!`;
    }
}

console.log(new Person("Bob").greet());
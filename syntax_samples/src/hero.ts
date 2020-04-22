class Human {
    private readonly _name: string;
    constructor(name: string){
        this._name = name;
    }
    getName(): string {
        return this._name;
    }
    greet(): string {
        return `Hello from ${this._name}!`;
    }
}

class Hero extends Human {
    private _superPowers: string [] = [];

    constructor(name){
        super(name);
    }

    addSuperPower(name: string) {
        this._superPowers.push(name);
    }

    listSupePowers(): string[] {
        return this._superPowers;
    }
}

let batman: Hero = new Hero("Bruce");
batman.addSuperPower("money");
console.log(batman.listSupePowers());
console.log(batman.getName());
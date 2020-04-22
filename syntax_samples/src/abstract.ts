abstract class AbstractHuman {
    public name: string;
    public age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    abstract sayHelloTo(toName: string): void;
}

//const john: AbstractHuman = new AbstractHuman()  // validation error -- Cannot instantiate abstract class.

class PersonImp extends AbstractHuman {
    sayHelloTo(toName: string): void {
        console.log(`Hello ${toName} from ${this.name}!`);
    }
}

const person: PersonImp = new PersonImp('bob', 33);
person.sayHelloTo('ted');
console.log(`${PersonImp.toString()}`); // returns some meta infomration.

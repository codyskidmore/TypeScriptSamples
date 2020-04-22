import * as i from './interfaces';

// This time without inheritance
class Hero implements i.IMammal, i.IHero {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age =age;
    }
}
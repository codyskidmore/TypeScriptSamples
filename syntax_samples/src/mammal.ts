import {IMammal, IMove} from './interfaces'

export abstract class Mammal implements IMammal {
    name: string;
    age: number;
    abstract move: IMove;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }
}
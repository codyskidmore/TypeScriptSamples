import {IMammal, IMove} from './interfaces'

export abstract class Mammal implements IMammal {
    name: string;
    age: number;
    abstract move(): string;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }
}
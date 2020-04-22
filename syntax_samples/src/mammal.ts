import {IMammal} from './interfaces'

export abstract class Mammal implements IMammal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }

    abstract walk(): void;
}
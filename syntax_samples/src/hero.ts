import * as i from './interfaces';

// This time without inheritance and use some composition.
export class Hero implements i.IMammal, i.IHero, i.IMove {
    name: string;
    age: number;
    superPowers: string[];
    mover: i.IMove;

    getSuperPowers(): string[]{
        return this.superPowers;
    }
    addSuperPower(superPower: string): void {
        this.superPowers.push(superPower);
    }
    move(): string {
        return this.mover.move(this.name);
    }

    constructor(name: string, age: number, moveHandler: i.IMove){
        this.name = name;
        this.age =age;
        this.mover = moveHandler;
    }
}
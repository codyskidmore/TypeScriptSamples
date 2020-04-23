import { Mammal } from './mammal';
import * as i from './interfaces';
import { IMove } from './interfaces'

// Use some composition.
export class Human extends Mammal implements IMove {
    mover: i.IMove;
    constructor(name: string, age: number, moveHandler: i.IMove){
        super(name, age);
        this.mover = moveHandler;
    }
    move(): string {
        return this.mover.move(this.name);
    }
}
import {Mammal} from './mammal';
import * as i from './interfaces';

export class Human extends Mammal {
    move: i.IMove;
    constructor(name: string, age: number, moveHandler: i.IMove){
        super(name, age);
        this.move = moveHandler;
    }
}
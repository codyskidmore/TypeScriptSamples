import { IMove } from './interfaces';

export class WalkHander implements IMove {
    move(): string {
        return "Walking..";
    }
}
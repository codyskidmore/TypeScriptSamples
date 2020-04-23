import { IMove } from './interfaces';

export class WalkHander implements IMove {
    move(character: string): string {
        return `${character} is walking..`;
    }
}
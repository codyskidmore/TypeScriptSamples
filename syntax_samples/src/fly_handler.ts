import { IMove } from './interfaces';

export class FlyHandler implements IMove {
    move(character: string): string {
        return `${character} is flying..`;
    }
}
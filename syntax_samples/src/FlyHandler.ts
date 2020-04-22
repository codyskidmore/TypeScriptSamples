import { IMove } from './interfaces';

export class FlyHandler implements IMove {
    move(): string {
        return "flying ..";
    }
}
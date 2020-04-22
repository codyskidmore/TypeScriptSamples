import {Mammal} from './mammal';

export class Human extends Mammal {
    walk(): void {
        console.log(`${this.name} is walking..`);
    }
}
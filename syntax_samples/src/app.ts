import { picker } from './generics';
import { Suits } from './suits';
import { enumToArray } from './utils';

const numbers = [...Array(13).keys()];
let test: Suits[]  = enumToArray(Suits);

for (let i = 0; i < 9; i++) {
    console.log(`${picker<Suits>(numbers)} of ${picker<Suits>(test)}.`)
}
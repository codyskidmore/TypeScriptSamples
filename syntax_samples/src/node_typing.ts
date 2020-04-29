import * as fs from "fs";

const file: string = fs.readFileSync('./src/test.txt', 'utf-8');

console.log(file);
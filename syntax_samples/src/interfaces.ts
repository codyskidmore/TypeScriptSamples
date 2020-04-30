/* tslint:disable */ 
// Just an example to show TsLint is installed and working. 
// Without disabling, a "trailing space" warning is displayed. 
export interface IMammal {
    name: string;
    age: number;
}

export interface IHero {
    superPowers: string[];
    getSuperPowers(): string[];    
    addSuperPower(superPower: string): void;
}

export interface IMove {
    move(character: string): string;
}

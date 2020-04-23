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

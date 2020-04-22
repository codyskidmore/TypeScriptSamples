export interface IMammal {
    name: string;
    age: number;
}

export interface IHero {
    superpowers: string[];
    getSuperPowers(): string[];    
}

export interface IMove {
    move(): string;
}

interface IPerson {
    name: string;
}

interface IHero extends IPerson {
    superpower: string;
}

let batman: IHero = {
    name: "Bruce",
    superpower: "money"
}

// It is great that you can extend interfaces but 
// we should favor composition overf inheritance 
// unless there is a compelling reason to use 
// inheritance.
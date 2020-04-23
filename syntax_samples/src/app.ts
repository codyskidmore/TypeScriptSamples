import { Human } from "./human";
import { Hero } from "./hero";
import { WalkHander } from "./walk_handler";
import { FlyHandler } from "./fly_handler";

const person: Human = new Human('bob', 33, new WalkHander());
console.log(person.move());

const hero: Hero = new Hero('Superman', 27, new FlyHandler());
console.log(hero.move())
import * as _ from "underscore";

const users: { name: string, age: number }[] = [{
    name: "Jon",
    age: 33
},
{
    name: "Steve",
    age: 18
},
{
    name: "Kyle",
    age: 25
}
];

console.log(_.max(users, user => user.age));
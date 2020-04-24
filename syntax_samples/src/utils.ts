export function enumToArray(arg: any): any[]  {
    let enumValues:Array<string> = [];
    for(let value in arg) {
        if(typeof arg[value] === 'number') {
            enumValues.push(value);
        }
    }
    return enumValues;
}
// default parameter
function greetOptionalParam(name: string, punctuation?: string): string {
    return `Hello ${name}${punctuation}`;
}

// This actually outputs "undefined". It 
// allows the method to be called without 
// passing punctionation. Using a default 
// param seems a better option IMO.
console.log(greetOptionalParam('bob')); 
console.log(greetOptionalParam('bob','.'));

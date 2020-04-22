// default parameter
function greetDefaultParam(name: string, lang: string = 'en'): string {
    if (lang === 'en')
    {
        return `Hello ${name}.`;
    }
    return `Hola ${name}.`;
}

console.log(greetDefaultParam('bob'));
console.log(greetDefaultParam('bob','es'));
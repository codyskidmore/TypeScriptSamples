const isAdminRole: boolean = true;
const user: string = 'Cody';
let welcome: string = `Hello ${user}`;

if (!isAdminRole)
{
    welcome = `{$user} is not an admin`;
}

console.log(welcome);
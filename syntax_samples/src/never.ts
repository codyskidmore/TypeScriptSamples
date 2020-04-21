function error(): never {
    throw new Error('Error');
}

function fail(){
    error();
}


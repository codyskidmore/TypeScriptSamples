import * as _ from 'lodash';

class Store {
    store_id: number

    constructor(id: number)
    {
        this.store_id = id;
    }
}

let storeList: Array<Store> = new Array<Store>();

storeList.push(new Store(1));
storeList.push(new Store(3));
storeList.push(new Store(5));
storeList.push(new Store(2));
storeList.push(new Store(4));
storeList.push(new Store(2));
storeList.push(new Store(5));
storeList.push(new Store(5));
storeList.push(new Store(2));

let test = {};

// 1st we have to count sale instances.
storeList.forEach(function(store){
    // Cannot increment the count /w 
    // existing key unless we guarrantee
    // the key is initialzed.
    if (!_.has(test, store.store_id))
    {
        test[store.store_id] = 0;
    }
    test[store.store_id] += 1;
});

// 2nd we have to determine what store
// had the highest number of sales. You 
// can extend this to sales by price vs.
// the actual number of sales.
//
// The reason this code is slightly more
// complicated is it must account for ties.
let test2 = {};
for (let key in test)
{
    if (!_.has(test2, test[key]))
    {
        test2[test[key]] = [key];
        continue;
    }
    test2[test[key]].push(key);
}

console.log(test2); // Output: { '1': [ '1', '3', '4' ], '3': [ '2', '5' ] }

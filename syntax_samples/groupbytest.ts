import * as _ from 'lodash';

class Sale {
    store_id: number

    constructor(id: number)
    {
        this.store_id = id;
    }
}

let saleList: Array<Sale> = new Array<Sale>();

saleList.push(new Sale(1));
saleList.push(new Sale(3));
saleList.push(new Sale(5));
saleList.push(new Sale(2));
saleList.push(new Sale(4));
saleList.push(new Sale(2));
saleList.push(new Sale(5));
saleList.push(new Sale(5));
saleList.push(new Sale(2));

let saleCount = {};

// 1st we have to count sale instances.
saleList.forEach(function(sale){
    // Cannot increment the count /w 
    // existing key unless we guarrantee
    // the key is initialzed.
    if (!_.has(saleCount, sale.store_id))
    {
        saleCount[sale.store_id] = 0;
    }
    saleCount[sale.store_id] += 1;
});

// 2nd we have to determine what store
// had the highest number of sales. You 
// can extend this to sales by price vs.
// the actual number of sales.
//
// The reason this code is slightly more
// complicated is it must account for ties.
let storesBySaleCount = {};
for (let key in saleCount)
{
    if (!_.has(storesBySaleCount, saleCount[key]))
    {
        storesBySaleCount[saleCount[key]] = [key];
        continue;
    }
    storesBySaleCount[saleCount[key]].push(key);
}

// The output shows the number of sales a each store with that 
// number of sales (i.e. stores 2 & 5 had 3 sales, the rest had one sale).
// 
console.log(storesBySaleCount); // Output: { '1': [ '1', '3', '4' ], '3': [ '2', '5' ] }

// Get the actual store(s) with the highest number of sales..
const maxkey = _.max(Object.keys(storesBySaleCount));
console.log({salecount: maxkey, store_ids: storesBySaleCount[maxkey]}); // Output: { salecount: '3', store_ids: [ '2', '5' ] }

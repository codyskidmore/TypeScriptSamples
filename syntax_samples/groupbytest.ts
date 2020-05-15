import has from "https://deno.land/x/lodash/has.js";
import { max } from "https://deno.land/x/math@v1.1.0/mod.ts";

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

const saleCount: Record<number, number> = {}; //{ [key: number]: number } = {}; also works!

// 1st we have to count sale instances.
saleList.forEach(function(sale){
    // Cannot increment the count /w 
    // existing key unless we guarrantee
    // the key is initialzed.
    if (!has(saleCount, sale.store_id))
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
let storesBySaleCount: Record<number, number[]> = {}; //{ [key: number]: number[] } = {}; also works!
for (const key in saleCount)
{
    // Cannot figure out how to define key as number vs string
    const _key = parseInt(key); 
    if (!has(storesBySaleCount, saleCount[_key]))
    {
        storesBySaleCount[saleCount[key]] = [_key];
        continue;
    }
    storesBySaleCount[saleCount[key]].push(_key);
}

// The output shows the number of sales and each store with that
// number of sales (i.e. stores 2 & 5 had 3 sales, the rest had one sale).
// 
// Output: { '1': [ '1', '3', '4' ], '3': [ '2', '5' ] }
console.log(storesBySaleCount); 

// Get the actual store(s) with the highest number of sales..
// Output: { salecount: '3', store_ids: [ '2', '5' ] }
const maxkey: number = parseInt(max(Object.keys(storesBySaleCount)));
console.log({salecount: maxkey, store_ids: storesBySaleCount[maxkey]}); 

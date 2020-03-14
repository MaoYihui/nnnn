// function add(a){
//     if ()
//     return function add2 (b){
        
//         if (b==undefined){
//             return sum
//         }
//         sum+=b
//         return add2
//     }
// }

// let f = add()
// console.log(f(1)(2)(3)()) //6

// function minCount(string){
//     if (string.length <= 1){
//         return 0;
//     }

//     let map = new Map();

//     for (let s of string){
//         map.set(s, (map.get(s) || 0) + 1 );
//     }

//     freArray = [...map.values()];
//     console.log(freArray);
//     freArray.sort((a, b) => b - a);
//     console.log(freArray);
//     var count = 0;
//     var countSet = new Set();

//     for (let f of freArray){
//         if (!countSet.has(f)){
//             countSet.add(f);
//             continue;
//         }
//         console.log(countSet);
//         while(countSet.has(f)){
//             f--;
//             count++;
//         }
//         if( f!= 0){
//             countSet.add(f);
//         }
//     }

//     return count;
// }

// console.log(minCount(['a','a','a','a','b','b','b','b','c','c','c','c','d','d','e','e','f']));

function
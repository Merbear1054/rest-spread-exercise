/* Write an ES2015 Version */
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

//findMin
const findMin = (...args) => Math.min(...args);
// Example usage
console.log(findMin(1, 4, 12, -3)); // -3
console.log(findMin(1, -1));        // -1
console.log(findMin(3, 1));         // 1

//mergeObjects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
// Example usage
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
// Output: {a:1, b:2, c:3, d:4}

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(arg => arg * 2)];
// Example usage
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([2], 10, 4));      // [2, 20, 8]

//Slice and Dic/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {const removeRandom = (items) => {
    const index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
  };
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {const extend = (array1, array2) => [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {const removeKey = (obj, key) => {
    const { [key]: _, ...newObj } = obj; 
    return newObj;
  };
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {const update = (obj, key, val) => ({ ...obj, [key]: val });
}


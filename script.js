const handleDrink = (age) => {
    if (age < 14) {
        return "drink toddy";
    } else if (age < 18) {
        return "drink coke";
    } else if (age < 21) {
        return "drink beer";
    } else {
        return "drink whisky";
    }
};

const ages = [13, 17, 18, 20, 30, 40];
const whatDoTheyDrink = ages.map(handleDrink);


// ---------------------------------- //
// 👉 Find the smallest integer in an array
const numbers = [34, -345, -1, 100];

const findTheSmallerstIntInArray = (arr) => { 
    return Math.min(...arr);
}

const findTheLargestIntInArray = (arr) => { 
    return Math.max(...arr);
}

// ---------------------------------- //
const lettersInUpperCase = ['O', 'Q', 'R', 'S']; 
const letterInLowerCase = ['o', 'q', 'r', 's'];

const findMissingLetter = (array) => {
    let missingLetter = null;

    array.forEach((_, i) => {
        if (array[i + 1] && array[i + 1].charCodeAt(0) !== array[i].charCodeAt(0) + 1) {
            missingLetter = String.fromCharCode(array[i].charCodeAt(0) + 1);
        }
    });

    return missingLetter;
};


// ---------------------------------- //

const handleReverseWords = (str) => { 
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

const sentence = "This is an example!";

// ---------------------------------- //
const wordsArray = ["apple", "banana", "grape", "kiwi", "strawberry"]
const findTheLongestWord = (array) => { 
    return array.reduce((acc, curr) => curr.length > acc.length ? curr : acc, '');
}

// ---------------------------------- //
// const array = [1, [2, 3], [4, [5, 6], 7], 8]
const array = [[[1]], 2, [3, [4]]]
const handleFlattenArray = (arr) => {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(handleFlattenArray(curr)); 
        } else {
            return acc.concat(curr);
        }
    }, []);
};
const flattenArray = handleFlattenArray(array);
// ---------------------------------- //
const obj = {
    name: "Alice",
    info: {
      age: 25,
      location: {
        city: "New York",
        country: "USA"
      }
    },
    extra: {
      age: 30,
      hobbies: ["reading", "gaming"],
      city: "Jelesnia",
    }
  };

// ---------------------------------- //

const handleDeepSearch = (obj, search) => {
    const array = [];
    const arrayWithValuesAndKeys = Object.entries(obj);
  
    arrayWithValuesAndKeys.forEach(([key, value]) => {
      if (key === search) {
        return array.push(value);
      }
  
      if (typeof value === "object") {
        array.push(...handleDeepSearch(value, search));
      }
    });
  
    return array;
  };
  
  const test = handleDeepSearch(obj, "city");

// ---------------------------------- //

  const objAlice = {
    name: "Alice",
    age: 25,
    info: {
      city: "New York",
      country: "USA",
      details: {
        zip: 10001,
        phone: "123-456-789"
      }
    }
  };

// ---------------------------------- //

const callback = (key, value) => typeof value === "string";

const handleMeetTheConditions = (obj, callback) => {
    const objectWithoutString = Object.fromEntries(
      Object.entries(obj)
        .map(([key, value]) => [
          key,
          typeof value === "object"
            ? handleMeetTheConditions(value, callback)
            : value,
        ])
        .filter(
          ([key, value]) =>
            callback(key, value) ||
            (typeof value === "object" && Object.keys(value).length),
        ),
    );
  
    return objectWithoutString;
  };
  

 handleMeetTheConditions(objAlice, callback);

// ---------------------------------- //
const data = [1, 2, [3, 4, 2], [1, [5, 6, 3], 7], 8, 1];

const handleRemoveDuplicates = (array) => {
    return array.map((arr) => {
        if (Array.isArray(arr)) {
            return handleRemoveDuplicates(arr);
        } else {
            return arr;
        }
    }).filter((value, index, self) => self.indexOf(value) === index); 
}

// ---------------------------------- //
//  9️⃣
// 👉 Sum of Nested Arrays
// ------------------------------------//
const dataNumbers = [1, [2, 3], [4, [5, 6]], 7]; // Output: 28

const sumNestedArrays = (array) => {
    return array
      .flatMap((element) => {
        if (Array.isArray(element)) {
          return sumNestedArrays(element);
        } else {
          return element;
        }
      })
      .reduce((acc, currentValue) => acc + currentValue, 0);
  };

// ------------------------------------//
// 👉 Count Occurrences in a Nested Array
// ------------------------------------//
const numberInArray = [1, [2, 3], [4, [5, 6, 2], 7], 2]; // Output: 3

const countOccurrences = (array, placeInArray) => {
    return array.reduce((acc, element) => {
        if (Array.isArray(element)) {
            return acc + countOccurrences(element, placeInArray);
        } else {
            return acc + (element === placeInArray ? 1 : 0);
        }
    }, 0);
};


// ------------------------------------//
// 👉 1️⃣1️⃣ **Deep Clone an Object**
// ------------------------------------//
const objToClone = {
    a: 1,
    b: [2, 3],
    c: { d: 4, e: [5] }
  };

  const deepCloneObject = (obj) => {
    return Object.keys(obj).reduce((acc, element) => {
      if (Array.isArray(obj[element])) {
         acc[element] = obj[element].map((item) => item);
      } else if (typeof obj[element] === "object" && obj[element] !== null) {
         acc[element] = deepCloneObject(obj[element]);
      } else {
         acc[element] = obj[element];
      }
      return acc;
    }, {});
};

// ------------------------------------//
// 👉 1️⃣2️⃣ **Merge Two Sorted Arrays**
// ------------------------------------//
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const handleSortArrays = (arr1, arr2) => {
   return arr1.concat(arr2).sort()
}

// ------------------------------------//
// 👉 1️⃣3️⃣ **Remove Falsy Values**
// ------------------------------------//
const falsyValuesArray = [0, 1, [false, 2, [3, 4, undefined]]];

const removeAllFalsyValues = (falsyValuesArray) => {
    return falsyValuesArray.filter((value) => {
      if (Array.isArray(value)) {
        return removeAllFalsyValues(value);
      } else {
        return Boolean(value);
      }
    });
  };  

// console.log(removeAllFalsyValues(falsyValuesArray))

// ------------------------------------//
// 👉 1️⃣3️⃣ **Remove Falsy Values**
// ------------------------------------//
const company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };

const handleSumSalary= (obj) => {
    const array = [];
    const arrayWithValuesAndKeys = Object.entries(obj);
  
    arrayWithValuesAndKeys.forEach(([key, value]) => {
      if (key === 'salary') {
        return array.push(value);
      }
  
      if (typeof value === "object" && value !== null) {
       array.push(handleSumSalary(value));
      }
    });
  
    return array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      );
  };
  
  const test2 = handleSumSalary(company);

// ------------------------------ //
//   ### 1️⃣5️⃣ **Deep Merge with Value Retention**

const obj1 = { a: 1, b: { c: 2, d: 3 } };
const obj2 = { b: { d: 4, e: 5 }, f: 6 };

const deepMergeObj = (obj1, obj2) => {
    return [obj1, obj2].reduce((acc, curr) => {
        Object.keys(curr).forEach((key) => {
            if (typeof curr[key] === 'object' && !Array.isArray(curr[key]) && curr[key] !== null) {
                acc[key] = deepMergeObj(acc[key] || {}, curr[key]);
            } else if (acc[key] !== undefined) {
                acc[key] = [].concat(acc[key], curr[key]);
            } else {
                acc[key] = curr[key];
            }
        });
        return acc;
    }, {});
};
// ------------------------------ //
const occurArray = [1, [5, 1], 2, [[4, 1, 2], 5], 8, 3, [[4, 2]]];

const countOccurArray = (arr, number) => {
  const count = arr.reduce((acc, element) => {
    if (Array.isArray(element)) {
      return Number(acc) + countOccurArray(element, number);
    } else if (element === number) {
      return Number(acc) + 1;
    }
    return Number(acc);
  }, 0);

  return Number(count) > 0 ? Number(count) : [];
};

// ###  1️⃣8️⃣
const formatDuration = (seconds) => {
    if (!seconds) {
      return "now";
    }
  
    const time = {
      year: 31536000,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };
    const res = [];
  
    Object.keys(time).forEach((key) => {
      if (seconds >= time[key]) {
        const val = Math.floor(seconds / time[key]);
        res.push(val + " " + key + (val > 1 ? "s" : ""));
        seconds = seconds % time[key];
      }
    });
  
    return res.length > 1
      ? res.slice(0, -1).join(", ") + " and " + res[res.length - 1]
      : res[0];
  };

   // ---------------------------- //
//    ###  1️⃣8️⃣ **Alphabet psition**
   const input = "The sunset sets at twelve o' clock."
  
   const alphabetPosition = (text) => {
    return text
        .toLowerCase() 
        .split("") 
        .filter(char => /[a-z]/.test(char)) 
        .map(char => char.charCodeAt(0) - 96) 
        .join(" "); 
};

  console.log(alphabetPosition(input))
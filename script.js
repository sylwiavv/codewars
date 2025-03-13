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

  // ---------------------------------- //
// 👉 Count Occurrences in a Nested Array
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



// 👉 1️⃣1️⃣ **Deep Clone an Object**

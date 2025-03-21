# 🏆 JavaScript Coding Challenges

A collection of algorithmic challenges for different levels, from beginner to advanced. The tasks focus on recursion, array methods, and functional programming techniques.

---

## 🚀 Challenges

### 1️⃣ **What Do They Drink?** (8 kyu)
**Description:**  
Given an age, return what the person drinks.

**Rules:**
- Children under **14** → `"drink toddy"`
- Teens under **18** → `"drink coke"`
- Young adults under **21** → `"drink beer"`
- Adults **21+** → `"drink whisky"`

**Examples:**
```js
whatDoTheyDrink(13); // ➞ "drink toddy"
whatDoTheyDrink(17); // ➞ "drink coke"
whatDoTheyDrink(18); // ➞ "drink beer"
whatDoTheyDrink(30); // ➞ "drink whisky"
```

---

### 2️⃣ **Find the Smallest Integer** (7 kyu)
**Description:**  
Write a function that finds the smallest integer in an array.

**Example:**
```js
findSmallestInt([34, 15, 88, 2]);      // ➞ 2
findSmallestInt([34, -345, -1, 100]);  // ➞ -345
```

---

### 3️⃣ **Find the Missing Letter** (6 kyu)
**Description:**  
You are given an array of consecutive letters, but one letter is missing. Find and return the missing letter.

**Examples:**
```js
findMissingLetter(['a', 'b', 'c', 'd', 'f']); // ➞ 'e'
findMissingLetter(['O', 'Q', 'R', 'S']);       // ➞ 'P'
```

---

### 4️⃣ **Reverse Words in a Sentence** (6 kyu)
**Description:**  
Given a sentence, reverse the letters in each word while keeping the word order unchanged.

**Requirements:**
- Use **recursion** to reverse each word.
- Use **array methods** like `map()`, `split()`, `join()`.
- Avoid loops (`for`, `while`).

**Example:**
```js
reverseWords("Hello World"); // ➞ "olleH dlroW"
```

---

### 5️⃣ **Find the Longest String in an Array** (6 kyu)
**Description:**  
Given an array of strings, find the longest one. If multiple have the same length, return the first.

**Examples:**
```js
longestString(["apple", "banana", "grape", "kiwi", "strawberry"]);
// ➞ "strawberry"

longestString(["cat", "dog", "elephant", "bird"]);
// ➞ "elephant"
```

---

### 6️⃣ **Recursive Flattening of Nested Arrays** (5 kyu)
**Description:**  
Write a recursive function that flattens a nested array into a single-level array.

**Examples:**
```js
flatten([1, [2, 3], [4, [5, 6], 7], 8]);
// ➞ [1, 2, 3, 4, 5, 6, 7, 8]

flatten([[[1]], 2, [3, [4]]]);
// ➞ [1, 2, 3, 4]
```

---

### 7️⃣ **Deep Object Key Search** (4 kyu)
**Description:**  
Write a function `deepSearch(obj, key)` that searches a deeply nested object and returns an array of all values corresponding to the given key.

**Rules:**
- The object can have **any level of nesting**.
- The **same key** may appear multiple times.
- If the key is found multiple times, return **all values**.
- If the key is not found, return **`[]`**.

**Example:**
```js
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

deepSearch(obj, "age");     // ➞ [25, 30]
deepSearch(obj, "city");    // ➞ ["New York", "Jelesnia"]
deepSearch(obj, "hobbies"); // ➞ [["reading", "gaming"]]
deepSearch(obj, "gender");  // ➞ []
```

---

### 8️⃣ **Remove Duplicates in a Nested Array 🔄** (4 kyu)
**Description:**  
✅ Removes duplicate values from an array (including nested arrays)
✅ Preserves the array structure
✅ Uses only array methods and recursion (no let, no for)

**Example:**
```js
const data = [1, 2, [3, 4, 2], [1, [5, 6, 3], 7], 8, 1];

console.log(removeDuplicates(data));
// Output: [1, 2, [3, 4], [5, 6, 7], 8]
```

### 9️⃣ **Sum of Nested Arrays**
**Description:**  
 Write a function that sums up all the numbers in a nested array, including numbers inside subarrays. Use recursion and array methods like flatMap().

**Example:**
```js
const data = [1, [2, 3], [4, [5, 6]], 7];
console.log(sumNestedArrays(data)); // Output: 28
```
### 🔟 **Count Occurrences in a Nested Array**
**Description:** 
 Write a function that counts the number of occurrences of a specific value in a nested array.

**Example:**
```js
const data = [1, [2, 3], [4, [5, 6, 2], 7], 2];
console.log(countOccurrences(data, 2)); // Output: 3
```

### 1️⃣1️⃣ **Deep Clone an Object**
**Description:** 
Write a function that deep clones an object, including all nested objects. Use recursion and array methods like Object.keys() and reduce().

**Example:**
```js
const obj = {
  a: 1,
  b: [2, 3],
  c: { d: 4, e: [5] }
};

console.log(deepCloneObject(obj)); 
// Output: { a: 1, b: [2, 3], c: { d: 4, e: [5] } }
```

### 1️⃣2️⃣ **Merge Two Sorted Arrays**
**Description:** 
Given two sorted arrays, merge them into a single sorted array. Use recursion to solve it.

**Example:**
```js
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]
```

### 1️⃣3️⃣ **Remove Falsy Values**
**Description:** 
Description: Write a recursive function that removes all falsy values (false, null, 0, "", undefined, NaN) from a nested array.

**Example:**
```js
const data = [0, 1, [false, 2, [3, 4, undefined]]];
console.log(removeFalsyValues(data)); // Output: [1, 2, [3, 4]]
```
### 1️⃣4️⃣ **Salary**
**Description**
Write a function to get the sum of all salaries.
```js
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
```

### 1️⃣5️⃣ **Deep Merge with Value Retention**
**Description**
Write a function deepMerge(obj1, obj2) that merges two nested objects recursively. If a key exists in both objects:
* If the values are objects, merge them recursively.
* If the values are numbers, store both values in an array instead of overwriting them.
* If the values are arrays, concatenate them.

```js
const obj1 = { a: 1, b: { c: 2, d: 3 } };
const obj2 = { b: { d: 4, e: 5 }, f: 6 };

deepMerge(obj1, obj2);
// Output: { a: 1, b: { c: 2, d: [3, 4], e: 5 }, f: 6 }
```
👉 Here, instead of d: 3 being overwritten, it is stored as [3, 4].

### 🔹 Bonus Challenge:
* Extend the function to handle merging strings by concatenating them instead of overwriting.
* Ensure that objects, arrays, and primitive values are merged correctly.

// ------------------------------ //
###  1️⃣7️⃣ **Count Occurrences in a Nested Array**
**Description**
Count Occurrences in array, when number is not in array return []

```js 
const occurArray = [1, [5, 1], 2, [[4, 1, 2], 5], 8, 3, [[4, 2]]];
countOccurArray(arr, 2) // 3

function alphabetPosition(text) {
  
  return text;
}
```
// --------------------------- // 

###  1️⃣8️⃣ **Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.**

**Description**
The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

```js 
It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.
```

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

- The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

- A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

- Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

- A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

- A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// --------------------------- // 
###  1️⃣8️⃣ **Alphabet psition**
**Description**
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

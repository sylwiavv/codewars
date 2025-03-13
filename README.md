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
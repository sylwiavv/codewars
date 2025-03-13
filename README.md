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

## 🛠 **How to Use**
1. Clone this repository or copy the challenges.
2. Implement the functions in JavaScript.
3. Test them with different cases.
4. Optimize solutions using **functional programming**.

Happy coding! 🚀🔥


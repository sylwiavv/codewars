1. Drink
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

-----------------------------------------------------------

Task (7 kyu – Codewars)
👉 Find the smallest integer in an array

Problem:
Write a function that finds the smallest integer in an array of numbers.

Example:
findSmallestInt([34, 15, 88, 2]); // ➝ 2
findSmallestInt([34, -345, -1, 100]); // ➝ -345


-----------------------------------------------------------

"Find the missing letter"
Level: 6 kyu
Description:
You are given an array of characters, where each character is a lowercase letter. You need to find the letter that is missing from the sequence. The sequence will always contain one missing letter, and it will not contain any duplicates.

['a', 'b', 'c', 'd', 'f'] -> 'e'
['O', 'Q', 'R', 'S'] -> 'P'

// ------------------
Task: Reverse Words in a Sentence
Description:
Write a function that takes a sentence as input and returns the sentence with the words reversed. The words in the sentence should be reversed, but the order of the words in the sentence should remain the same.

For example:

Input: "Hello World"
Output: "olleH dlroW"
Requirements:

Use recursion to reverse each word in the sentence.
Use array methods like map(), join(), and split().
Avoid using loops like for or while.

// ---------------------- //

Task: Find the longest string in an array of strings
Description: Given an array of strings, write a function that finds the longest string in the array. If there are multiple strings of the same maximum length, return the one that appears first.

For example:

javascript
Copy
Edit
longestString(["apple", "banana", "grape", "kiwi", "strawberry"]) 
// Output: "strawberry"

longestString(["cat", "dog", "elephant", "bird"]) 
// Output: "elephant"

// ---------------------------------- //

Task: Recursive Flattening of Nested Arrays
Description: Write a function that takes a nested array (an array of arrays) and flattens it into a single array. The function should be implemented recursively, meaning you shouldn't use loops.

For example:

<!-- flatten([1, [2, 3], [4, [5, 6], 7], 8]) -->
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

<!-- flatten([[[1]], 2, [3, [4]]]) -->
// Output: [1, 2, 3, 4]

// ---------------------------------- //

Task: Deep Object Key Search (4 kyu)
Write a function deepSearch(obj, key) that searches a deeply nested object and returns all values corresponding to the given key.

Rules:

The object can have any level of nesting.
Keys may appear multiple times at different levels.
If the key appears multiple times, the function should return an array of all values.
If the key is not found, return an empty array [].

Examples
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

deepSearch(obj, "age"); // ➞ [25, 30]
deepSearch(obj, "city"); // ➞ ["New York"]
deepSearch(obj, "hobbies"); // ➞ [["reading", "gaming"]]
deepSearch(obj, "gender"); // ➞ []
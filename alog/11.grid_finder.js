/*
After catching your classroom students cheating before, you realize your students are getting craftier and hiding words in 2D grids of letters. The word may start anywhere in the grid, and consecutive letters can be either immediately below or immediately to the right of the previous letter.

Given a grid and a word, write a function that returns the location of the word in the grid as a list of coordinates. If there are multiple matches, return any one.

grid1 = [
    ['c', 'c', 't', 'n', 'a', 'x'],  
    ['c', 'c', 'a', 't', 'n', 't'],  
    ['a', 'c', 'n', 'n', 't', 't'],  
    ['t', 'n', 'i', 'i', 'p', 'p'],  
    ['a', 'o', 'o', 'o', 'a', 'a'],
    ['s', 'a', 'a', 'a', 'o', 'o'],
    ['k', 'a', 'i', 'o', 'k', 'i'],
]
word1 = "catnip"
word2 = "cccc"
word3 = "s"
word4 = "ant"
word5 = "aoi"
word6 = "ki"
word7 = "aaoo"
word8 = "ooo"

grid2 = [['a']]
word9 = "a"

find_word_location(grid1, word1) => [ (1, 1), (1, 2), (1, 3), (2, 3), (3, 3), (3, 4) ]
find_word_location(grid1, word2) =>
       [(0, 0), (1, 0), (1, 1), (2, 1)]
    OR [(0, 0), (0, 1), (1, 1), (2, 1)]
find_word_location(grid1, word3) => [(5, 0)]
find_word_location(grid1, word4) => [(0, 4), (1, 4), (2, 4)] OR [(0, 4), (1, 4), (1, 5)]
find_word_location(grid1, word5) => [(4, 5), (5, 5), (6, 5)]
find_word_location(grid1, word6) => [(6, 4), (6, 5)]
find_word_location(grid1, word7) => [(5, 2), (5, 3), (5, 4), (5, 5)]
find_word_location(grid1, word8) => [(4, 1), (4, 2), (4, 3)]
find_word_location(grid2, word9) => [(0, 0)]

Complexity analysis variables:

r = number of rows
c = number of columns
w = length of the word
*/

"use strict";

const grid = [
  ['c', 'c', 't', 'n', 'a', 'x'],
  ['c', 'c', 'a', 't', 'n', 't'],
  ['a', 'c', 'n', 'n', 't', 't'],
  ['t', 'n', 'i', 'i', 'p', 'p'],
  ['a', 'o', 'o', 'o', 'a', 'a'],
  ['s', 'a', 'a', 'a', 'o', 'o'],
  ['k', 'a', 'i', 'o', 'k', 'i']
];
const word1 = "catnip";
const word2 = "cccc";
const word3 = "s";
const word4 = "ant";
const word5 = "aoi";
const word6 = "ki";
const word7 = "aaoo";
const word8 = "ooo"; 

const grid2 = [['a']];
const word9 = "a";

function find_word_location(grid, word) {
  if(!word || word === '') {
    return null;
  }
  
  for (let i = 0 ; i < grid.length ; i++) {
    for (let j = 0 ; j < grid.length ; j++) {
      const result = findWord(grid, word, i, j, 0, []);
      if(result && result !== -1 && result.length === word.length) {
         return result;
      }
    }
  }
}

function findWord(grid1, word, rowIndex, columnIndex, wordIndex, output) {

  if (rowIndex >= grid1.length || columnIndex >= grid1[rowIndex].length) {
    return -1;
  }
  if (wordIndex >= word.length) {
    return output;
  }

  if (grid1[rowIndex][columnIndex] === word[wordIndex]) {
    output.push([rowIndex,columnIndex]);
    
    if(grid1[rowIndex][columnIndex+1] && grid1[rowIndex][columnIndex+1] === word[wordIndex+1]) {
        let result = findWord(grid1, word, rowIndex, columnIndex+1, wordIndex+1, output.slice());
        if(result && result !== -1 && result.length === word.length) {
            return result;
        }
    }
    if(grid1[rowIndex+1] && grid1[rowIndex+1][columnIndex] === word[wordIndex+1]) {
        let result = findWord(grid1, word, rowIndex+1, columnIndex, wordIndex+1, output.slice());
        if(result && result !== -1 && result.length === word.length) {
            return result;
        }
    }
    return output;
  } else {
    return -1;
  }
}

console.log(find_word_location(grid, word4))
// console.log(find_embedded_word(words, string2))
// console.log(find_embedded_word(words, string3))
// console.log(find_embedded_word(words, string4))
// console.log(find_embedded_word(words, string5))
// console.log(find_embedded_word(words, string6))
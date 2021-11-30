# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shashi61/lotide`

**Require it:**

`const _ = require('@shashi61/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*`head()  ` = Returns the first element of an arary;
*`tail() `  = Returns an array without first element ;
*`middle()`= Returns an array with middle elements;
*`without()` = Removes unwanted array elements and returns a new array;
*`takeUntil()`= Return a slice of an array with elements taken from the beginning;
*`map ()`= Maps through every element of an array 
*`letterPositions()` = Returns an object of letter positions;
*`findKeyByValue())` = Returns first key of given value;
*`findKey()` = Returns a key;
*`eqObjects()`= Returns true/false based on comparing objects;
*`eqArrays()` = Returns true/false based on comparing arrays;
*`countOnly()` = Return an object containing counts of input object
*`countLetters ()`= Return a count of each letters in a sentence

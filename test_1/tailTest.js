const tail = require("../tail");
const assertEqual = require("../assertEqual");
const result = tail([]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"

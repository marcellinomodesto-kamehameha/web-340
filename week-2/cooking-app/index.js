/**
 * Author: Marcellino Modesto
 * Date: 4/2/2026
 * File Name: index.js
 * Description: Main entry point for the cooking app CLI program
*/

// TODO: Import your module using require
const { createRecipe, setTimer, quit } = require('./recipes');


// TODO: Implement your CLI program here

console.log(createRecipe(["Sugar", "flour", "cocoa powder"]));
console.log(setTimer(30));
console.log(quit());


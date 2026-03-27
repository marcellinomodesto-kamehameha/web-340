/**
 * Author: Marcellino Modesto
 * Date: 3/27/2026
 * File Name: weight-converter.js
 * Description: This JavaScript file contains the logic for converting weights between different units.
*/

"use strict";

// TODO: Implement the weight conversion logic here

const args = process.argv.slice(2);

if (args.length === 0) {
  process.stderr.write('Usage: node weight-converter.js <pounds>\n');
  process.exit(1);
}

const pounds = parseFloat(args[0]);

if (isNaN(pounds)) {
  process.stderr.write('Input must be a number.\n');
  process.exit(1);
}

const kilograms = pounds * 0.45;
console.log(kilograms.toFixed(2));
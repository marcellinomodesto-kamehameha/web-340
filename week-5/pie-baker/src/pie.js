/**
 * Author: Marcellino Modesto
 * Date: 4/25/2026
 * File Name: pie.js
 * Description: Creating the bakePie function
 */
"use strict";


function bakePie(pieType, ingredients) {
  const essentials = ['flour', 'sugar', 'butter'];
  const missing = essentials.filter(item => !ingredients.includes(item));

  if (missing.length > 0) {
    console.warn(`Missing essential ingredient: ${missing[0]}`);
    process.exit(1);
  }

  return `Successfully baked a ${pieType} pie!`;
}

module.exports = bakePie;
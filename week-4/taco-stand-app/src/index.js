/**
 * Author: Marcellino Modesto
 * Date: 4/19/2026
 * File Name: index.js
 * Description: Creating the CLI Program
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object

tacoStand.on("serve", (customer) => {
  console.log(`Taco stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco stand handles rush: ${rush}`);

});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const argument = args.join(" ");

  // TODO: Handle the commands

  switch (command) {
    case "serve":
      tacoStand.serveCustomer(argument);
      break;

    case "prepare":
      tacoStand.prepareTaco(argument);
      break;

    case "rush":
      tacoStand.handleRush(argument);
      break;

    default:
      console.log("Unknown command. Use: serve, prepare, or rush.");
  }
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);
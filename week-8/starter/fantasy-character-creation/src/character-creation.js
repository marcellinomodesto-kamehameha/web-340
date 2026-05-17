"use strict";

const { readFile, writeFile } = require("fs").promises;
const path = require("path");

const CHARACTER_FILE = "character.json";

async function writeCharacter(character) {
  const filePath = path.join(__dirname, CHARACTER_FILE);

  const data = JSON.stringify(character, null, 2);

  await writeFile(filePath, data, "utf8");

  return true;
}

async function readCharacter(fileName = CHARACTER_FILE) {
  const filePath = path.join(__dirname, fileName);

  try {
    const data = await readFile(filePath, "utf8");

    return JSON.parse(data);
  } catch (error) {
    throw new Error("Character file does not exist");
  }
}

module.exports = {
  CHARACTER_FILE,
  writeCharacter,
  readCharacter
};
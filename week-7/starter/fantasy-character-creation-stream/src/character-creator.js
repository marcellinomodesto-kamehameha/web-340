"use strict";

const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options = {}) {
    super({ ...options, decodeStrings: false });


    this.currentCharacter = null;
  }

  _write(chunk, encoding, callback) {
    try {
      if (!chunk) {
        const err = new Error("Empty input.");
        this.emit("error", err);
        return callback(err);
      }

      const input = typeof chunk === "string"
        ? JSON.parse(chunk)
        : chunk;

       // First issue, stream stores data in a shared variable.
      this.currentCharacter = input;

      // Second issue, delays output asynchronously with setTimeout.
      setTimeout(() => {
        try {
          // Reused shared variable
          const formatted =
            `Class: ${this.currentCharacter.class}\n` +
            `Gender: ${this.currentCharacter.gender}\n` +
            `Fun Fact: ${this.currentCharacter.funFact}\n`;

          this.push(formatted);
          callback();
        } catch (err) {
          this.emit("error", err);
          callback(err);
        }
      }, 10);

    } catch (err) {
      this.emit("error", err);
      callback(err);
    }
  }

  _read() {}
}

module.exports = { CharacterCreator };
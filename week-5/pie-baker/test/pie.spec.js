/**
 * Author: Marcellino Modesto
 * Date: 4/25/2026
 * File Name: pie.spec.js
 * Description: Creating unit tests
 */

"use strict";

const bakePie = require("../src/pie");

describe('bakePie', () => {

  test('should return success message when all ingredients are provided', () => {
    const ingredients = ['flour', 'sugar', 'butter', 'apples'];
    const result = bakePie('apple', ingredients);
    expect(result).toBe('Successfully baked a apple pie!');
  });

  test('should bake pie even with extra ingredients', () => {
    const ingredients = ['flour', 'sugar', 'butter', 'cherries', 'salt'];
    const result = bakePie('cherry', ingredients);
    expect(result).toBe('Successfully baked a cherry pie!');
  });

  test('should call process.exit(1) and log a warning if essentials are missing', () => {
    const exitMock = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const logMock = jest.spyOn(console, 'warn').mockImplementation(() => {});

    const ingredients = ['apples'];
    bakePie('apple', ingredients);

    expect(logMock).toHaveBeenCalledWith('Missing essential ingredient: flour');
    expect(exitMock).toHaveBeenCalledWith(1);

    exitMock.mockRestore();
    logMock.mockRestore();
  });

});
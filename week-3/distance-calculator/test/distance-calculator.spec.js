const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');
// Call your test functions here

function testEarthToMars() {
  // TODO: Implement this function
  try {
    const result = calculateDistance(1, 1.52);
    assert.strictEqual(result, 0.52, 'Expected distance between Earth and Mars to be 0.52 AU');
    console.log('Test passed: testEarthToMars');
    return true;
  } catch (error) {
    console.error("Test failed: testEarthToMars - " + error.message );
    return false;
  }
}

function testVenusToEarth() {
    try {
        // Venus: 0.72 AU, Earth: 1 AU
        const result = calculateDistance(0.72, 1);
        assert.strictEqual(result, 0.28, 'Venus to Earth should be 0.28 AU');
        console.log('Test passed: testVenusToEarth');
        return true;
    } catch (error) {
        console.error("Test failed: testVenusToEarth - " + error.message);
        return false;
    }
}

function testMercuryToSun() {
    try {
        // Mercury: 0.39 AU, Sun: 0 AU
        const result = calculateDistance(0.39, 0);
        assert.strictEqual(result, 0.39, 'Mercury to Sun should be 0.39 AU');
        console.log('Test passed: testMercuryToSun');
        return true;
    } catch (error) {
        console.error(`Test failed testMercuryToSun: ${error.message}`);
        return false;
    }
}

// --- Run Tests ---
testEarthToMars();
testVenusToEarth();
testMercuryToSun();

// Call your test functions here
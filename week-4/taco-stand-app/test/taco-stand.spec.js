/**
 * Author: Marcellino Modesto
 * Date: 4/19/2026
 * File Name: taco-stand.spec.js
 * Description: Creating the unit tests
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods

function testServeCustomer() {
  try {
        let receivedCustomer = '';
        tacoStand.on('serve', (customer) => { receivedCustomer = customer; });
        tacoStand.serveCustomer('John');
        assert.strictEqual(receivedCustomer, 'John', 'Serve event did not pass correct customer');
        console.log("Passed testServeCustomer");
        return true;
    } catch (err) {
        console.error(`Failed testServeCustomer: ${err}`);
        return false;
    }
}

function testPrepareTaco() {
 try {
        let receivedTaco = '';
        tacoStand.on('prepare', (taco) => { receivedTaco = taco; });
        tacoStand.prepareTaco('beef');
        assert.strictEqual(receivedTaco, 'beef', 'Prepare event did not pass correct taco');
        console.log("Passed testPrepareTaco");
        return true;
    } catch (err) {
        console.error(`Failed testPrepareTaco: ${err}`);
        return false;
    }
}

function testHandleRush() {
    try {
        let receivedRush = '';
        tacoStand.on('rush', (rush) => { receivedRush = rush; });
        tacoStand.handleRush('lunch');
        assert.strictEqual(receivedRush, 'lunch', 'Rush event did not pass correct rush');
        console.log("Passed testHandleRush");
        return true;
    } catch (err) {
        console.error(`Failed testHandleRush: ${err}`);
        return false;
    }
}

testServeCustomer();
testPrepareTaco();
testHandleRush();

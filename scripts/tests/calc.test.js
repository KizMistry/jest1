/**
 * @jest-environment jsdom
 */

const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("Should return 42 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42);
        })
    });

    describe("Subtraction function", () => {

    });

    describe("Multiply function", () => {

    });

    describe("Division function", () => {

    });
})
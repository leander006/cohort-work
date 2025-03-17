"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../index");
(0, globals_1.describe)('sum module', () => {
    (0, globals_1.it)('adds 1 + 2 to equal 3', () => {
        (0, globals_1.expect)((0, index_1.sum)(1, 2)).toBe(3);
    });
    (0, globals_1.it)('sub 3 - 1 to equal 2', () => {
        (0, globals_1.expect)((0, index_1.sub)(3, 1)).toBe(2);
    });
    (0, globals_1.it)('mul 3 * 2 to equal 6', () => {
        (0, globals_1.expect)((0, index_1.mul)(3, 2)).toBe(6);
    });
    (0, globals_1.it)('div 6/3 to equal 2', () => {
        (0, globals_1.expect)((0, index_1.div)(6, 3)).toBe(2);
    });
});

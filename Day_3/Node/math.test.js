import test from 'node:test';
import assert from 'node:assert';

import { add } from './math.js';

test('add() should add two numbers', () => {
  assert.strictEqual(add(-8, 3), -5);
});
test('add() should add two numbers', () => {
  assert.strictEqual(add(0, 3), 3);
});
test('add() should add two numbers', () => {
  assert.strictEqual(add(2, 0), 2);
});
test('add() should add two numbers', () => {
  assert.strictEqual(add(2, -3), -1);
});
test('add() should add two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});
test('add() should add two numbers', () => {
  assert.strictEqual(add(-2, -3), -5);
});
test('add() should add two numbers', () => {
  assert.strictEqual(add(0,4), 4);
});
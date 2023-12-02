// import pickExistFields from '../src/index.js';
const pickExistFields = require('../dist/bundle.js');

describe('pickExistFields', () => {
  test('should return an object with existing fields when fields is an array', () => {
    const obj = { a: 1, b: 2, c: null, d: undefined };
    const fields = ['a', 'b', 'c', 'd', 'e'];
    const result = pickExistFields(obj, fields);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  test('should return an object with existing fields when fields is a string', () => {
    const obj = { a: 1, b: 2, c: null, d: undefined };
    const fields = 'a';
    const result = pickExistFields(obj, fields);
    expect(result).toEqual({ a: 1 });
  });

  test('should return the original object when fields is an empty array', () => {
    const obj = { a: 1, b: 2, c: null, d: undefined };
    const fields = [];
    const result = pickExistFields(obj, fields);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  test('should return the original object when fields is not provided', () => {
    const obj = { a: 1, b: 2, c: null, d: undefined };
    const result = pickExistFields(obj);
    expect(result).toEqual({ a: 1, b: 2 });
  });
});
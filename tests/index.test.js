//import pickExistFields from '../dist/bundle';
const pickExistFields = require('../dist/bundle');

describe('pickExistFields', () => {
  test('should return the same object if it is not a plain object', () => {
    const obj = 'not a plain object';
    expect(pickExistFields(obj, ['field1'])).toBe(obj);
  });

  test('should return an object with only the existing fields specified in the array', () => {
    const obj = { field1: 'value1', field2: 'value2', field3: null };
    expect(pickExistFields(obj, ['field1', 'field2'])).toEqual({ field1: 'value1', field2: 'value2' });
  });

  test('should return an object with only the existing field specified as a string', () => {
    const obj = { field1: 'value1', field2: 'value2', field3: null };
    expect(pickExistFields(obj, 'field1')).toEqual({ field1: 'value1' });
  });

  test('should return an empty object if no fields exist', () => {
    const obj = { field1: 'value1', field2: 'value2', field3: null };
    expect(pickExistFields(obj, ['field4'])).toEqual({});
  });

  test('should return an object with only the existing fields if no fields are specified', () => {
    const obj = { field1: 'value1', field2: 'value2', field3: null };
    expect(pickExistFields(obj)).toEqual({ field1: 'value1', field2: 'value2' });
  });
});
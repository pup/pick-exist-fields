# pick-exist-fields

Pick exist fields from an object

# pick-exist-fields

[![Build Status](https://travis-ci.org/campcc/pick-exist-fields.svg?branch=master)](https://travis-ci.org/campcc/pick-exist-fields)
![npm](https://img.shields.io/npm/v/pick-exist-fields)
![npm](https://img.shields.io/npm/dm/pick-exist-fields)

Utility function to select specified fields of an object, that the specified field value is not null and undefined

## Usage

```bash
npm install pick-exist-fields --save
```

```js
import pickExistFields from "pick-exist-fields";
var originalObj = { name: "npm", age: 18, career: "engineer", address: null };
pickExistFields(originalObj, "age"); // { age: 18 }
pickExistFields(originalObj, ["age", "career"]); // { age: 18, career: 'engineer' }
pickExistFields(originalObj); // { name: 'npm', age: 18, career: 'engineer' } address is not included
```

## API

### pickExistFields(obj: object, fields: string | string[]) : object

return a shallow copy which is composed of the picked fields.

if fields is not specified, return all exist fields

## build

```bash
npx rollup -c --bundleConfigAsCjs
```

## LICENSE

[MIT](https://choosealicense.com/licenses/mit/)

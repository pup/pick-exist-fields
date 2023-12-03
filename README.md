# pick-exist-fields

Pick exist fields from an object

![npm](https://img.shields.io/npm/v/pick-exist-fields)
![npm](https://img.shields.io/npm/dm/pick-exist-fields)

Utility function to select specified field's value is not null and undefined from an **plain object**。

If the object is not **plain object**, then return the object directly.

## Usage

```bash
npm install pick-exist-fields --save
```

```js
import pickExistFields from "pick-exist-fields";

const originalObj = { 
  name: "npm", 
  age: 18, 
  career: "engineer", 
  address: null
};

// { age: 18 }
pickExistFields(originalObj, "age"); 

// { age: 18, career: 'engineer' }
pickExistFields(originalObj, ["age", "career"]); 

// { name: 'npm', age: 18, career: 'engineer' } 
pickExistFields(originalObj); 
```

## API

### pickExistFields(obj: object, fields: string | string[]) : object

return a shallow copy which is composed of the picked fields, if the field value is not `null` and `undefined`.

if fields is not specified, then pick all `non-null`/`non-undefined` fields.

## LICENSE

[MIT](https://choosealicense.com/licenses/mit/)

function pickExistFields(obj, fields) {
  const isArray = Object.prototype.toString.call(fields) === "[object Array]" && fields.length > 0;
  const isString = typeof fields === "string" && fields.trim().length > 0;
  const result = {};
  if (isArray || isString) {
    const formatfields = isString ? [fields] : fields;
    formatfields.forEach((key) => {
      if (typeof obj[key] !== "undefined" && obj[key] !== null) {
        result[key] = obj[key];
      }
    });
    return formatfields.length ? result : { ...obj };
  }

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] !== "undefined" && obj[key] !== null) {
      result[key] = obj[key];
    }
  });
  return result;
}

export default pickExistFields;
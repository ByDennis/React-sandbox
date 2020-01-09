const isArray = value => {
  return {}.toString.call(value) === "[object Array]";
};
const isObject = value => {
  return {}.toString.call(value) !== "[object Object]";
};
const isString = value => {
  return {}.toString.call(value) === "[object String]";
};

/*
  object get path
  path is Array or string like: 'propery1.property2...' or ['property1', 'property2'...]
 */
const getPath = (obj, path) => {
  if (isObject(obj)) return undefined;
  if (isString(path)) path = path.split(".");
  if (isArray(path)) {
    return path.reduce((acc, current) => {
      return (acc || {})[current] || undefined;
    }, obj || {});
  }
  return undefined;
};

export { getPath, isArray, isObject, isString };

export const getPath = (obj, path) => {
  if ({}.toString.call(obj) !== "[object Object]") return undefined;
  if ({}.toString.call(path) === "[object String]") path = path.split(".");
  if ({}.toString.call(path) === "[object Array]") {
    return path.reduce((acc, current, index) => {
      console.log(acc, current, index);
      const _val = (acc || {})[current];
      return _val ? _val : undefined;
    }, obj || {});
  }
  return undefined;
};

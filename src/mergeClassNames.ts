/**
 * Merges class names, whatever the format. Can be a single class, a string with multiple classes
 * separated with space, an array of classes.
 *
 * @param {String|Array<String>|Boolean|Null} classNames
 */
type MixVal = string | boolean | null | Function;
type ArrayMixVal = Array<Array<string> | MixVal>;

const mergeClassNames = (...classNames: ArrayMixVal) => {
  const flatArray = (inputArray: ArrayMixVal) =>
    inputArray.reduce((arr: ArrayMixVal, item: Array<string> | MixVal) => {
      if (Array.isArray(item)) {
        return arr.concat(flatArray(item));
      }
      if (typeof item === 'string') {
        const splitItem = item.split(' ');
        if (splitItem.length > 1) {
          return arr.concat(splitItem);
        }
        return arr.concat(item);
      }
      return [...arr];
    }, []);
  const flatten = classNames.reduce((names: ArrayMixVal, name: Array<string> | MixVal) => {
    if (typeof name === 'string') {
      return names.concat(name);
    }
    if (Array.isArray(name)) {
      return names.concat(flatArray(name));
    }
    return [...names];
  }, []);
  return Array.from(new Set(flatten.filter((x: MixVal) => typeof x === 'string')))
    .join(' ')
    .trim();
};

export default mergeClassNames;

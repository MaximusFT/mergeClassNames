const mergeClassNames = (...classNames) => {
    const flatArray = (inputArray) => inputArray.reduce((arr, item) => {
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
    const flatten = classNames.reduce((names, name) => {
        if (typeof name === 'string') {
            return names.concat(name);
        }
        if (Array.isArray(name)) {
            return names.concat(flatArray(name));
        }
        return [...names];
    }, []);
    return Array.from(new Set(flatten.filter((x) => typeof x === 'string')))
        .join(' ')
        .trim();
};
export default mergeClassNames;
//# sourceMappingURL=mergeClassNames.js.map
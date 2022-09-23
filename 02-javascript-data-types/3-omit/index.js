/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export function omit(obj) {
    let args = Object.values(arguments).slice(1);
    let result = {};
    for (let key in obj) {
        if (!args.includes(key)) {
            result[key] = key; // !pvs! obj[key];
        }
    }
    return result;

}

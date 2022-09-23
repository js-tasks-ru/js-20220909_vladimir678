/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export function pick(obj) {
    let args = Object.values(arguments).slice(1);
    let result = {};
    for (let key in obj) {
        if (args.includes(key)) {
            result[key] = key; // !pvs! obj[key];
        }
    }
    return result;
}

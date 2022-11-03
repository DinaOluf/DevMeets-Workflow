/**
 * Sets a new key/value pair in localStorage
 * @param {string} key the name of the key to create
 * @param {object} obj the value for the key
 * @example
 * ```js
 * setItem("user", {
 * name: "Eric",
 * age: "27",
 * });
 * // Expect the function to set a new key "user" with a value of the provided object. The function stringifies the object before sending to localStorage.
 * ```
 */
export function setItem(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

/**
 * Gets a key from localStorage, with its values
 * @param {string} key the name of the key to get
 * @example
 * ```js
 * getItem("user");
 * // Expect the function to get the provided key and return the associated value with that key.
 * ```
 */
export function getItem(key) {
  const get = localStorage.getItem(key);

  if (!get) {
    return [];
  } else {
    try {
      return JSON.parse(get);
    } catch {
      return [];
    }
  }
}

/**
 * Updates a key/value pair in localStorage
 * @param {string} key the name of the key to update
 * @param {string} property the name of the value you want to update
 * @param {string} value the value you want to edit into the key/value pair
 * @example
 * ```js
 * updateItem("user", "name", "Mike");
 * // Expect the function to change the value of the property in the key you specify.
 * ```
 */
export function updateItem(key, property, value) {
  const obj = getItem(key);
  obj[property] = value;
  setItem(key, obj);
  return `Updated ${key} key with property ${property} and value ${value}!`;
}

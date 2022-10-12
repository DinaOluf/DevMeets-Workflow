// Set a new key/value pair
export function setItem(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

// Get a specific key
export function getItem(key) {
  const get = localStorage.getItem(key);

  if (!get) {
    return [];
  } else {
    try {
      return JSON.parse(get);
    } catch {
      return []
    }
  }
}

// Update an already set property
export function updateItem(key, property, value) {
  const obj = getItem(key);
  obj[property] = value;
  setItem(key, obj);
  return `Updated ${key} key with property ${property} and value ${value}!`;
}

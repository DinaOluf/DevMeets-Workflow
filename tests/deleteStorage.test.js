import { deleteStorage } from "../src/js/util/deleteStorage.mjs";

class localStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new localStorageMock();

describe("deleteStorage", () => {
  it("Removes array from localStorage", () => {
    const key = "token";
    const value = ["1234"];
    deleteStorage.save(key, value);
    expect(deleteStorage.load(key)).toEqual(value);
    deleteStorage.remove(key);
    expect(deleteStorage.load(key)).toEqual(undefined);
  });
});

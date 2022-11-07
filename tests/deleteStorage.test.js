/**
 * @jest-environment jsdom
 */

import { getItem } from "../src/js/user/getUserInfo.mjs";
import { setItem } from "../src/js/user/getUserInfo.mjs";
import { deleteStorage } from "../src/js/util/deleteStorage.mjs";

class localStorageMock {
  constructor() {
    this.store = {};
  }

  clearMock() {
    this.store = {};
  }

  getMockItem(key) {
    return this.store[key] || null;
  }

  setMockItem(key, value) {
    this.store[key] = String(value);
  }

  removeMockItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new localStorageMock();

describe("deleteStorage", () => {
  it("Removes array from localStorage", () => {
    const key = "token";
    const value = "111111111111111";
    setItem(key, value);
    expect(getItem(key)).toEqual(value);
    deleteStorage();
    expect(getItem(key)).toEqual([]);
  });
});

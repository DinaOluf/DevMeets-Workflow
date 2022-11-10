/**
 * @jest-environment jsdom
 */

import { deleteStorage } from "../src/js/util/deleteStorage.mjs";

describe("deleteStorage", () => {
  it("Adds array to localStorage", () => {
    const key = "Greeting";
    const value = "Hello!";
    localStorage.setItem(key, value);
    expect(localStorage.getItem(key)).toEqual(value);
  });

  it("Removes array from localStorage/Logs Out", () => {
    const key = "token";
    const value = "111111111111111";
    localStorage.setItem(key, value);
    expect(localStorage.getItem(key)).toEqual(value);
    deleteStorage();
    expect(localStorage.getItem(key)).toEqual(null);
  });
});

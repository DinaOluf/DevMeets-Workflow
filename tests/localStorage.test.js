/**
 * @jest-environment jsdom
 */

import { getItem } from "../src/js/user/getUserInfo.mjs";
import { setItem } from "../src/js/user/getUserInfo.mjs";
import { deleteStorage } from "../src/js/util/deleteStorage.mjs";

describe("localStorage", () => {
  it("Adds array to and gets it from localStorage", () => {
    const key = "Greeting";
    const value = "Hello!";
    setItem(key, value);
    expect(getItem(key)).toEqual(value);
  });

  it("Removes array from localStorage", () => {
    const key = "token";
    const value = "111111111111111";
    setItem(key, value);
    expect(getItem(key)).toEqual(value);
    deleteStorage();
    expect(getItem(key)).toEqual([]);
  });
});

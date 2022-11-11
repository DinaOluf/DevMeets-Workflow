/**
 * @jest-environment jsdom
 */

import { logIn } from "./pure-functions/logIn";

const jwt = "aLotOfNumbersAndLetters";
const email = "dina@noroff.no";
const password = "Password123";

const loginReturn = {
  name: "DinaO",
  email: "dina@noroff.no",
  banner: "https://i.postimg.cc/65bGby2Q/Monster-Hunter-Header.jpg",
  avatar: "https://i.postimg.cc/Vsr6sDdz/student-ID.jpg",
  accessToken: jwt,
};

/**
 * A mock fetch function that fetches successfully
 * @returns {Promise<object>} A promise that resolves to the test item
 * @example
 * global.fetch = jest.fn(() => fetchSuccess())
 */
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(loginReturn),
  });
}

/**
 * A mock fetch function that fetches unsuccessfully
 * @param {number} status The status code to return
 * @param {string} statusText The status text to return
 * @returns {Promise<object>} A promise that resolves to the test item
 * @example
 * global.fetch = jest.fn(() => fetchFailure(500, "Internal Server Error"))
 */
function fetchFailure(status = 404, statusText = "Not Found") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("logIn", () => {
  it("returns valid object when given right input", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const returned = await logIn(email, password);
    expect(returned).toEqual(loginReturn);
  });

  it("puts jwt in localStorage", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    await logIn(email, password);
    expect(localStorage.getItem("jwt")).toContain(jwt);
  });

  it("fails to log in user when given wrong input", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    const returned = await logIn(email, "password");
    expect(returned).toEqual(undefined);
  });
});

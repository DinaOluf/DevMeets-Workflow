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

describe("logIn", () => {
  it("Logs in user", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const returned = await logIn(email, password);
    expect(returned).toEqual(loginReturn);
  });
});

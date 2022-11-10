/**
 * @jest-environment jsdom
 */

import { handleLogin } from "../src/js/user/loginUser.mjs";

const emailInput = "dina@noroff.no";
const passwordInput = "Password123";

const loginSuccess = {
  name: "DinaO",
  email: "dina@noroff.no",
  banner: "https://i.postimg.cc/65bGby2Q/Monster-Hunter-Header.jpg",
  avatar: "https://i.postimg.cc/Vsr6sDdz/student-ID.jpg",
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE3LCJuYW1lIjoiRGluYU8iLCJlbWFpbCI6ImRpbmFAbm9yb2ZmLm5vIiwiYXZhdGFyIjoiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvVnNyNnNEZHovc3R1ZGVudC1JRC5qcGciLCJiYW5uZXIiOiJodHRwczovL2kucG9zdGltZy5jYy82NWJHYnkyUS9Nb25zdGVyLUh1bnRlci1IZWFkZXIuanBnIiwiaWF0IjoxNjY3OTExOTk2fQ.79FY-kjWmS-TRLOvudfCf6vH2QYGby072F2CTx2LdxU",
};

// Oliver and I looked at this together - issue raised to developers.
describe("handleLogin", () => {
  it("returns valid token when valid input", async () => {
    expect(localStorage.getItem("jwt")).toEqual(null);
    await handleLogin({
      preventDefault: () => {},
      target: { elements: [{ value: emailInput }, { value: passwordInput }] },
    });
    expect(localStorage.getItem("jwt")).toEqual(loginSuccess.accessToken);
  });
});

import { createPost } from "./pure-functions/postToAPI";

const jwt =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE3LCJuYW1lIjoiRGluYU8iLCJlbWFpbCI6ImRpbmFAbm9yb2ZmLm5vIiwiYXZhdGFyIjoiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvVnNyNnNEZHovc3R1ZGVudC1JRC5qcGciLCJiYW5uZXIiOiJodHRwczovL2kucG9zdGltZy5jYy82NWJHYnkyUS9Nb25zdGVyLUh1bnRlci1IZWFkZXIuanBnIiwiaWF0IjoxNjY3OTExOTk2fQ.79FY-kjWmS-TRLOvudfCf6vH2QYGby072F2CTx2LdxU";
const url = "https://nf-api.onrender.com/api/v1/social/posts";

const postObj = {
  title: "Unit Testing",
  body: "Not my favourite.",
  tags: ["unit-testing"],
  media: "",
};

const BAD_postObj = {
  title: "",
  body: "",
  tags: "",
  media: "",
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
    json: () => Promise.resolve(postObj),
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

describe("createPost", () => {
  it("creates item on the API", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const response = await createPost(jwt, url, postObj);
    expect(response).toEqual(postObj);
  });

  it("fails to create item on the API when HTTP 500 error", async () => {
    global.fetch = jest.fn(() => fetchFailure(500, "Internal Server Error"));
    const response = await createPost(jwt, url, postObj);
    expect(response).toEqual(undefined);
  });

  it("fails to create item on the API when input is invalid", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    const response = await createPost("", 2, BAD_postObj);
    expect(response).toEqual(undefined);
  });
});

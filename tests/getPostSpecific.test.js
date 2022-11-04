import { getSinglePost } from "../src/js/posts/getPostSpecific.mjs";

const TEST_OBJECT = { id: 1, name: "Testing" };

/**
 * A successful mock fetch function
 * @returns {Promise<object>} A promise that resolves to the test object
 * @example
 * global.fetch = jest.fn() => fetchSuccess())
 */
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(TEST_OBJECT),
  });
}

//Will not run due to "import statement outside of module" ------- HELP
describe("getSiglePost", () => {
  it("Returns valid object when successful", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const object = await getSinglePost(1);
    expect(object).toEqual(TEST_OBJECT);
  });
});

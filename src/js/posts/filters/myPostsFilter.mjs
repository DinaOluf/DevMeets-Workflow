import { getItem } from "../../user/getUserInfo.mjs";

const userInfo = getItem("user");

/**
 * Sort passed in array if it was posted by currently logged in user, which is taken from saved localStorage information
 * @param {array} array
 * @returns a sorted array
 * @example
 * ```js
 * const sortedArray = sortMyPosts(resultsArray);
 * // Expect array contents to now only contain posts created by logged in user
 * ```
 */
export function sortMyPosts(array) {
  const sortedArray = array.filter((item) => {
    if (item.author.name === userInfo.name) {
      return true;
    } else {
      return false;
    }
  });
  return sortedArray;
}

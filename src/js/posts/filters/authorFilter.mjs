/**
 * Sort passed in array by author, alphabetically, desc
 * @param {array} array
 * @returns a sorted array
 * @example
 * ```js
 * const sortedArray = sortAuthorDesc(resultsArray);
 * // Expect array contents to be sorted alphabetically, descending
 * ```
 */
export function sortAuthorDesc(array) {
  const sortedArray = array.sort(function (a, b) {
    const authorA = a.author.name.toLowerCase();
    const authorB = b.author.name.toLowerCase();
    if (authorA <= authorB) {
      return -1;
    }
    if (authorA >= authorB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}

/**
 * Sort passed in array by author, alphabetically, asc
 * @param {array} array
 * @returns a sorted array
 * @example
 * ```js
 * const sortedArray = sortAuthorAsc(resultsArray);
 * // Expect array contents to be sorted alphabetically, ascending
 * ```
 */
export function sortAuthorAsc(array) {
  const sortedArray = array.sort(function (a, b) {
    const authorA = a.author.name.toLowerCase();
    const authorB = b.author.name.toLowerCase();
    if (authorA >= authorB) {
      return -1;
    }
    if (authorA <= authorB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}

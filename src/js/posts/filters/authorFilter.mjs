// Sort passed in array by author, alphabetically, desc
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

// Sort passed in array by author, alphabetically, asc
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

// Sort passed in array by title, alphabetically, desc
export function sortTimeDesc(array) {
  const sortedArray = array.sort(function (a, b) {
    const timeA = a.updated.toLowerCase();
    const timeB = b.updated.toLowerCase();
    if (timeA <= timeB) {
      return -1;
    }
    if (timeA >= timeB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}

// Sort passed in array by title, alphabetically, asc
export function sortTimeAsc(array) {
  const sortedArray = array.sort(function (a, b) {
    const timeA = a.updated.toLowerCase();
    const timeB = b.updated.toLowerCase();
    if (timeA >= timeB) {
      return -1;
    }
    if (timeA <= timeB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}

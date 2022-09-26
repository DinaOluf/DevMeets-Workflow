// Sort passed in array by title, alphabetically, desc
export function sortTitleDesc(array) {
  const sortedArray = array.sort(function (a, b) {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA <= titleB) {
      return -1;
    }
    if (titleA >= titleB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}

// Sort passed in array by title, alphabetically, asc
export function sortTitleAsc(array) {
  const sortedArray = array.sort(function (a, b) {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA >= titleB) {
      return -1;
    }
    if (titleA <= titleB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}

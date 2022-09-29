// From https://stackoverflow.com/questions/5210376/how-to-get-first-and-last-day-of-the-current-week-in-javascript
const curr = new Date(); // get current date
const first = curr.getDate(); // First day is the day of the month
const last = first - curr.getDay() - 6; // last day is the first day - 6

// Convert to ISO strings since the API requires that
const firstDay = new Date(curr.setDate(first)).toISOString();
const lastDay = new Date(curr.setDate(last)).toISOString();

// Sort passed in array if it was posted today
export function sortWeek(array) {
  const sortedArray = array.filter((item) => {
    if (item.updated < firstDay && item.updated > lastDay) {
      return true;
    } else {
      return false;
    }
  });
  return sortedArray;
}

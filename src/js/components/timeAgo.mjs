import "/node_modules/dayjs/dayjs.min.js";

// Input date and return time since

export function timeAgo(date) {
  return dayjs(date).fromNow();
}

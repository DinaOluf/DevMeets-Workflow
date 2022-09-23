dayjs().format();
dayjs.extend(window.dayjs_plugin_relativeTime);

// Input date and return time since

export function timeAgo(date) {
  const timeFrom = dayjs().to(dayjs(date));
  return timeFrom;
}

// From Oliver Dipple
function cooldown(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

export async function timeout(time) {
  await cooldown(time);
  location.reload();
}

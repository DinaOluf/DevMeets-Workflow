// Clear localStorage
export function deleteStorage() {
  localStorage.clear();

  location.href = "/login.html";
}

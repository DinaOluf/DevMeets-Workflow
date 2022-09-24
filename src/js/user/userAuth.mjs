// Get the auth token

export function getUserAuth() {
  const jwt = localStorage.getItem("jwt");

  if (!jwt) {
    return [];
  } else {
    return JSON.parse(jwt);
  }
}

// Save and parse the auth token

export function saveAuth(token) {
  localStorage.setItem("jwt", JSON.stringify(token));
}

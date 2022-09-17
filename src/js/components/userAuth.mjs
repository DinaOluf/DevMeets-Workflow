// Get the auth token

export function getUserAuth() {
  const jwt = localStorage.getItem("jwt");

  if (!jwt) {
    return [];
  } else {
    return JSON.parse(jwt);
  }
}

// Set the auth token

export function handleAuth(token) {
  const currentAuth = getUserAuth();

  currentAuth.push(token);

  saveAuth(currentAuth);
}

// Save and parse the auth token

function saveAuth(token) {
  localStorage.setItem("jwt", JSON.stringify(token));
}

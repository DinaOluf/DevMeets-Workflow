// Get the auth token

export function getUserInfo() {
  const userInfo = localStorage.getItem("user");

  if (!userInfo) {
    return [];
  } else {
    return JSON.parse(userInfo);
  }
}

// Save and parse the auth token

export function saveUserInfo(token) {
  localStorage.setItem("user", JSON.stringify(token));
}

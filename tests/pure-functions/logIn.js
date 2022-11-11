// Could not find any functions without too many things happening in the same code, as we talked about.
// Made this to compensate. It's part of their code, but I removed excessive code so that it only does one thing; Logs In.

import { setItem } from "../../src/js/user/getUserInfo.mjs";

export async function logIn(email, password) {
  // Construct the data object which is to be sent to the API
  const dataObj = JSON.stringify({
    email: email.value,
    password: password.value,
  });

  // Send the data object to the API
  try {
    const response = await fetch(
      `https://nf-api.onrender.com/api/v1/social/auth/login`,
      {
        method: "POST",
        body: dataObj,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );

    const json = await response.json();

    if (json.message) {
      console.log(json.message);
    } else {
      // Save user info
      setItem("user", {
        name: json.name,
        email: json.email,
        avatar: json.avatar,
      });

      // Save authentication token
      const authToken = json.accessToken;
      setItem("jwt", authToken);
    }
    return json;
  } catch (error) {
    console.log(error);
  }
}

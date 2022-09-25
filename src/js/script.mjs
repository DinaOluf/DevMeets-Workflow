import { deleteStorage } from "./util/deleteStorage.mjs";

const logOut = document.querySelector(".log-out-button");

// Handle logout
logOut.addEventListener("click", deleteStorage);

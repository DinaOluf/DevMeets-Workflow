import { getUserPanelInfo } from "../user/profiles/profilePanel.mjs";
import { isUserLoggedIn } from "../user/isUserLoggedIn.mjs";
import { handleSearch } from "../components/searchbar.mjs";

// Check if user is logged in, if no, redirect
isUserLoggedIn();

// Run get user panel info function
getUserPanelInfo();

// Get the search value
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const search = params.get("search");

handleSearch(search);

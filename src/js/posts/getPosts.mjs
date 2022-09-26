import { options } from "../util/options.mjs";
import {
  API_BASE_URL,
  getPostUrlParams,
  getPostsContainer,
  errorContainer,
  filterTitle,
  filterAuthor,
  filterTime,
  filterToday,
  filterThisWeek,
  filterThisMonth,
  filterFollowing,
  filterMyPosts,
} from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { sortAuthorAsc, sortAuthorDesc } from "./filters/authorFilter.mjs";
import { sortTitleAsc, sortTitleDesc } from "./filters/titleFilter.mjs";
import { sortTimeAsc, sortTimeDesc } from "./filters/timeFilter.mjs";
import { sortToday } from "./filters/todayFilter.mjs";
import { sortWeek } from "./filters/weekFilter.mjs";
import { sortMonth } from "./filters/monthFilter.mjs";
import { sortMyPosts } from "./filters/myPostsFilter.mjs";
import { postTemplate } from "./postTemplate.mjs";

export async function getPosts(url, opt) {
  // GET API DATA

  const response = await fetch(url, opt);
  const data = await response.json();
  return data;
}

export async function displayPosts() {
  try {
    const data = await getPosts(`${API_BASE_URL}/api/v1/social/posts${getPostUrlParams}`, options);
    postTemplate(data);
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}

export async function displayPostsFilter() {
  try {
    const data = await getPosts(`${API_BASE_URL}/api/v1/social/posts${getPostUrlParams}`, options);
    postTemplate(data);

    let sortedData = [];

    filterTitle.addEventListener("click", () => {
      sortedData = sortTitleDesc(data);
      getPostsContainer.innerHTML = "";
      postTemplate(sortedData);
    });

    filterAuthor.addEventListener("click", () => {
      sortedData = sortAuthorDesc(data);
      getPostsContainer.innerHTML = "";
      postTemplate(sortedData);
    });

    filterTime.addEventListener("click", () => {
      sortedData = sortTimeDesc(data);
      getPostsContainer.innerHTML = "";
      postTemplate(sortedData);
    });

    filterToday.addEventListener("click", () => {
      sortedData = sortToday(data);
      getPostsContainer.innerHTML = "";
      postTemplate(sortedData);
    });

    filterThisWeek.addEventListener("click", () => {
      sortedData = sortWeek(data);
      let reSortedData = sortTimeAsc(sortedData);
      getPostsContainer.innerHTML = "";
      postTemplate(reSortedData);
    });

    filterThisMonth.addEventListener("click", () => {
      sortedData = sortMonth(data);
      let reSortedData = sortTimeAsc(sortedData);
      console.log(reSortedData);
      getPostsContainer.innerHTML = "";
      postTemplate(reSortedData);
    });

    filterMyPosts.addEventListener("click", () => {
      sortedData = sortMyPosts(data);
      let reSortedData = sortTimeAsc(sortedData);
      getPostsContainer.innerHTML = "";
      if (reSortedData.length === 0) {
        getPostsContainer.innerHTML = `<div class="error">You have no posts!</div>`;
      }
      postTemplate(reSortedData);
    });
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}

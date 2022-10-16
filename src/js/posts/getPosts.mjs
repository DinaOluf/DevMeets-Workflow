import { options } from "../util/options.mjs";
import {
  API_BASE_URL,
  API_POSTS_URL,
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
import { sortFollow } from "./filters/followFilter.mjs";

/**
 * Simple API fetch which returns the fetched data
 * @param {string} url url to fetch from
 * @param {object} opt options to append to the fetch, such as auth token, headers etc.
 * @returns data from API
 * @example
 * ```js
 * getPosts("https://nf-api.onrender.com/api/v1/social/posts", {
 *    method: "GET",
 *    headers: {
 *      Authorization: `Bearer ${jwt}`,
 *    },
 * };)
 * // Expect returned array with data from API
 * ```
 */
export async function getPosts(url, opt) {
  // GET API DATA
  const response = await fetch(url, opt);
  const data = await response.json();
  return data;
}

/**
 * Function to quickly display any data returned from the API. Pass in endpoint, parameters and options.
 * @param {string} endpoint specific API endpoint
 * @param {string} params additional query string parameters to use in the fetch
 * @param {object} opt options to append to the fetch, such as auth token, headers etc.
 * @returns displayed data in HTML form using the postTemplate function
 * @example
 * ```js
 * displayPosts("https://nf-api.onrender.com", "/api/v1/social/posts", {
 *    method: "GET",
 *    headers: {
 *      Authorization: `Bearer ${jwt}`,
 *    },
 * };)
 * // Expect returned HTML usable in containers in the DOM
 * ```
 */
export async function displayPosts(endpoint, params, opt) {
  try {
    const data = await getPosts(`${API_BASE_URL}${endpoint}${params}`, opt);
    postTemplate(data);
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}

/**
 * Get all posts (or at least the first 1000) and push them to a new array which can be used. Takes in no arguments.
 * @returns displayed data in HTML form using the postTemplate function
 * @example
 * ```js
 *  const allPosts = getAllPosts();
 *  container.innerHTML = postTemplate(allPosts);
 * // Expect returned array with every single post (up to 1000) from the API.
 * ```
 */
export async function getAllPosts() {
  try {
    // Initialize an empty array to push to
    let completeArray = [];

    // Create the loop to loop to the first 1000 posts ( increase 10 to get more )

    for (let i = 0; i < 10; i++) {
      // Set up the offset push which the API requires, increase by 100 for every loop iteration
      let offset = i * 100;

      // Fetch the data

      const response = await fetch(`${API_BASE_URL}${API_POSTS_URL}${getPostUrlParams}&offset=${offset}`, options);
      const data = await response.json();

      // Push the data to the new array
      completeArray.push(...data);
    }
    // Return the array so it can be used later
    return completeArray;
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}

/**
 * Function to display data together with the filters used on index page
 * @returns displayed data in HTML form using the postTemplate function and filtered based on user input
 * @example
 * ```js
 *  displayPostsFilter();
 * // Expect function to now be initialized and connected to HTML dropdown which displays filters.
 * ```
 */
export async function displayPostsFilter() {
  const filterFeedback = document.querySelector("#book-dropdown");

  try {
    const data = await getPosts(`${API_BASE_URL}${API_POSTS_URL}${getPostUrlParams}`, options);
    postTemplate(data);

    let sortedData = [];

    // Set up the click counter to handle double clicks
    let clickCounter = 0;

    // Sort by title
    filterTitle.addEventListener("click", () => {
      clickCounter++;
      if (clickCounter === 1) {
        sortedData = sortTitleDesc(data);
        getPostsContainer.innerHTML = "";
        filterFeedback.innerText = "Title Descending";
        postTemplate(sortedData);
      }
      if (clickCounter === 2) {
        sortedData = sortTitleAsc(data);
        getPostsContainer.innerHTML = "";
        filterFeedback.innerText = "Title Ascending";
        postTemplate(sortedData);
      }
      if (clickCounter > 2) {
        clickCounter = 1;
        sortedData = sortTitleDesc(data);
        getPostsContainer.innerHTML = "";
        filterFeedback.innerText = "Title Descending";
        postTemplate(sortedData);
      }
    });

    // Sort by author name
    filterAuthor.addEventListener("click", () => {
      clickCounter++;
      if (clickCounter === 1) {
        sortedData = sortAuthorDesc(data);
        getPostsContainer.innerHTML = "";
        filterFeedback.innerText = "Author Descending";
        postTemplate(sortedData);
      }
      if (clickCounter === 2) {
        sortedData = sortAuthorAsc(data);
        getPostsContainer.innerHTML = "";
        filterFeedback.innerText = "Author Ascending";
        postTemplate(sortedData);
      }
      if (clickCounter > 2) {
        clickCounter = 1;
        sortedData = sortAuthorDesc(data);
        getPostsContainer.innerHTML = "";
        filterFeedback.innerText = "Author Descending";
        postTemplate(sortedData);
      }
    });

    // Sort by time posted
    filterTime.addEventListener("click", () => {
      clickCounter++;
      if (clickCounter === 1) {
        sortedData = sortTimeDesc(data);
        getPostsContainer.innerHTML = "";
        filterFeedback.innerText = "Time Descending";
        postTemplate(sortedData);
      }
      if (clickCounter === 2) {
        sortedData = sortTimeAsc(data);
        getPostsContainer.innerHTML = "";
        filterFeedback.innerText = "Time Ascending";
        postTemplate(sortedData);
      }
      if (clickCounter > 2) {
        clickCounter = 1;
        sortedData = sortTimeDesc(data);
        getPostsContainer.innerHTML = "";
        filterFeedback.innerText = "Time Descending";
        postTemplate(sortedData);
      }
    });

    // Show only posts from today
    filterToday.addEventListener("click", () => {
      sortedData = sortToday(data);
      let reSortedData = sortTimeAsc(sortedData);
      getPostsContainer.innerHTML = "";
      filterFeedback.innerText = "Todays posts";
      postTemplate(reSortedData);
    });

    // Show only posts from this week
    filterThisWeek.addEventListener("click", () => {
      sortedData = sortWeek(data);
      let reSortedData = sortTimeAsc(sortedData);
      getPostsContainer.innerHTML = "";
      filterFeedback.innerText = "Posts this week";
      postTemplate(reSortedData);
    });

    // Show only posts from this month
    filterThisMonth.addEventListener("click", () => {
      sortedData = sortMonth(data);
      let reSortedData = sortTimeAsc(sortedData);
      getPostsContainer.innerHTML = "";
      filterFeedback.innerText = "Posts this month";
      postTemplate(reSortedData);
    });

    // Show only my own posts
    filterMyPosts.addEventListener("click", () => {
      sortedData = sortMyPosts(data);
      let reSortedData = sortTimeAsc(sortedData);
      getPostsContainer.innerHTML = "";
      filterFeedback.innerText = "My posts";
      if (reSortedData.length === 0) {
        getPostsContainer.innerHTML = `<div class="error">You have no posts!</div>`;
      }
      postTemplate(reSortedData);
    });

    // Show only my followers' posts
    filterFollowing.addEventListener("click", () => {
      sortedData = sortFollow(data);
      let reSortedData = sortTimeAsc(sortedData);
      getPostsContainer.innerHTML = "";
      filterFeedback.innerText = "Follower's posts";
      if (reSortedData.length === 0) {
        getPostsContainer.innerHTML = `<div class="error">Your followers have no posts!</div>`;
      }
      postTemplate(reSortedData);
    });
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}

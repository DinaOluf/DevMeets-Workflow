import { profileImageHandler } from "../../components/imageHandlers.mjs";
import { getAProfile } from "./getProfile.mjs";

/**
 * A function which starts building the following panel.
 * @param {array} data the data for building followers from, typically a user
 * @example
 * ```js
 * buildFollowingList(user.name)
 * // Expect the function to use the provided API user when building the panel
 * ```
 */
export async function buildFollowingList(data) {
  const followTitle = document.querySelector(".following-list-title");
  const followContent = document.querySelector(".following-list-content");

  const postCount = document.querySelector(".post-count");
  const followerCount = document.querySelector(".follower-count");
  const followingCount = document.querySelector(".following-count");

  // Get the API return and build it
  const user = await getAProfile(data.name);

  // Build the profile side panel
  followTitle.innerHTML = `(${user.following.length})`;
  followContent.innerHTML = followHtml(user.following);
  postCount.innerHTML = `${user.posts.length}`;
  followerCount.innerHTML = `${user.followers.length}`;
  followingCount.innerHTML = `${user.following.length}`;
}

/**
 * A function which builds the HTML for followers display
 * @param {array} array the list of followers to build the followers panel from
 * @example
 * ```js
 * followHtml(data);
 * // Expect the function to loop the provided array and display HTML
 * ```
 */
function followHtml(array) {
  let html = "";

  for (let i = 0; i < array.length; i++) {
    let userImage = profileImageHandler(array[i].avatar);
    if (i === 3) {
      break;
    }
    html += `<div class="px-3 pb-2 d-flex flex-row align-items-center mt-2">
                <img class="friends-image-attributes rounded-circle" src="${userImage}" alt="${array[i].name}'s avatar" />
                <div class="px-2">
                <p class="mb-0">${array[i].name}</p>
                <a href="./profile.html?name=${array[i].name}">View profile</a>
                </div>
            </div>`;
  }
  return html;
}

export const API_BASE_URL = "https://nf-api.onrender.com";
export const API_POSTS_URL = "/api/v1/social/posts";
export const API_PROFILE_URL = "/api/v1/social/profiles/";

export const getPostUrlParams = "?_author=true&_comments=true&reactions=true";
export const getProfileUrlParams = "?_posts=true&_following=true&_followers=true";

export const errorContainer = document.querySelector(".error-container");

export const filterTitle = document.querySelector(".filter-title");
export const filterAuthor = document.querySelector(".filter-author");
export const filterTime = document.querySelector(".filter-time");
export const filterToday = document.querySelector(".filter-today");
export const filterThisWeek = document.querySelector(".filter-this-week");
export const filterThisMonth = document.querySelector(".filter-this-month");
export const filterFollowing = document.querySelector(".filter-following");
export const filterMyPosts = document.querySelector(".filter-my-posts");

export const getPostsContainer = document.querySelector(".get-posts-container");
export const profileHeader = document.querySelector(".profile-header");

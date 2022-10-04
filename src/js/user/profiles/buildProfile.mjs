import { bannerImageHandler, profileImageHandler } from "/src/js/components/imageHandlers.mjs";
import { getUserInfo } from "../getUserInfo.mjs";

export function buildProfile(data) {
  const profileImage = document.querySelector(".profile-image");
  const editProfileImg = document.querySelector(".editable-profile-image");
  const userName = document.querySelectorAll(".profile-info-username");
  const bannerImage = document.querySelector(".banner-image");
  const follow = document.querySelector(".follow");

  // Check if an image is set for the user, if not set to default
  let userAvatar = profileImageHandler(data.avatar);

  // Add the image
  editProfileImg.innerHTML = `<img class="profile-image-attributes rounded-circle avatar-to-hover" src="${userAvatar}" alt="User Profile Image" />
                      <a href="#!" class="align-items-center me-3 profile-edit-avatar">&#9998; Edit</a>`;

  profileImage.innerHTML = `<img class="profile-image-attributes rounded-circle" src="${userAvatar}" alt="User Profile Image" />`;

  if (data.banner) {
    // Check if a banner image is set for the user, if not set to default
    let userBanner = bannerImageHandler(data.banner);

    // Add the image
    bannerImage.innerHTML = `<img class="img-fluid banner-to-hover" src="${userBanner}" alt="User Banner Image" />
                            <a href="#!" class="align-items-center me-3 profile-edit-banner">&#9998; Edit</a>`;
  }

  // Add the name
  userName.forEach((name) => {
    name.innerText = `${data.name}`;
  });

  // Set up eventListeners for hover states
  const avatarHover = document.querySelector(".avatar-to-hover");
  const editAvatar = document.querySelector(".profile-edit-avatar");

  console.log(avatarHover);
  console.log(editAvatar);

  avatarHover.addEventListener("mouseover", () => {
    editAvatar.style.display = "block";
  });

  const bannerHover = document.querySelector(".banner-to-hover");
  const editBanner = document.querySelector(".profile-edit-avatar");

  bannerHover.addEventListener("mouseover", () => {
    editBanner.style.display = "block";
  });

  // Check if name matches saved name in localStorage, if so change button to be edit instead of follow
  const userInfo = getUserInfo();

  if (data.name === userInfo.name) {
    follow.innerHTML = "Edit profile";
  }

  // Set eventListeners for both clicking follow and clicking edit
  if (follow.innerHTML === "Follow") {
    follow.addEventListener("click", () => {
      console.log("Following mode");
      // RUN FOLLOW CODE HERE LATER
    });
  }

  if (follow.innerHTML === "Edit profile") {
    follow.addEventListener("click", () => {
      console.log("Editing mode");
      // RUN EDIT PROFILE CODE HERE LATER
    });
  }
}

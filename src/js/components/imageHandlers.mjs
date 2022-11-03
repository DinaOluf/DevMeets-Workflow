// Handles profile images
/**
 * A image handler built specifically for this project. Takes in an image link provided by the user and checks if it matches any pre-defined values we want to replace with a dummy image.
 * @param {string} image the image provided by the user/API
 * @returns a filtered version of the image.
 * @example
 * ```js
 * const profileImage = profileImageHandler("https://img.service.com/avatar.jpg")
 * // Expect return "https://cdn.discordapp.com/attachments/931268688412299274/1026475050578231376/no-user-image-icon-0.jpg" because the provided URL matches the handle default case.
 * ```
 */
export function profileImageHandler(image) {
  let userProfileImage;

  if (!image || image === "string" || image === "https://img.service.com/avatar.jpg" || image === "") {
    userProfileImage = "https://cdn.discordapp.com/attachments/931268688412299274/1026475050578231376/no-user-image-icon-0.jpg";
  } else {
    userProfileImage = image;
  }
  return userProfileImage;
}

// Handles banner images
/**
 * A image handler built specifically for this project. Takes in an image link provided by the user and checks if it matches any pre-defined values we want to replace with a dummy image.
 * @param {string} image the image provided by the user/API
 * @returns a filtered version of the image.
 * @example
 * ```js
 * const bannerImg = bannerImageHandler("https://cdn.discordapp.com/attachments/729294434491170856/1027146979110817802/brooke-lark-M4E7X3z80PQ-unsplash_700px-test.jpg")
 * // Expect the provided URL to be returned as the banner image since it does not match the criteria in the conditional statement
 * ```
 */
export function bannerImageHandler(image) {
  let userBannerImage;

  if (!image || image === "string" || image === "https://img.service.com/banner.jpg" || image === "") {
    userBannerImage = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png";
  } else {
    userBannerImage = image;
  }
  return userBannerImage;
}

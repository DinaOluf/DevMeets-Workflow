// Could not find any functions without too many things happening in the same code, as we talked about.
// Made this to compensate. It's part of their code, but I removed excessive code so that it only does one thing; posts to the API.

export async function createPost(jwt, url, postObj) {
  // Construct the data object which is to be sent to the API
  let dataObj = {
    title: `${postObj.title.value}`,
    body: `${postObj.body.value}`,
    tags: `${postObj.tags.value}`,
    media: `${postObj.media.value}`,
  };

  if (!dataObj.media.value || dataObj.media.value === "") {
    delete dataObj.media;
  }

  // Send the data object to the API
  try {
    const response = await fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(dataObj),
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
  }
}

import { GIPHY_URL, GIPHY_KEY } from "../utils/const";

export const getGifs = async (gifName) => {
  try {
    const url = `${GIPHY_URL}/v1/gifs/search?api_key=${GIPHY_KEY}&q=${gifName}&limit=10`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

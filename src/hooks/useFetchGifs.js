import { useState, useEffect } from "react";
import { getGifs } from "../api/gifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchGifs = async () => {
    const response = await getGifs(category);

    if (!response) return;

    const { data } = response;
    const internalGifs = data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    }));
    setGifs(internalGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    searchGifs();
  }, []);

  return {
    gifs,
    isLoading,
  };
};

import React from "react";

export const GifGrid = ({ category }) => {
  const getGifts = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=spiderman&limit=10&api_key=OlTRLiAALlGDUP0RhT4ZrgpqXU0a7UwG";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifts = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifts);
  };

  getGifts();

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

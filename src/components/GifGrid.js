import React from "react";
import { useFectchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFectchGifs(category);
  console.log(loading);

  return (
    <>
      <h3 className="animate_animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate_animated animate__flash">Loading</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

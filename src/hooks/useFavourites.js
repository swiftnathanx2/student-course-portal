import { useState } from "react";

export function useFavourites() {
  const [favourites, setFavourites] = useState([]);

  const switchFavourite = (courseId) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.includes(courseId)) {
        return prevFavourites.filter((id) => id !== courseId);
      } else {
        return [...prevFavourites, courseId];
      }
    });
  };

  const isFavourite = (courseId) => {
    favourites.includes(courseId);
  };

  return { favourites, switchFavourite, isFavourite };
}

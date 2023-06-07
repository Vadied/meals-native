import { createContext, useContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

const FavouriteContextProvider = ({ children }) => {
  const [favouriteIds, setFavouriteIds] = useState();

  const addFavourite = (id) => {
    setFavouriteIds((old) => [id, ...old]);
  };
  const removeFavourite = (id) => {
    setFavouriteIds((old) => old.filter((oldId) => oldId !== id));
  };

  const value = {
    ids: favouriteIds,
    addFavourite,
    removeFavourite,
  };

  return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>;
};

export default FavouriteContextProvider;

export const useFavourites = () => useContext(FavouriteContext)
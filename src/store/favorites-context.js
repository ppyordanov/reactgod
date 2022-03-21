import { createContext, useState } from "react";


const FavoritesContext = createContext({
    favorites:[],
    count: 0,
    addFavorite: (fav) => {},
    removeFavorite: (id) => {},
    isFavorite: (id) => {}
});


export function FavoritesContextProvider(props){
    const [favs, setFavs] = useState([]);
    function addFav(fav){
        setFavs((prev) => {
            return prev.concat(fav)
        });
    }
    function removeFav(id){
        setFavs((prev) => {
            return prev.filter(meetup => meetup.id !== id)
        });
    }
    function isFav(id){
        return favs.some(meetup => meetup.id === id)
    }

    const context = {
        favorites: favs, 
        count: favs.length,
        addFavorite: addFav,
        removeFavorite: removeFav,
        isFavorite: isFav
    };


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext
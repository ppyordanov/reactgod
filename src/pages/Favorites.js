import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/layout/meetups/MeetupList";


function FavoritesPage(){
    const favContext = useContext(FavoritesContext);
    let content;

    if (favContext.count === 0){
        content = <p>No favorites yet.</p>
    } else{
        content = <MeetupList meetups={favContext.favorites} />
    }
    return <section>
        <h1>Favorites</h1>
        {content}
    </section>
}
export default FavoritesPage;
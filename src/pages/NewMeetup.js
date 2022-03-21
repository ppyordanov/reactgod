import {useNavigate} from "react-router-dom"
import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";

export const DB = "https://reactgod-b128d-default-rtdb.firebaseio.com/meetups.json"

function NewMeetupPage(){
    const nav = useNavigate();
    function addMeetup(metaData){
        fetch(DB, {method: "POST", body: JSON.stringify(metaData), headers: { "Content-Type": "application/json"}}).then(() => {
            nav("/");
        });

    }
    return <section>
        <h1>New Meetup</h1>
        <NewMeetupForm onAddition={addMeetup}/>
    </section>
}

export default NewMeetupPage;
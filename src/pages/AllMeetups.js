import MeetupList from "../components/layout/meetups/MeetupList";
import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";
import {useState, useEffect} from "react";
import DB from "./NewMeetup";


function AllMeetupsPage(){
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])
  useEffect(() => fetch("https://reactgod-b128d-default-rtdb.firebaseio.com/meetups.json").then((response) => {
    return response.json()
  }).then((data) => {
    const meetups = [];
    for (const key in data){
      const meetup={
          id: key,
          ...data[key]
      }
      meetups.push(meetup)
    };
    setIsLoading(false)
    setLoadedMeetups(meetups)
  }), []);

  if (isLoading) {
    <section><p>Loading...</p></section>
  }

    return <section>
    <h1>All Meetups</h1>
    c
    <MeetupList meetups={loadedMeetups} />
    </section>;
    
}

export default AllMeetupsPage;
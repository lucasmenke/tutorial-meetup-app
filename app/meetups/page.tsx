import MeetupList from "../MeetupList";
import { getAllEvents } from "../../data";

export default function MeetupsPage() {
  const meetups: Meetup[] = getAllEvents();

  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
}

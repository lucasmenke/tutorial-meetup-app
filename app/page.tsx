import MeetupList from "./MeetupList";
import { getAllFeaturedEvents } from "../data";

export default function HomePage() {
  const meetups: Meetup[] = getAllFeaturedEvents();

  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
}

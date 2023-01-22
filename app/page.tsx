import MeetupList from "./MeetupList";
import data from "../data.json";

export default function HomePage() {
  const meetups: Meetup[] = data.data;

  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
}

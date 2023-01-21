import MeetupList from "./MeetupList";
import meetupData from "../data.json";

export default function HomePage() {
  const meetups: Meetup[] = meetupData.data;

  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
}

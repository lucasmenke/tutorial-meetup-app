import MeetupList from "./MeetupList";
import json from "../data.json";

export default function HomePage() {
  const meetups: Meetup[] = json.data;

  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
}

import { getEventsByYearAndMonth } from "../../../data";
import MeetupList from "../../MeetupList";

type Props = {
  params: {
    slug: number[];
  };
};

export default function page({ params }: Props) {
  const meetups = getEventsByYearAndMonth(params.slug[0], params.slug[1]);

  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
}

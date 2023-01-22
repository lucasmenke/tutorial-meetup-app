import { notFound } from "next/navigation";
import data from "../../../data.json";

type Props = {
  params: {
    id: Number;
  };
};

export default function MeetupPage({ params }: Props) {
  const id = params.id;
  const meetup = data.data.find(meetup => meetup.id === id);
  console.log(meetup);
  console.log(data.data);
  console.log(id);
  if ((meetup && Object.entries(meetup).length === 0) || !meetup) {
    return notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
      {meetup.image && (
        <img
          src={meetup.image}
          alt={meetup.title}
          className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
        />
      )}
              <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {meetup.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">
              {meetup.time}{" "}{meetup.date}
            </h2>
            <h2 className="font-bold pl-4">{meetup.street}</h2>
            <p className="pl-4">{meetup.city}</p>
          </div>

          <p className="pt-4">{meetup.description}</p>
        </div>
    </div>
  );
}

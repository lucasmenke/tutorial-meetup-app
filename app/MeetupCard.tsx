import {
  UserGroupIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

type Props = {
  meetup: Meetup;
};

export default function MeetupCard({ meetup }: Props) {
  return (
    <div className="w-96 md:w-[600px] flex flex-row roundend-lg bg-slate-100 shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out">
      <div className="w-40 md:w-60 h-44 md:h-56 object-cover rounded-l-md shadow-sm overflow-hidden">
        {meetup.image === null ? (
          <UserGroupIcon className="h-8 w-8 cursor-pointer text-white bg-purple-700" />
        ) : (
          <img
            src={meetup.image}
            alt={meetup.title}
            className="w-40 md:w-60 h-44 md:h-56 object-cover"
          />
        )}
      </div>

      <div>
        <h2>{meetup.title}</h2>

        <div>
          <CalendarIcon className="h-8 w-8 text-gray-700" />
          <p className="font-bold">{meetup.date}</p>
        </div>

        <div>
          <MapPinIcon className="h-8 w-8 text-gray-700" />
          <div>
            <p>{meetup.street}</p>
            <p>{meetup.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

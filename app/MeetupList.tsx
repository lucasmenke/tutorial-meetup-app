import MeetupCard from "./MeetupCard"

type Props = {
  meetups: Meetup[];
}

export default function MeetupList({ meetups } : Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      {meetups.map((meetup) => (
        <MeetupCard key={meetup.title} meetup={meetup} />
      ))}
    </main>
  )
}

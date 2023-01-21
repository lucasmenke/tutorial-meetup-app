import { notFound } from "next/navigation";

type Props = {
    searchParams?: Meetup;
}

export default function MeetupPage({ searchParams }: Props) {
    if (
        (searchParams && Object.entries(searchParams).length === 0) ||
        !searchParams
      ) {
        return notFound();
      }
  
    return (
    <div>page</div>
  )
}

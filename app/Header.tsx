import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-1 items-center p-10">
        <Link href="/" prefetch={false}>
          <h1 className="text-4xl text-center font-serif">
            <span className="underline decoration-purple-700 decoration-4">MEETUP</span> Club
          </h1>
        </Link>
      </div>
    </header>
  );
}
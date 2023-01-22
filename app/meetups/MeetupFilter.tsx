export default function MeetupFilter() {
  return (
    <div className="flex flex-row justify-evenly w-80 md:w-[600px] m-auto">
      <div>
        <span className="m-4">Jahr</span>
        <select className="">
          <option>2023</option>
          <option>2024</option>
        </select>
      </div>
      <div>
        <span className="m-4">Monat</span>
        <select className="">
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </div>
      <button>Find Meetups</button>
    </div>
  );
}

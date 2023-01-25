export default function MeetupFilter() {
  return (
    <div className="flex flex-row justify-evenly w-80 md:w-[600px] m-auto items-center bg-slate-100 shadow-xl h-28">
      <div>
        <label htmlFor="year" className="m-4 font-bold">Year</label>
        <select id="year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-purple-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-700 dark:focus:border-purple-700">
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <div>
        <label htmlFor="month" className="m-4 font-bold">Month</label>
        <select id="month" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700 focus:border-purple-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-700 dark:focus:border-purple-700">
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <button className="bg-purple-700 text-white font-semibold rounded-full px-4 py-2 hover:scale-105 hover:shadow-xl transition-all duration-200 ease-out">
        Find Meetups
      </button>
    </div>
  );
}

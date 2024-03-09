const cityData = [
  {
    name: "Lisbon",
    flag: "",
    date: "august,2,2021",
  },
  {
    name: "Madrid",
    flag: "",
    date: "july,4,2021",
  },
];

export function CitiesBox() {
  return (
    <ul className="w-full flex flex-col items-center gap-4 ">
      {cityData.map((c) => (
        <li
          className="w-3/4 h-10 flex items-center justify-between pr-2 rounded-lg bg-gray-500"
          key={c.name}
        >
          <span className="w-1 h-8 rounded-lg bg-green-600"></span>
          <span>{c.name}</span>
          <span className="">{`(${c.date})`}</span>
          <button className="border-2 bg-black text-white px-2 rounded-full">
            x
          </button>
        </li>
      ))}
    </ul>
  );
}

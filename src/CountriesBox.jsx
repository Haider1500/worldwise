const countryData = [
  {
    name: "Portugal",
    flag: "",
  },
  {
    name: "Spain",
    flag: "",
  },
  {
    name: "Italy",
    flag: "",
  },
  {
    name: "Iran",
    flag: "",
  },
];

export function CountriesBox() {
  return (
    <ul className="flex flex-wrap gap-3 items-center justify-center">
      {countryData.map((c) => (
        <div
          className="min-w-32 relative flex min-h-24 rounded-lg items-center justify-center bg-gray-500"
          key={c.name}
        >
          <span className="bg-yellow-800 w-2  min-h-24 absolute left-0 rounded-lg"></span>
          <span className="font-semibold text-lg">{c.name}</span>
        </div>
      ))}
    </ul>
  );
}

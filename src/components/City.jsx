import { Link, useParams } from "react-router-dom";

export function City({ city, onDeleteCity }) {
  const data = useParams();
  const { id, lat, long } = city;
  const isSelected = data.id === id;

  return (
    <li
      className={`w-3/4 h-10 flex items-center justify-between pr-2 rounded-md bg-gray-500  ${
        isSelected && "border-green-600 border-2"
      }`}
    >
      <Link
        to={`${id}?lat=${lat}&long=${long}`}
        className="flex-1 flex items-center justify-around border-l-4 border-green-400 h-full rounded-md"
      >
        <span>{city.name}</span>
        <span className="">{`(${city.date})`}</span>
      </Link>
      <button
        className="bg-black px-1.5 rounded-full hover:bg-amber-400"
        onClick={(e) => {
          e.stopPropagation();
          onDeleteCity(id);
        }}
      >
        &times;
      </button>
    </li>
  );
}
